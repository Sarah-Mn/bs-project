import { useEffect, useState } from "react";
import { Pagination, Alert } from "@mui/material";
import { Product } from "@/types/product";
import { withAuth } from "@/components/auth/withAuth";
import { fetchProducts } from "@/services/dashboard/products/productsApi";
import { DashboardLayout } from "@/layouts/dashboard/DashboardLayout";
import { ProductSearch } from "@/components/dashboard/products/ProductSearch";
import { ProductSkeleton } from "@/components/dashboard/products/ProductSkeleton";
import { ProductTable } from "@/components/dashboard/products/ProductTable";
import { ProductDetailDrawer } from "@/components/dashboard/products/ProductDetailDrawer";

function ProductsPage({ toggleTheme }: { toggleTheme: () => void }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const limit = 10;

  useEffect(() => {
    setLoading(true);
    fetchProducts(page, limit, query)
      .then((data) => setProducts(data.products))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [page, query]);

  return (
    <DashboardLayout toggleTheme={toggleTheme}>
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

export default withAuth(ProductsPage);
