import { http } from "@/lib/http";


export const updateProduct = async (id:number, title:string) => {
    const response = await http.put(`/products/${id}`, { title });
    return response.data;
}