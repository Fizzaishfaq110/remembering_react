import { useEffect, useState } from "react"
import type { Product } from "../types/product";
import { getProducts } from "../services/api";

const Products = () => {

  const[products,setProducts] = useState<Product[]>([]); //to store the data returned from api call
  const[searchTerm,setSearchTerm]= useState("");

  useEffect (()=> {
    getProducts().then((products)=> {
      setProducts(products);
    });
  }, []);

  console.log("Products: ", products);

  const filteredProducts = products.filter((product)=>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <h1>Products</h1>
      <input type="search" placeholder="Search for a Product" value={searchTerm} onChange={(e)=> {setSearchTerm(e.target.value)}}></input>

      <div>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <h3>Description:</h3>
            <p> {product.description}</p>
            <h3>Price:</h3>
            <p>{product.price}</p>
            <h3>Category:</h3>
            <p>{product.category}</p>
            <h3>Rating:</h3>
            <p>{product.rating.rate}</p>
            <h3>Reviews:</h3>
            <p> {product.rating.count} reviews</p>
            <img src={product.image} alt="product image" width={150} height={150}></img>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Products