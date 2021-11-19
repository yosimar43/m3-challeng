import { FILTER_PRODUCTS, GET_PRODUCTS } from "./productsTypes";

const initialState = {
 products: [],
 filteredProducts: [],
};

export default function ProductsReducer(state = initialState, action: any) {
 switch (action.type) {
  case GET_PRODUCTS:
   return {
    ...state,
    products: action.payload,
   };

  case FILTER_PRODUCTS:
   return {
    ...state,
    filteredProducts: action.payload,
   };
  default:
   return state;
 }
}
