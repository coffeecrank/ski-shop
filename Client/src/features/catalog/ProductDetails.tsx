import {
  Button,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Product } from "./product.ts";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`https://localhost:7208/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (product === null) {
    return <div>Loading...</div>;
  }

  const productDetails = [
    { label: "Brand", value: product.brand },
    { label: "Description", value: product.description },
    { label: "Name", value: product.name },
    { label: "Type", value: product.type },
    { label: "Quantity in stock", value: product.quantityInStock },
  ];

  return (
    <Grid container maxWidth="lg" spacing={6} sx={{ mx: "auto" }}>
      <Grid size={6}>
        <img alt={product.name} src={product.pictureUrl} style={{ width: "100%" }} />
      </Grid>
      <Grid size={6}>
        <Typography variant="h3">{product.name}</Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography color="secondary" variant="h4">
          ${(product.price / 100).toFixed(2)}
        </Typography>
        <TableContainer>
          <Table sx={{ "& td": { fontSize: "1rem" } }}>
            <TableBody>
              {productDetails.map((detail, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ fontWeight: "bold" }}>{detail.label}</TableCell>
                  <TableCell>{detail.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid container marginTop={3} spacing={2}>
          <Grid size={6}>
            <TextField defaultValue={1} fullWidth label="Quantity in basket" type="number" variant="outlined" />
          </Grid>
          <Grid size={6}>
            <Button color="primary" fullWidth size="large" sx={{ height: "55px" }} variant="contained">
              Add to basket
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ProductDetails;
