import { SET_SPINNER } from "../types";

export const setSpinner = (value) => async (dispatch) => {
	dispatch({
		type: SET_SPINNER,
		payload: value,
	});
};
