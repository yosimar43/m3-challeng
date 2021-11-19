import "minireset.css";
import type { AppProps } from "next/app";
import ProductsProvider from "src/context/products/ProductsProvider";

function MyApp({ Component, pageProps }: AppProps) {
 return (
  <ProductsProvider>
   <Component {...pageProps} />
  </ProductsProvider>
 );
}

export default MyApp;
