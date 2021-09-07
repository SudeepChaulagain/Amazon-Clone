import React, { useContext } from 'react'
import './CheckoutProduct.css'
import { GlobalContext } from '../context/GlobalContext'

const CheckoutProduct = ({id, image, title, price, rating}) => {
    const {removeFromBasket} = useContext(GlobalContext)
    const removeFromBasketHandler  = ()=>{
        removeFromBasket(id)
    }
    return (
        <div className='checkoutProduct'>
        <img className='checkoutProduct__image' src={image} alt="" />

        <div className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>{title}</p>
            <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <p>🌟</p>
                ))}
            </div>
            <button onClick={removeFromBasketHandler}>Remove from Basket</button>
        </div>
    </div>
    )
}

export default CheckoutProduct
