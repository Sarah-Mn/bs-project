import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Avatar,
} from "@mui/material";
import { Product } from "../types";
import { useRouter } from "next/router";

interface Props {
  products: Product[];
}

export function ProductTable({ products }: Props) {
  const router = useRouter();
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Product</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Stock</TableCell>
          <TableCell>Rating</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map((product) => (
          <TableRow
            key={product.id}
            hover
            className="cursor-pointer"
            onClick={() => router.push(`/dashboard/products/${product.id}`)}
          >
            <TableCell className="flex items-center gap-3">
              <Avatar src={product.thumbnail} />
              {product.title}
            </TableCell>
            <TableCell>${product.price}</TableCell>
            <TableCell>{product.stock}</TableCell>
            <TableCell>{product.rating}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
