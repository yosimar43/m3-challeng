import { useProductsState } from "@context/products/ProductsProvider";
import { useState, useEffect } from "react";

type Props = {
 options: string[];
 title?: string;
 filter: (...option: any) => void;
};

const FilterButtom = ({ options, title, filter }: Props) => {
 const { filterProducts } = useProductsState();
 const [selected, setSelected] = useState<string>("-");
 useEffect(() => {
  filterProducts(filter(selected));
 }, [selected]);

 const handlerClick = (event: any) => {
  event.preventDefault();
  setSelected(event.target.value);
 };

 return (
  <div>
   {title && <h3 className="title">{title}</h3>}
   <div className="butom-group">
    {options.map((option, index) => {
     return (
      <button
       key={index}
       onClick={handlerClick}
       type="button"
       value={option}
       className={`buttom ${option === selected ? "button--active" : ""}`}
      >
       {option}
      </button>
     );
    })}
   </div>

   <style jsx>{`
    .title {
     margin-bottom: 1rem;
     font-size: 1.5rem;
     text-transform: uppercase;
     text-align: center;
    }
    .butom-group {
     display: grid;
     grid-template-rows: repeat(3, 35px);
     grid-template-columns: repeat(3, 35px);
     align-items: center;
     grid-gap: 10px;
    }
    .buttom {
     padding: 1rem;
     width: 100%;
     height: 100%;
     text-transform: uppercase;
     background-color: #fff;
     border: 1px solid var(--secondary-color);
     outline: none;
    }
    .button--active {
     border-color: var(--primary-color);
     color: var(--primary-color);
    }
   `}</style>
  </div>
 );
};

export default FilterButtom;
