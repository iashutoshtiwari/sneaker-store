import productList from "../../mock/products";
import { SET_PRODUCT_DATA } from "../types";

export const getProductDetails = () => async (dispatch) => {
	dispatch({
		type: SET_PRODUCT_DATA,
		payload: productList ?? [],
	});
};
