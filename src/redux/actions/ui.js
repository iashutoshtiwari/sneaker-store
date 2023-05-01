import { SET_LOGIN_MODAL, SET_MENU_DRAWER, SET_SPINNER } from "../types";

export const setSpinner = (value) => async (dispatch) => {
	dispatch({
		type: SET_SPINNER,
		payload: value,
	});
};

export const setMenuDrawer = (value) => async (dispatch) => {
	dispatch({
		type: SET_MENU_DRAWER,
		payload: value,
	});
};

export const setLoginModal = (value) => async (dispatch) => {
	dispatch({
		type: SET_LOGIN_MODAL,
		payload: value,
	});
};
