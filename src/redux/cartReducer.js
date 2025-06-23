// Agar cart ke andar multiple actions ho sakte hain — jaise:
// ADD_TO_CART
// REMOVE_FROM_CART
// EMPTY_CART
// toh ek hi cartReducer banega, jo sabhi cart-related actions ko handle karega using a switch-case.

// for example
// const state = {
//   user: { name: "Rohit", loggedIn: true },
//   cart: ["apple", "banana"]
// };

// const action = {
//   type: "ADD_TO_CART",
//   data: "mango"
// };

// const newState = {
//   ...state,
//   cart: [...state.cart, action.data]
// };

// {
//   user: { name: "Rohit", loggedIn: true },
//   cart: ["apple", "banana"]
// }
import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART, INCREMENT_ITEM, DECREMENT_ITEM } from "./constant";


const initialState = {
  cart: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log(action);
      return {
        ...state,
        cart: [...state.cart,  action.data],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.data),
      };
    case EMPTY_CART:
      return {
        ...state,
        cart: [],
      };
    case INCREMENT_ITEM:
      return {
        ...state,
        cart: state.cart.map((item) => {
          item.id = action.data
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        }),
      };
    case DECREMENT_ITEM:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.data && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

    default:
      return state;
  }
};
