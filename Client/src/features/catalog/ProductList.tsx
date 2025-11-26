import { Box } from "@mui/material";
import type { Product } from "./product.ts";
import { ProductCard } from "./ProductCard.tsx";

type ProductListProps = {
  products: Product[];
};

function ProductList({ products }: ProductListProps) {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3, justifyContent: "center" }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Box>
  );
}

export { ProductList };
