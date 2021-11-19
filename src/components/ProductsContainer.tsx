import ProductsGrid from "@/components/ProductsGrid";
import FiltersList from "@/components/FiltersList";
import FilterSelect from "./FilterSelect";
import { useProductsState } from "src/context/products/ProductsProvider";
import { useEffect, useState } from "react";

const ProductsContainer = () => {
 const { products, filteredProducts } = useProductsState();

 const [productsToShow, setProductsToShow] = useState(products);

 useEffect(() => {
  if (filteredProducts.length > 0) {
   setProductsToShow(filteredProducts);
  } else {
   setProductsToShow(products);
  }
 }, [filteredProducts, products]);

 return (
  <>
   <div className="products-header">
    <h2 className="products-header_title">Blusas</h2>
    <FilterSelect />
   </div>
   <div className="products-container">
    <FiltersList />
    <ProductsGrid products={productsToShow} />
   </div>
   <style jsx>{`
    .products-header {
     display: flex;
     justify-content: space-around;
     align-items: center;
     margin: 1rem 0;
    }
    .products-header_title {
     font-size: 3rem;
    }
    .products-container {
     display: flex;
     flex-wrap: wrap;
     padding: 0 3rem;
     justify-content: center;
    }
   `}</style>
  </>
 );
};

export default ProductsContainer;
