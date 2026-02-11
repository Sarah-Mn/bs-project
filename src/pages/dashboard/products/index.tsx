import { useCallback, useEffect, useState } from "react";
import { Pagination, Alert } from "@mui/material";
import { Product } from "@/types/product";
import { fetchProducts } from "@/services/dashboard/products/productsApi";
import { DashboardLayout } from "@/layouts/dashboard/DashboardLayout";
import { ProductSearch } from "@/components/dashboard/products/ProductSearch";
import { ProductSkeleton } from "@/components/dashboard/products/ProductSkeleton";
import { ProductTable } from "@/components/dashboard/products/ProductTable";
import { ProductDetailDrawer } from "@/components/dashboard/products/ProductDetailDrawer";
import { AxiosError } from "axios";

function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const limit = 10;

  const loadProducts = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchProducts(page, limit, query);
      setProducts(data.products);
    } catch (error: unknown) {
      const message =
        error instanceof AxiosError
          ? error.message
          : "An error occurred while fetching users";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, [page, query]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-4">Products</h1>

      <div className="mb-4">
        <ProductSearch value={query} onChange={setQuery} />
      </div>

      {error && <Alert severity="error">{error}</Alert>}
      {loading ? (
        <ProductSkeleton />
      ) : (
        <>
          <ProductTable products={products} onSelect={setSelectedProduct} />
          <div className="flex justify-center mt-6">
            <Pagination
              count={10}
              page={page}
              onChange={(_, p) => setPage(p)}
            />
          </div>
        </>
      )}

      <ProductDetailDrawer
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </DashboardLayout>
  );
}

export default ProductsPage;
