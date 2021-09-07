
const AppReducer = (state, action) => {
  switch (action.type) {
      case 'ADD_TO_BASKET':
          
          return {
              ...state,
              basket:[...state.basket, action.payload]
          };

        case 'REMOVE_FROM_BASKET':
            const product = state.basket.find(item=>item.id === action.payload)
            const index = state.basket.findIndex(item=>item.id === action.payload)
            let newBasket = [...state.basket]
            if (index >= 0) {
                newBasket.splice(index, 1)
            }
            else{
                console.warn(`Cannot remove the product ${product} as it is not in the basket!`)
            }
            return{
                ...state,
                basket: newBasket
            }

        case 'SET_USER':
            return{
                ...state,
                user:action.payload
            }
  
      default:
          return state;
  }
}

export default AppReducer
