import Link from "next/link";
import Image from "next/image";

type Props = {
 image: string;
};

const Header = ({ image }: Props) => {
 return (
  <>
   <header>
    <h1>
     <Link href="/">
      <a>
       <Image src={image} alt="logo" width="120" height="30" />
      </a>
     </Link>
    </h1>
    <nav>
     <div>
      <Image src="/bolso.png" alt="shopping bag" width="25" height="25" />
      <span>{1}</span>
     </div>
    </nav>
   </header>
   <style jsx>{`
    header {
     display: flex;
     flex-wrap: wrap;
     justify-content: space-around;
     align-items: center;
     margin: 0 auto;
     padding: 0.5em 1rem;
     border-bottom: 1px solid var(--grey-color);
    }
    h1 {
     font-size: 1.5em;
     font-weight: 600;
     color: #444;
    }
    nav {
     font-size: 0.8em;
     text-transform: uppercase;
     letter-spacing: 0.2em;
     color: #777;
    }

    nav div {
     position: relative;
     width: 30px;
     height: 30px;
    }
    nav div span {
     position: absolute;
     display: block;
     width: 15px;
     height: 15px;
     border-radius: 100%;
     background: var(--primary-color);
     text-align: center;
     bottom: 0;
     right: 0;
     font-size: 1rem;
     color: #fff;
    }
    @media (min-width: 600px) {
     header {
      padding: 1em;
     }
    }
   `}</style>
  </>
 );
};

export default Header;
