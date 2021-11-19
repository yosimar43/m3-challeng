import FilterCheckBox from "@/components/FilterCheckBox";
import { Product } from "@/helpers/types";
import { useProductsState } from "@context/products/ProductsProvider";
import FilterButtom from "./FilterButtom";

const FiltersList = () => {
 const { products } = useProductsState();

 return (
  <div className="filter-conatiner">
   <FilterCheckBox
    options={["Cinza", "Preto", "Laranja", "Branco", "Amarelo", "Rosa"]}
    title="Precios"
    filterF={(filter: string[]) => {
     return products.filter((product: Product) =>
      filter.includes(product.color)
     );
    }}
   />
   <FilterButtom
    options={["-", "P", "M", "G", "GG", "U", "36", "38", "40", "44", "46"]}
    title="tamaños"
    filter={(filter: string) => {
     return products.filter((product: Product) => {
      return product.size.includes(filter);
     });
    }}
   />
   <FilterCheckBox
    title="Rango de precios"
    options={["de R$0 até r$50", "de R$51 até r$150", "de R$301 até r$500"]}
    filterF={(filter: string[]) => {
     let getNumberRange = filter
      .map((item: string) => item.match(/[-]{0,1}[\d]*[.]{0,1}[\d]+/g))
      .flat()
      .map((item: any) => parseFloat(item))
      .sort((a: number, b: number) => a - b);

     return products.filter((product: Product) => {
      return (
       product.price >= getNumberRange[0] &&
       product.price <= getNumberRange[getNumberRange.length - 1]
      );
     });
    }}
   />

   <style jsx>{`
    .filter-conatiner {
     height: max-content;
     padding: 2rem 1rem;
    }
   `}</style>
  </div>
 );
};

export default FiltersList;
