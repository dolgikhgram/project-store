import React from 'react';
import Product from './components/Product';
import Loader from './components/Loader';
import Error from './components/Error';
import { useProducts } from './hooks/products';

function App() {
  const {products, error, loading}=useProducts()
  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      {loading && <Loader/>}
      {error && <Error error={error}/>}
      {products.map(el=>{
        return (
          <Product product={el} key={el.id}/>
        )
      })}
    </div>
  )
}

export default App;
