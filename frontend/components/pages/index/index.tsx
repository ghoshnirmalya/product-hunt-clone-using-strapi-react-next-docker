import React, { FC } from "react";
import Product from "@/types/product";
import { Heading, Stack, Grid } from "@chakra-ui/core";
import ProductCard from "./product-card";

interface IProps {
  products: Product[];
}

const IndexPage: FC<IProps> = ({ products }) => {
  return (
    <Stack spacing={8}>
      <Heading as="h1" size="lg">
        All products
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={8}>
        {products.map((product: Product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </Grid>
    </Stack>
  );
};

export default IndexPage;
