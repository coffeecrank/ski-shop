import type { Product } from "./product.ts";
import ProductList from "./ProductList.tsx";

type Props = {
  products: Product[];
};

function Catalog({ products }: Props) {
  return <ProductList products={products} />;
}

export default Catalog;
