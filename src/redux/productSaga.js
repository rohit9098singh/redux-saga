// Generator function ek special function hota hai JavaScript me jo function* syntax se likha jaata hai aur yield keyword use karta hai.

// Normal function turant return kar deta hai.

// Generator function execution ko pause aur resume kar sakta hai — jisse asynchronous (async) code ko easily manage kiya ja sakta hai.
import { takeEvery,put } from "redux-saga/effects";
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";


function* getProducts() {
  // Step 1: API call karo (ye async hai isliye yield lagaya)
  let data = yield fetch("http://localhost:3000/product");
  data = yield data?.json();
  console.log("action is called ", data);
  yield put({type:SET_PRODUCT_LIST,data})
}

// Ye har PRODUCT_LIST action ke aane par getProducts ko call karega
function* productSaga() {
  // takeEvery(actionType, sagaFunction)
  yield takeEvery(PRODUCT_LIST, getProducts);
}

export default productSaga;

