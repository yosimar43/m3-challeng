import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import { Product } from "@/helpers/types";
import Header from "@/components/Header";

type Props = {
 products: Array<Product>;
};

//get data from api
export const getServerSideProps: GetServerSideProps = async (context) => {
 try {
  const productsRequest = await fetch(`${process.env.API_URL}/api/products`);
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
 console.log(products);
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
   <style global jsx>{`
    :root {
     --primary-color: rgba(0, 192, 238, 1);
     --secondary-color: rgba(0, 0, 0, 1);
     --grey-color: rgba(102, 102, 102, 1);
     --light-grey-color: rgba(0, 0, 0, 0, 5);
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
