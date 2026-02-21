import { Product } from "../../types";
import InfoRow from "./InfoRow";

const Inventory = ({ product }: { product: Product }) => {
  const details = [
    { label: "Brand", value: product.brand },
    { label: "Category", value: product.category },
    { label: "Weight", value: `${product.weight}g` },
    { label: "Min Order", value: product.minimumOrderQuantity },
    { label: "Return Policy", value: product.returnPolicy },
    { label: "Warranty", value: product.warrantyInformation },

    // { label: "Width", value: `${product.dimensions.width} cm` },
    // { label: "Height", value: `${product.dimensions.height} cm` },
    // { label: "Depth", value: `${product.dimensions.depth} cm` },
    // { label: "Barcode", value: product.meta.barcode },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6 text-sm">
      {details?.map((item) => (
        <InfoRow key={item?.label} label={item?.label} value={item?.value} />
      ))}
    </div>
  );
};

export default Inventory;
