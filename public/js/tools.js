function getCookie(name) {
	var dc = document.cookie;
	var prefix = name + "=";
	var begin = dc.indexOf("; " + prefix);
	var end;
	if (begin == -1) {
		begin = dc.indexOf(prefix);
		if (begin !== 0) return null;
	} else {
		begin += 2;
		end = document.cookie.indexOf(";", begin);
		if (end == -1) {
			end = dc.length;
		}
	}
	// because unescape has been deprecated, replaced with decodeURI
	//return unescape(dc.substring(begin + prefix.length, end));
	return decodeURI(dc.substring(begin + prefix.length, end));
}

function setCookie(name, value, seconds) {
	var expires = "";
	if (seconds) {
		var date = new Date();
		date.setTime(date.getTime() + (seconds * 1000));
		expires = "; expires=" + date.toUTCString();
	}
	document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function minmax(num, min, max) {
	if (num < min) {
		return min;
	} else if (num > max) {
		return max;
	} else {
		return num;
	}
}

function round(value, precision) {
	var multiplier = Math.pow(10, precision || 0);
	return Math.round(value * multiplier) / multiplier;
}

String.prototype.replaceAll = function(search, replacement) {
	var target = this;
	return target.replace(new RegExp(search, "g"), replacement);
};

function msToTime(duration) {
// 	var milliseconds = parseInt((duration % 1000) / 100);
	var milliseconds = parseInt((((duration / 1000) % 60) % 1) * 1000);
	var seconds = parseInt((duration / 1000) % 60);
	var minutes = parseInt((duration / (1000 * 60)) % 60);
	var hours = parseInt((duration / (1000 * 60 * 60)) % 24);
	hours = (hours < 10) ? "0" + hours : hours;
	if (hours.length == 2 || hours.length == 3 && hours[0] == "0") {
		hours = hours.substr(1);
	}
	minutes = (minutes < 10) ? "0" + minutes : minutes;
	if (minutes.length == 3 || minutes.length == 4) {
		minutes = minutes.substr(1);
	}
	seconds = (seconds < 10) ? "0" + seconds : seconds;
	if (seconds.length == 3 || seconds.length == 4) {
		seconds = seconds.substr(1);
	}
	//seconds = seconds.replaceAll("-", "");
	if (seconds.length < 2) {
		seconds = "0" + seconds;
	}
	var time = hours + ":" + minutes + ":" + seconds + "." + milliseconds;
	time = time.replaceAll("-", ""); // remove negative signs
	return time;
}