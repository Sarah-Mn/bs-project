import { GetServerSideProps } from "next";
import { useState } from "react";
import {
  CoreInfo,
  Header,
  Product,
  TabSection,
} from "@/features/dashboard/products";
import { DashboardLayout } from "@/layouts/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button/Button";

interface Props {
  product: Product;
}

export default function AdminProductPage({ product }: Props) {
  const [editMode, setEditMode] = useState(false);

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto bg-white shadow rounded-2xl p-8">
        {/* HEADER */}
        <Header
          product={product}
          editMode={editMode}
          setEditMode={setEditMode}
        />

        {/* MAIN CONTENT */}
        <CoreInfo product={product} editMode={editMode} />

        {/* TABS SECTION */}
        <TabSection product={product} />

        {/* SAVE BUTTON */}
        {editMode && (
          <div className="mt-10 flex justify-end">
            <Button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg">
              Save Changes
            </Button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;

  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
};
