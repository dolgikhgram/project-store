import React, { useState } from "react"
import { IProduct } from "../models"

interface ProductProps{
    product:IProduct
}

const Product = ({product}:ProductProps)=>{
    const [description,setDescription]= useState(false)
    const btnBgClassName = description ? 'bg-yellow-400' : 'bg-blue-400'
    const btnClasses = ['py-2','px-4',btnBgClassName]
    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img src={product.image} className="w-1/6 border rounded mb-2" alt={product.title}/>
            <p>{product.title} </p>
            <p className="font-bold">{product.price} ₽</p>
            {description && <div>
                <p>{product.description}</p>
                <p>Rate: <span style={{fontWeight:'bold'}}>{product?.rating?.rate}</span></p>
            </div>}
            <button onClick={()=>{setDescription(prev=>!prev)}} className={btnClasses.join(' ')}>
                {!description ? 'Show description' :'Hide description'}
            </button>
        </div>
    )
}

export default Product