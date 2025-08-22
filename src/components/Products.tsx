import { useEffect, useState } from "react"
import type { Product } from "../types/product";
import { getProducts } from "../services/api";

const Products = () => {

  const[products,setProducts] = useState<Product[]>([]); //to store the data returned from api call

  useEffect (()=> {
    getProducts().then((products)=> {
      setProducts(products);
    });
  }, []);

  console.log("Products: ", products);

  return (
    <div>Products will be here</div>
  )
}

export default Products