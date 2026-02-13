import { Drawer, Divider, Typography } from "@mui/material";
import { Product } from "../types";
import Image from "next/image";

interface Props {
  product: Product | null;
  onClose: () => void;
}

export function ProductDetailDrawer({ product, onClose }: Props) {
  if (!product) return null;

  return (
    <Drawer anchor="right" open={!!product} onClose={onClose}>
      <div className="w-96 p-4 space-y-4">
        <Typography variant="h6">{product.title}</Typography>
        <Image
          width={100}
          height={100}
          src={product.thumbnail}
          alt={product.title}
          className="rounded-lg"
        />

        <Typography>{product.description}</Typography>

        <Divider />

        <Typography variant="subtitle2">Pricing</Typography>
        <p>Price: ${product.price}</p>
        <p>Discount: {product.discountPercentage}%</p>

        <Divider />

        <Typography variant="subtitle2">Shipping</Typography>
        <p>{product.shippingInformation}</p>

        <Divider />

        <Typography variant="subtitle2">Meta</Typography>
        <p>SKU: {product.sku}</p>
        <p>Brand: {product.brand}</p>
      </div>
    </Drawer>
  );
}
