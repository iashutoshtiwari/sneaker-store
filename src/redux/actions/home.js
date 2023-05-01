import axios from "axios";
import { getApiUrl } from "@/utils/helper";
import { SET_PRODUCT_LIST } from "../types";
import { setSpinner } from "./ui";

export const getProductList = () => async (dispatch) => {
	const apiUrl = getApiUrl();
	const url = apiUrl + "/items";

	dispatch(setSpinner(true));
	const response = await axios(url, {
		method: "GET",
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Content-Type": "application/json",
		},
	}).catch((error) => {
		console.error("[getProductList] >> Exception:\n", error);
	});

	dispatch({
		type: SET_PRODUCT_LIST,
		payload: response?.data ?? [],
	});

	dispatch(setSpinner(false));
};

export const createUser = (data) => async (dispatch) => {
	const apiUrl = getApiUrl();
	const url = apiUrl + "/users";

	const response = await axios(url, {
		method: "POST",
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Content-Type": "application/json",
		},
		data: JSON.stringify(data),
	}).catch((error) => {
		console.error("[createUser] >> Exception:\n", error);
	});

	console.log(response);
};
