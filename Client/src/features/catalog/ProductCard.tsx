import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router";
import type { Product } from "./product.ts";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <Card elevation={3} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 280 }}>
      <CardMedia image={product.pictureUrl} sx={{ height: 240, backgroundSize: "cover" }} title={product.name} />
      <CardContent>
        <Typography gutterBottom={true} sx={{ textTransform: "uppercase" }} variant="subtitle2">
          {product.name}
        </Typography>
        <Typography sx={{ color: "secondary.main" }} variant="h6">
          ${(product.price / 100).toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button>Add to cart</Button>
        <Button component={Link} to={`/catalog/${product.id}`}>
          View
        </Button>
      </CardActions>
    </Card>
  );
}

export { ProductCard };
