// combine socket event handlers into one socket:
import chatSocketEvents from "./chat.js";
// import controlQueuesEvents from "./controlQueues.js";
import viewersEvents from "./viewers.js";
import waitlistsEvents from "./waitlists.js";
// import turnTimersEvents from "./turnTimers.js";
import userInfoEvents from "./userInfo.js";
import usernameMapEvents from "./usernameMap.js";
import controllerStateEvents from "./controllerState.js";
import playersEvents from "./players.js";
import timeEvents from "./time.js";

// import settingsEvents from "./settings.js";

const handleEvents = (socket, dispatch) => {

	socket = chatSocketEvents(socket, dispatch);

	socket = viewersEvents(socket, dispatch);
	socket = waitlistsEvents(socket, dispatch);

	socket = userInfoEvents(socket, dispatch);
	socket = usernameMapEvents(socket, dispatch);

	// socket = controlQueuesEvents(socket, dispatch);
	// socket = turnTimersEvents(socket, dispatch);
	socket = controllerStateEvents(socket, dispatch);
	// todo: combine into:
	socket = playersEvents(socket, dispatch);

	socket = timeEvents(socket, dispatch);

	// todo:
	// socket = settingsEvents(socket, dispatch);


	socket.on("disconnect", (data) => {
		console.log("lost connection, attempting reconnect1.");
		socket.connect();
	});

	return socket;
};

export default handleEvents;