import { combineReducers } from "redux"
import fetchReducer from "./fetch/fetchReducer"
import countryReducer from "./country/countryReducer"
import cartReducer from "./cart/cartReducer"
import langReducer from "./language/langReducer"

const rootReducer=combineReducers({
    fetch:fetchReducer,
    country:countryReducer,
    cart:cartReducer,
    language:langReducer
})

export default rootReducer