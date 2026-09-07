import { Suspense } from 'react'
import './App.css'
import type { ProductType } from './type'
import Products from './components/products/Products'

const ProductPromise = async(): Promise<ProductType[]>=> {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()
  return data
}

function App() {
  

  return (
    <>
    
          <Suspense fallback={<h1>Data is cooking...</h1>}>
          <Products ProductPromise= {ProductPromise()}></Products>
          </Suspense>
            
    </>
  )
}

export default App
