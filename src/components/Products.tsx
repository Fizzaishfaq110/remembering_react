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
    <div>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Products