import productList from "../../mock/products";
import { SET_PRODUCT_DATA } from "../types";

export const getProductDetails = (id) => async (dispatch) => {
	const productData = productList.find((item) => item.style === id);

	dispatch({
		type: SET_PRODUCT_DATA,
		payload: productData ?? {},
	});
};
