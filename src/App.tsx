import React, { useContext, useState } from "react";
import Product from "./components/Product";
import Loader from "./components/Loader";
import Error from "./components/Error";
import { useProducts } from "./hooks/products";
import { Modal } from "./components/Modal";
import CreateProduct from "./components/CreateProduct";
import { IProduct } from "./models";
import { ModalContext } from "./context/ModalContext";

function App() {
  const { products, error, loading, addProduct} = useProducts();

  const createHandler = (product:IProduct)=>{
    close()
    addProduct(product)
  }
const {modal,open,close}=useContext(ModalContext)

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader/>}
      {error && <Error error={error} />}
      {products.map((el) => {
        return <Product product={el} key={el.id} />;
      })}
      {
        modal && <Modal title="Create new product"  onClose={close}>
          <CreateProduct onCreate={createHandler}/>
        </Modal>
      }
      <button 
      onClick={open}
      className="fixed bottom-5 right-5 
      rounded-full bg-red-700 
      text-white text-2xl
      px-4 py-2">+</button>
    </div>
  );
}

export default App;
