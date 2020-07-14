import React, { FC } from "react";
import Product from "@/types/product";
import { Box, Image, Heading, Text, Stack, Button } from "@chakra-ui/core";
import Link from "next/link";
import truncate from "lodash/truncate";

interface IProps {
  product: Product;
}

const ProductCard: FC<IProps> = ({ product }) => {
  return (
    <Link as={`product/${product.id}`} href="product/[productId]">
      <a>
        <Box p={4} bg="white" shadow="md" rounded="md">
          <Stack spacing={4} h="full">
            <Image
              height={48}
              objectFit="cover"
              rounded="md"
              src={`${process.env.NEXT_PUBLIC_API_URL}${product.image.url}`}
              alt={product.name}
            />
            <Stack spacing={4} d="flex" justifyContent="space-between" h="full">
              <Stack spacing={4}>
                <Heading as="h2" size="md">
                  {product.name}
                </Heading>
                <Text fontSize="sm">
                  {truncate(product.description, { length: 160 })}
                </Text>
              </Stack>
              <Box>
                <Link href="/sign-up">
                  <Button variantColor="cyan" w="full">
                    View product
                  </Button>
                </Link>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </a>
    </Link>
  );
};

export default ProductCard;
