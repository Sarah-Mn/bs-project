import StatusBadge from "./StatusBadge";
import { Product } from "../../types";
import { Button } from "@/components/ui/button/Button";

export const Header = ({
  product,
  editMode,
  setEditMode,
}: {
  product: Product;
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
}) => {
  return (
    <div className="flex justify-between items-start border-b pb-6">
      <div>
        <h1 className="text-2xl font-bold">Product #{product.id}</h1>
        <p className="text-gray-500 text-sm mt-1">SKU: {product.sku}</p>
      </div>

      <div className="flex gap-4">
        <StatusBadge status={product.availabilityStatus} />

        <Button
          onClick={() => setEditMode(!editMode)}
          className="px-4 py-2 bg-black text-white rounded-lg text-sm"
        >
          {editMode ? "Cancel" : "Edit"}
        </Button>
      </div>
    </div>
  );
};
