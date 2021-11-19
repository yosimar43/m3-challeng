import { useProductsState } from "@context/products/ProductsProvider";
import { useEffect, useState } from "react";

const FilterSelect = () => {
 const { products, filterProducts } = useProductsState();

 const [value, setValue] = useState("");
 useEffect(() => {
  if (value === "price") {
   filterProducts(products.sort((a: any, b: any) => b.price - a.price));
   return;
  }
  if (value === "price-desc") {
   filterProducts(products.sort((a: any, b: any) => a.price - b.price));
   return;
  }
  if (value === "recent") {
   filterProducts(
    products.sort((a: any, b: any) => Date.parse(b.date) - Date.parse(a.date))
   );
   return;
  }
  filterProducts([]);
 }, [value]);
 const handleChange = (event: any) => {
  setValue(event.target.value);
 };

 return (
  <>
   <form onSubmit={(event: any) => event.preventDefault()}>
    <select name="orderProducts" id="orderProducts" onChange={handleChange}>
     <option value="" defaultValue="true">
      Ordenar por
     </option>
     <option value="recent">Mas reciente</option>
     <option value="price">Mayor precio</option>
     <option value="price-desc">Menor precio</option>
    </select>
   </form>
   <style jsx>
    {`
     select {
      outline: none;
      border: 1px solid var(--light-grey-color);
      padding: 0.5rem;
      background: none;
     }
     option {
      padding: 0.5rem;
      margin: 0;
     }
    `}
   </style>
  </>
 );
};

export default FilterSelect;
