import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      console.log("SET_PRODUCT_LIST condition", action);
      return {
        ...state,
        products: action.data,
      };

    default:
      return state;
  }
};
