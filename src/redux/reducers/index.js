import { combineReducers } from "redux";
import homeReducer from "./home/homeReducer";
import pdpReducer from "./pdp/pdpReducer";
import cartReducer from "./cart/cartReducer";
import checkoutReducer from "./checkout/checkoutReducer";
import ocpReducer from "./ocp/ocpReducer";

export default combineReducers({
	home: homeReducer,
	pdp: pdpReducer,
	cart: cartReducer,
	checkout: checkoutReducer,
	ocp: ocpReducer,
});
