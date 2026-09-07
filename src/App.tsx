import './App.css'
import type { ProductType } from './type'

const ProductPromise = async(): Promise<ProductType[]>=> {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()
  return data
}

function App() {
  

  return (
    <>
    
            
            
    </>
  )
}

export default App
