import { Button } from '@mui/material'
import './App.css'
import Products from './components/Products'

function App() {
  return (
    <div className="app-wrapper">
      <h1>Hello World!!</h1>
      <Products />
      <Button variant="contained" color="primary" className="centered-button">
        CLICK ME
      </Button>
    </div>
  )
}

export default App
