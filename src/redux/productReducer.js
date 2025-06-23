import { PRODUCT_LIST } from "./constant";

const initialState = {
  products: []
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST:
      console.log("Reducer called with data:", action.data);
      return {
        ...state,
        products: action.data, 
      };

    default:
      return state;
  }
};
