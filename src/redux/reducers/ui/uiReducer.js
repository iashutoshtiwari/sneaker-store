/* eslint-disable import/no-anonymous-default-export */
import { SET_LOGIN_MODAL, SET_MENU_DRAWER, SET_SPINNER } from "../../types";

const initialState = {
	isLoading: false,
	openMenuDrawer: false,
	openLoginModal: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_SPINNER:
			return {
				...state,
				isLoading: action.payload,
			};
		case SET_MENU_DRAWER:
			return {
				...state,
				openMenuDrawer: action.payload,
			};
		case SET_LOGIN_MODAL:
			return {
				...state,
				openLoginModal: action.payload,
			};
		default:
			return state;
	}
};
