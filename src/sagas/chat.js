import * as types from "../actions/ActionTypes.js";
import { takeEvery } from "redux-saga/effects";

const handleChatActions = function (params) {
	let list = [];
	list.push(
		takeEvery(types.SEND_MESSAGE, (action) => {
			params.socket.emit("chatMessage", { message: action.payload.message });
		})
	);
	return list;
};

export default handleChatActions;