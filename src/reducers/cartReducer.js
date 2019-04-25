import {actionTypes} from '../constants/actionTypes';

const initialState = null;
const cartReducer = (state=initialState, action) => {
    switch(action.type) {
      case actionTypes.ADD_CART:
     console.log(action);
        return action;

      case actionTypes.DELETE_CART:
        return state.filter((cart)=>cart.id !== action.id);
     
        case actionTypes.UPDATE_CART:
        return state.map((cart)=>{
          if(cart.id === action.id) {
            return {
               ...cart,
               title:action.data.newTitle,
               message:action.data.newMessage,
               editing: !cart.editing
            }
          } else return cart;
        })
        
        default:
        return state;
    }
  }
  export default cartReducer;