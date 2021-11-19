import { useProductsState } from "@context/products/ProductsProvider";
import { useEffect, useState } from "react";
type Props = {
 options: string[];
 title?: string;
 filterF: (...option: any) => void;
};

const FilterCheckBox = ({ options, title, filterF }: Props) => {
 const { filterProducts } = useProductsState();
 const [selected, setSelected] = useState<string[]>([]);

 useEffect(() => {
  filterProducts(filterF(selected));
 }, [selected]);

 const handleChange = (event: any) => {
  const { value, checked } = event.target;

  if (checked) {
   setSelected((prev) => [...prev, value]);
   return;
  }
  setSelected((prev) => prev.filter((item) => item !== value));
 };

 return (
  <>
   <form onSubmit={(event: any) => event.preventDefault()}>
    {title && <h3>{title}</h3>}
    {options.map((option: string, index: number) => {
     return (
      <label key={index} id={option}>
       <input
        type="checkbox"
        onChange={handleChange}
        name={option}
        value={option}
       />
       <span></span>
       {option}
      </label>
     );
    })}
   </form>
   <style jsx>{`
    form {
     margin: 2rem 0px;
    }
    h3 {
     margin-bottom: 2rem;
     font-size: 1.5rem;
     text-transform: uppercase;
     text-align: center;
    }
    form {
     min-width: 200px;
     height: max-content;
     padding: 10px;
    }
    label {
     display: flex;
     align-items: center;
     font-size: 1.2rem;
     color: #0f0f0f;
     gap: 0.5rem;
     margin-bottom: 0.5rem;
    }
    input[type="checkbox"] {
     display: none;
    }
    input[type="checkbox"] + span {
     display: block;
     position: relative;
     width: 16px;
     height: 16px;
     border: 1px solid #3f3a3a;
     cursor: pointer;
    }
    input[type="checkbox"] + span:before {
     content: "";
     display: block;
     position: absolute;
     left: 50%;
     top: 50%;
     transform: translate(-50%, -50%);
     width: 80%;
     height: 80%;
     background: var(--primary-color);
     opacity: 0;
     transition: opacity 0.2s ease-in-out;
    }

    input[type="checkbox"]:checked + span:before {
     opacity: 1;
    }

    input[type="checkbox"] + span {
     margin-right: 4px;
    }
   `}</style>
  </>
 );
};

export default FilterCheckBox;
