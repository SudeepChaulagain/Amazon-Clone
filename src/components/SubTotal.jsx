import React, { Fragment, useContext } from 'react'
import './SubTotal.css'
import CurrencyFormat from 'react-currency-format'
import { GlobalContext } from '../context/GlobalContext'
// import { useHistory } from 'react-router'

const SubTotal = () => {
    const {state, totalBalance} = useContext(GlobalContext)
    return (
        <div className="subtotal">
           <CurrencyFormat renderText={(value)=>(
               <Fragment>
                   <p>
                       Subtotal ({state.basket.length} items): <strong>{value}</strong>
                   </p>
                   <small className="subtotal__gift">
                        <input type="checkbox" /> This order contains a gift
                    </small>
               </Fragment>
           )}
           decimalScale={2}
           value={totalBalance}
           displayType={"text"}
           thousandSeparator={true}
           prefix={"$"}
           />
          <button>Proceed to Checkout</button>
        </div>
    )
}

export default SubTotal
