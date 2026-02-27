import {  NextApiRequest, NextApiResponse } from "next";


const baseUrl = process.env.API_BASE_URL || "https://dummyjson.com";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){

   try {
        if(req.method !== "PUT") {
            return res.status(405).json({message: "Method Not Allowed"});
        }

        const authHeader = req.headers.cookie;

        if(!authHeader) {
            return res.status(401).json({message: "Unauthorized"});
        }

        const { id } = req.query;

        if(!id || typeof id !== "string" || isNaN(Number(id))) {
            return res.status(400).json({message: "Invalid product ID"});
        }

        const { title }  = req.body;

        const response = await fetch(`${baseUrl}/products/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title }),
        })

        if (!response.ok) {
            return res.status(response.status).json({message: "Failed to update product"});
        }

        const updatedProduct = await response.json();
        return res.status(200).json(updatedProduct);


   } catch (error) {
        console.error("Error updating product:", error);
        return res.status(500).json({message: "Internal Server Error"});
   }


}