import { fetchUser } from "../utils/fetchLocalData";

const userInfo=fetchUser();
export const InitialState={
    user:userInfo, 

};