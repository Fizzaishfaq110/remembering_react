import { useEffect, useState } from "react"
import type { Product } from "../types/product"
import { getProducts } from "../services/api"
import "../App.css"

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]) // store data from API
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products)
    })
  }, [])

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <h1>Products</h1>
      <div className="app-container">
        <input
          type="search"
          placeholder="Search for a Product"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <div className="products-container">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h2>{product.title}</h2>
              <h3>Description:</h3>
              <p>{product.description}</p>
              <h3>Price:</h3>
              <p>${product.price}</p>
              <h3>Category:</h3>
              <p>{product.category}</p>
              <h3>Rating:</h3>
              <p>{product.rating.rate}</p>
              <h3>Reviews:</h3>
              <p>{product.rating.count} reviews</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Products
