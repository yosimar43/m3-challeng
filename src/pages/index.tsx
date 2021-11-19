import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import { Product } from "@/helpers/types";
import Header from "@/components/Header";
import ProductsContainer from "@/components/ProductsContainer";
import { useEffect } from "react";
import { useProductsState } from "src/context/products/ProductsProvider";

type Props = {
 products: Array<Product>;
};

//get data from api
export const getServerSideProps: GetServerSideProps = async (context) => {
 try {
  const productsRequest = await fetch(`${process.env.API_URL}/products`);
  const products = await productsRequest.json();
  return {
   props: { products },
  };
 } catch (error: any) {
  return {
   props: { products: [] },
  };
 }
};

const Home: NextPage<Props> = ({ products }) => {
 const { getProducts } = useProductsState();

 useEffect(() => {
  getProducts(products);
 }, []);

 return (
  <div>
   <Head>
    <title>M3 | Digital</title>
    <meta name="description" content="M3 | Digital" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
     rel="preconnect"
     href="https://fonts.gstatic.com"
     crossOrigin="true"
    />
    <link
     href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap"
     rel="stylesheet"
    />
   </Head>
   <Header image="/logo-m3.png" />

   <main>
    <ProductsContainer />
   </main>

   <style global jsx>{`
    :root {
     --primary-color: rgba(0, 192, 238, 1);
     --secondary-color: rgba(0, 0, 0, 1);
     --grey-color: rgba(102, 102, 102, 1);
     --light-grey-color: rgba(0, 0, 0, 0.5);
    }
    html {
     font-family: "Open Sans", sans-serif;
     font-size: 10px;
     font-style: normal;
     font-weight: normal;
    }
   `}</style>
  </div>
 );
};

export default Home;
