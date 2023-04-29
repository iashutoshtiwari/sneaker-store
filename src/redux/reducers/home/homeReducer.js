/* eslint-disable import/no-anonymous-default-export */
import { SET_PRODUCT_LIST } from "../../types";

const initialState = {
	list: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_PRODUCT_LIST:
			return {
				...state,
				list: action.payload,
			};

		default:
			return state;
	}
};
