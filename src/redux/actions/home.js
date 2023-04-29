import productList from "../../mock/products";
import { SET_PRODUCT_LIST } from "../types";

export const getProductList = () => async (dispatch) => {
	dispatch({
		type: SET_PRODUCT_LIST,
		payload: productList ?? [],
	});
};
