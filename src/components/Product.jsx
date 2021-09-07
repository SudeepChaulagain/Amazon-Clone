import React, { useContext } from 'react'
import './Product.css'
import { GlobalContext } from '../context/GlobalContext'

const Product = ({id, title, image, price, rating}) => {

    const {addToBasket} = useContext(GlobalContext)

   const addBasketHandler = ()=>{
        let item = {
            id, 
            title, 
            image, 
            price, 
            rating
       }
       addToBasket(item)
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_,i)=>(
                        <p>🌟</p>
                    ))}
                </div>
            </div>
            <img src={image} alt=""/>
            <button onClick={addBasketHandler}>Add to Basket</button>
        </div>

    )
}

export default Product
