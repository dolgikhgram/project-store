import React, { useState } from "react";
import { IProduct } from "../models";
import axios from "axios";
import Error from "./Error";


interface CreateProductProps{
    onCreate: (product:IProduct)=>void
}

const CreateProduct = ({onCreate}:CreateProductProps)=>{
    const productData: IProduct = {
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
        rating: {
            rate:42,
            count:4.8
        }
    }
    const [value, setValue]=useState('')
    const [error, setError]=useState('')

    const submitHandler  = async (event: React.FormEvent) =>{
        event.preventDefault()
        setError('')
        if (value.trim().length===0){
            setError('Please enter valid title.')
            return
        }
            productData.title=value
            const response = await axios.post<IProduct>('https://fakestoreapi.com/products',productData)
            onCreate(response.data)
        } 

    const changeHandler = (event:React.ChangeEvent<HTMLInputElement>):void=>{
        setValue(event.target.value)
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    className="border py-2 
                    px-4 mb-2 
                    w-full outline-0"
                    placeholder="Enter product title..."
                    value={value}
                    onChange={changeHandler}
                />
                {error && <Error error={error}/>}
                <button type="submit" 
                className="py-2 px-4 bg-yellow-400 hover:text-white">
                    Create
                </button>
            </form>
        </>
    )
}

export default CreateProduct