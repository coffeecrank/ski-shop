import { Box } from "@mui/material";
import type { Product } from "./product.ts";
import ProductCard from "./ProductCard.tsx";

type Props = {
  products: Product[];
};

function ProductList({ products }: Props) {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, justifyContent: "center" }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Box>
  );
}

export default ProductList;
