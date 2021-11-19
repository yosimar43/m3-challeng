import { createContext, useContext, useReducer } from "react";
import ProductsReducer from "./ProductsReducer";
import { Product } from "@/helpers/types";

import { FILTER_PRODUCTS, GET_PRODUCTS } from "./productsTypes";

type Props = {
 children: React.ReactNode;
};

export const ProductsContext = createContext<any>(null);

export default function ProductsProvider({ children }: Props) {
 const initialState = {
  products: [],
  filteredProducts: [],
 };

 const [state, dispatch] = useReducer(ProductsReducer, initialState);

 const getProducts = (products: Product[]) => {
  dispatch({
   type: GET_PRODUCTS,
   payload: products,
  });
 };

 const filterProducts = (products: Product[]) => {
  dispatch({
   type: FILTER_PRODUCTS,
   payload: products,
  });
 };

 const data = {
  getProducts,
  filterProducts,
  products: state.products,
  filteredProducts: state.filteredProducts,
 };

 return (
  <ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>
 );
}

export const useProductsState = () => {
 const context = useContext(ProductsContext);
 if (context === undefined) {
  throw new Error("useProductsState must be used within a ProductsProvider");
 }
 return context;
};
