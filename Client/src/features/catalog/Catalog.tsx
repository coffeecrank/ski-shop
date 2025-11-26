import { useFetchProductsQuery } from "./catalogApi.ts";
import { ProductList } from "./ProductList.tsx";

function Catalog() {
  const { data: products, isLoading } = useFetchProductsQuery();

  if (isLoading || products === undefined) return <div>Loading...</div>;

  return <ProductList products={products} />;
}

export { Catalog };
