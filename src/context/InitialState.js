import { fetchCart, fetchUser } from "../utils/fetchLocalData";

const userInfo = fetchUser();
const cartInfo = fetchCart();
export const InitialState = {
  user: userInfo,
  foodItems: null,
  cartShow: false,
  cartItems: cartInfo,
};
