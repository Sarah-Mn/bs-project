import { Product } from "../../types";
import InfoRow from "./InfoRow";

const Dimensions = ({ product }: { product: Product }) => {
  const details = [
    { label: "Width", value: `${product.dimensions.width} cm` },
    { label: "Height", value: `${product.dimensions.height} cm` },
    { label: "Depth", value: `${product.dimensions.depth} cm` },
  ];

  return (
    <div className="grid grid-cols-3 gap-6 text-sm">
      {details?.map((item) => (
        <InfoRow key={item?.label} label={item?.label} value={item?.value} />
      ))}
    </div>
  );
};

export default Dimensions;
