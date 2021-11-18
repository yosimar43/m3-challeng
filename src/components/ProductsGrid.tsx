import { Product } from "@/helpers/types";
import ProductCard from "@/components/ProductCard";

type Props = {
 products: Product[];
};

const ProductsGrid = ({ products }: Props) => {
 return (
  <>
   <div className="products-container">
    {products.map((product) => (
     <ProductCard key={product._id} product={product} />
    ))}
   </div>
   <style jsx>{`
    .products-container {
     min-height: 50vh;
     padding: 1rem 0.5rem;
     max-width: 800px;
     display: grid;
     grid-template-columns: repeat(3, minmax(min(100%, 200px), 1fr));
     grid-gap: 1rem;
     justify-content: center;
     align-items: center;
    }
    @media (max-width: 700px) {
     .products-container {
      grid-template-columns: repeat(auto-fill, minmax(min(100%, 160px), 1fr));
     }
    }
   `}</style>
  </>
 );
};

export default ProductsGrid;
