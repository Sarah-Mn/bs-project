import { useState } from "react";
import { Pagination, Alert } from "@mui/material";
import { DashboardLayout } from "@/layouts/dashboard/DashboardLayout";
import {
  Product,
  ProductDetailDrawer,
  ProductSearch,
  ProductSkeleton,
  ProductTable,
  useProducts,
} from "@/features/dashboard/products";

function ProductsPage() {
  const {
    products,
    loading,
    error,
    page,
    setPage,
    query,
    handleQueryChange,
    totalPages,
  } = useProducts(10);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-4">Products</h1>

      <div className="mb-4">
        <ProductSearch value={query} onChange={handleQueryChange} />
      </div>

      {error && <Alert severity="error">{error}</Alert>}
      {loading && <ProductSkeleton />}

      {!loading && products.length === 0 && (
        <Alert severity="info">No products found.</Alert>
      )}

      {!loading && products.length > 0 && (
        <>
          <ProductTable products={products} onSelect={setSelectedProduct} />
          <div className="flex justify-center mt-6">
            <Pagination
              count={totalPages}
              page={page}
              onChange={(_, p) => setPage(p)}
            />
          </div>
        </>
      )}

      {selectedProduct && (
        <ProductDetailDrawer
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </DashboardLayout>
  );
}

export default ProductsPage;
