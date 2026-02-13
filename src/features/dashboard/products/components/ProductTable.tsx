import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Avatar,
} from "@mui/material";
import { Product } from "../types";

interface Props {
  products: Product[];
  onSelect: (product: Product) => void;
}

export function ProductTable({ products, onSelect }: Props) {
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
            onClick={() => onSelect(product)}
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
