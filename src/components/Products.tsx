import { useEffect, useState } from "react"
import type { Product } from "../types/product"
import { getProducts } from "../services/api"
import "../App.css"
import { Card, TextField, Typography } from "@mui/material"

const Products = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    getProducts().then((products) => setProducts(products))
  }, [])

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <Typography variant="h4" gutterBottom style={{ fontWeight: 600 }}>
        Products
      </Typography>

      <div className="app-container">
        <TextField
          variant="outlined"
          color="secondary"
          value={searchTerm}
          placeholder="Search for a product"
          onChange={(e) => setSearchTerm(e.target.value)}
          fullWidth
          sx={{
            backgroundColor: "#fff0f6",
            borderRadius: "8px",
            marginBottom: "2rem"
          }}
        />

        <div className="products-container">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="product-card"
              sx={{
                padding: "1.5rem",
                borderRadius: "1rem",
                boxShadow: "0 6px 12px rgba(0,0,0,0.06)",
                transition: "0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 12px 20px rgba(0,0,0,0.1)"
                }
              }}
            >
              <img src={product.image} alt={product.title} style={{ maxHeight: "180px", objectFit: "contain" }} />
              <Typography variant="h6" mt={2}>{product.title}</Typography>
              <Typography variant="body2" color="text.secondary" mt={1}>
                {product.description.slice(0, 100)}...
              </Typography>
              <Typography mt={2}><strong>Price:</strong> ${product.price}</Typography>
              <Typography><strong>Category:</strong> {product.category}</Typography>
              <Typography><strong>Rating:</strong> ⭐ {product.rating.rate} ({product.rating.count} reviews)</Typography>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}

export default Products
