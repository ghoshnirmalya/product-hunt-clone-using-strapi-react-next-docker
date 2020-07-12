import React from "react";
import Head from "next/head";
import IndexPage from "@/components/pages/index";
import fetcher from "lib/fetcher";
import useSWR from "swr";

export async function getStaticProps() {
  const products = await fetcher(`${process.env.API_URL}/products`);
  return { props: { products } };
}

const Index = ({ products }) => {
  useSWR(`${process.env.API_URL}/products`, fetcher, {
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
