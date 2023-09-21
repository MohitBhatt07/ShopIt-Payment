import React, { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Products from "./components/Products";
import { ProductData } from "./data/ProductData";

const Home = () => {
  const [products, setProducts] = useState([]);

  const data = ProductData;
  
  useEffect(() => {
   
    setProducts(data);
    
  }, [data]);
  return (
    <div>
      <Banner />
      <Products products={products} />
    </div>
  );
};

export default Home;
