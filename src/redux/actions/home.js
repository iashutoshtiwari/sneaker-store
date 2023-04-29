import productList from "../../mock/products";
import { SET_PRODUCT_LIST } from "../types";
import { setSpinner } from "./ui";

export const getProductList = () => async (dispatch) => {
	dispatch({
		type: SET_PRODUCT_LIST,
		payload: productList ?? [],
	});

	setTimeout(() => {
		dispatch(setSpinner(false));
	}, 3000);
};
