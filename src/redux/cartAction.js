// iska kam hota hai reactjs se data leke reducer ko dena 
// Iska kaam:
// Sirf ek plain object return karna (type + data).
// Yeh logic define nahi karta ke cart me data kaise jaye.
// Yeh sirf batata hai: "Hey reducer! ADD_TO_CART ka action aaya hai, yeh data le lo."

import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART, INCREMENT_ITEM, DECREMENT_ITEM } from "./constant";


export const addToCart = (data) => {
  console.log("ADD_TO_CART action called", data);
  return {
    type: ADD_TO_CART,
    data:data,
  };
};

export const removeFromCart = (id) => {
  console.log("REMOVE_FROM_CART action called", id);
  return {
    type: REMOVE_FROM_CART,
    data: id,
  };
};

export const emptyCart = () => {
  console.log("EMPTY_CART action called");
  return {
    type: EMPTY_CART,
  };
};

export const incrementItem = (id) => {
  return {
    type: INCREMENT_ITEM,
    data: id,
  };
};

export const decrementItem = (id) => {
  return {
    type: DECREMENT_ITEM,
    data: id,
  };
};

