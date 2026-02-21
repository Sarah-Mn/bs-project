import React, { useState } from "react";
import { Product } from "../../types";
import Label from "./Label";
import Input from "@/components/ui/input/Input";
import Display from "./Display";
import EditableField from "@/components/ui/editableField/EditableField";
import Image from "next/image";

export const CoreInfo = ({
  product,
  editMode,
}: {
  product: Product;
  editMode: boolean;
}) => {
  const [formState, setFormState] = useState(product);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const discountedPrice =
    formState.price - (formState.price * formState.discountPercentage) / 100;
  return (
    <div className="grid md:grid-cols-3 gap-10 mt-10">
      {/* LEFT COLUMN - Images */}
      <div>
        <div className="border rounded-xl p-4 bg-gray-50">
          <Image
            width={256}
            height={256}
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-64 object-contain"
          />
        </div>

        <div className="mt-4 space-y-2 text-xs text-gray-500">
          <p>
            <strong>Created:</strong>{" "}
            {new Date(product.meta.createdAt).toLocaleString()}
          </p>
          <p>
            <strong>Updated:</strong>{" "}
            {new Date(product.meta.updatedAt).toLocaleString()}
          </p>
          <p>
            <strong>Barcode:</strong> {product.meta.barcode}
          </p>
        </div>
      </div>

      {/* CENTER COLUMN - Core Info */}
      <div className="md:col-span-2 space-y-6">
        {/* TITLE */}
        <div>
          <Label>Title</Label>
          {editMode ? (
            <Input
              name="title"
              value={formState.title}
              onChange={handleChange}
            />
          ) : (
            <Display>{product.title}</Display>
          )}
        </div>

        {/* DESCRIPTION */}
        <div>
          <Label>Description</Label>
          {editMode ? (
            <textarea
              name="description"
              value={formState.description}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 text-sm"
            />
          ) : (
            <Display>{product.description}</Display>
          )}
        </div>

        {/* PRICING */}
        <div className="grid grid-cols-3 gap-6">
          <EditableField
            label="Price"
            name="price"
            value={formState.price}
            editMode={editMode}
            onChange={handleChange}
          />
          <EditableField
            label="Discount %"
            name="discountPercentage"
            value={formState.discountPercentage}
            editMode={editMode}
            onChange={handleChange}
          />
          <div>
            <Label>Final Price</Label>
            <Display>${discountedPrice.toFixed(2)}</Display>
          </div>
        </div>

        {/* STOCK */}
        <EditableField
          label="Stock"
          name="stock"
          value={formState.stock}
          editMode={editMode}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
