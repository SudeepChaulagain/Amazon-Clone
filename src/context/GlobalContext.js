import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const initialState = {
    basket:[],
    user:null
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const addToBasket = (item)=>{
        dispatch({type:'ADD_TO_BASKET', payload:item})
    }
    const removeFromBasket = (item)=>{
        dispatch({type:'REMOVE_FROM_BASKET', payload:item})
    }
    const setUser = (user)=>{
        dispatch({type:'SET_USER', payload:user})
    }

    const totalBalance = state.basket?.reduce((amount,item)=>item.price + amount, 0)
    return (
        <GlobalContext.Provider value={{
            addToBasket,
            removeFromBasket,
            setUser,
            totalBalance,
            state

        }}>
            {children}

        </GlobalContext.Provider>
    )
}