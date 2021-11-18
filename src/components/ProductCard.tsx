import { Product } from "@/helpers/types";
import Image from "next/image";

type Props = {
 product: Product;
};

const productCard = ({ product }: Props) => {
 const { name, price, image } = product;
 console.log(product);

 return (
  <div className="product-card">
   <div className="product-image">
    <Image src={image} alt={name} layout="fill" />
   </div>
   <div className="product-details">
    <h3 className="product-details_name">{name}</h3>
    <p className="product-detail_price">R$ {price}</p>
   </div>
   <button className="product-shop">Comprar</button>

   <style jsx>{`
    .product-card {
     width: 200px;
     height: max-content;
     background-color: #fff;
     border-radius: 5px;
     box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
     text-align: center;
    }
    .product-image {
     position: relative;
     object-fit: cover;
     width: 100%;
     height: 300px;
     background-color: #eee;
    }
    .product-details {
     padding: 1rem 10px;
    }
    .product-details_name {
     font-size: 1.2rem;
     font-weight: bold;
     text-transform: uppercase;
     color: var(--secondary-color);
    }
    .product-detail_price {
     font-size: 1.3rem;
    }
    .product-shop {
     background-color: var(--primary-color);
     display: block;
     color: #fff;
     padding: 0.5rem 1rem;
     min-height: 30px;
     border-style: none;
     outline: none;
     width: 100%;
     transition: 0.3s ease-in-out background-color;
    }

    .product-shop:hover {
     background: rgba(0, 192, 238, 0.75);
    }
   `}</style>
  </div>
 );
};

export default productCard;
