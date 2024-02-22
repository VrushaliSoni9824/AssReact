import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import subscribeReducer from "./subscribe/subscribeReducer";

const rootReducer = combineReducers({ 
    user :  userReducer,
    subscriptionPlans : subscribeReducer
});

export default rootReducer;