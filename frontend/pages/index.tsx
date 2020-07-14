import React from "react";
import Head from "next/head";
import IndexPage from "@/components/pages/index";
import fetcher from "lib/fetcher";
import useSWR from "swr";
import Product from "@/types/product";
import { NextPage } from "next";

interface IProps {
  products: Product[];
}

export async function getStaticProps() {
  const products = await fetcher(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  return { props: { products } };
}

const Index: NextPage<IProps> = ({ products }) => {
  useSWR(`${process.env.NEXT_PUBLIC_API_URL}/products`, fetcher, {
    initialData: products,
  });

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <IndexPage products={products} />
    </>
  );
};

export default Index;
