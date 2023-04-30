/* eslint-disable import/no-anonymous-default-export */
import { SET_SPINNER } from "../../types";

const initialState = {
	isLoading: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_SPINNER:
			return {
				...state,
				isLoading: action.payload,
			};

		default:
			return state;
	}
};
