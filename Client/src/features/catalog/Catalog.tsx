import { useEffect, useState } from "react";
import type { Product } from "./product.ts";
import ProductList from "./ProductList.tsx";

function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://localhost:7208/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return <ProductList products={products} />;
}

export default Catalog;
