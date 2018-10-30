require("./keymaster.js");
const keycode = require("keycode");
import keyboardJS from "keyboardjs";

const VirtualProController = require("./VirtualProController.js");
let restPos = 128;

function VirtualKeyboard() {

	this.state = new VirtualProController();
	// this.getState = this.state.getState;
	// this.setState = this.state.setState;

	// a list of keys to keep track of:
	this.keysToTrack = [];

	// function to call when state updates:
	// this.updateParentState = () => {};

	this.keyboardMapping = {
		LU: "W",
		LD: "S",
		LL: "A",
		LR: "D",
		RU: "I",
		RD: "K",
		RL: "J",
		RR: "L",
		ABtn: "right",
		BBtn: "down",
		XBtn: "up",
		YBtn: "left",
		DUp: "T",
		DDown: "G",
		DLeft: "F",
		DRight: "H",
		lstick: "R",
		rstick: "Y",
		LBtn: "U",
		ZL: "Q",
		RBtn: "O",
		ZR: "E",
		Minus: "-",
		Plus: "=",
		Capture: "1",
		Home: "2",
	};

	this.wasPressedKeyCodes = [];

	this.settings = {
		analogStickMode: false,
	};



	// get controller state:
	this.poll = function () {

		// if (!this.state.keyboardControls) {
		// 	return;
		// }

		let oldControllerState = this.state.getState();

		if (!this.settings.analogStickMode) {
			if (key.isPressed(this.keyboardMapping.LU)) {
				this.state.lstick.y = 255;
			} else if (key.wasPressed(this.keyboardMapping.LU, this.wasPressedKeyCodes)) {
				this.state.lstick.y = restPos;
			}
			if (key.isPressed(this.keyboardMapping.LD)) {
				this.state.lstick.y = 0;
			} else if (key.wasPressed(this.keyboardMapping.LD, this.wasPressedKeyCodes)) {
				this.state.lstick.y = restPos;
			}
			if (key.isPressed(this.keyboardMapping.LL)) {
				this.state.lstick.x = 0;
			} else if (key.wasPressed(this.keyboardMapping.LL, this.wasPressedKeyCodes)) {
				this.state.lstick.x = restPos;
			}
			if (key.isPressed(this.keyboardMapping.LR)) {
				this.state.lstick.x = 255;
			} else if (key.wasPressed(this.keyboardMapping.LR, this.wasPressedKeyCodes)) {
				this.state.lstick.x = restPos;
			}
		} else {

			let leftRight = false;
			let upDown = false;

			if (key.isPressed(this.keyboardMapping.LU)) {
				this.state.lstick.y = Math.round(parseInt(this.state.lstick.y) + settings.stickAttack);
			}
			if (key.isPressed(this.keyboardMapping.LD)) {
				this.state.lstick.y = Math.round(parseInt(this.state.lstick.y) - settings.stickAttack);
			}
			if (key.isPressed(this.keyboardMapping.LL)) {
				this.state.lstick.x = Math.round(parseInt(this.state.lstick.x) - settings.stickAttack);
			}
			if (key.isPressed(this.keyboardMapping.LR)) {
				this.state.lstick.x = Math.round(parseInt(this.state.lstick.x) + settings.stickAttack);
			}

			upDown = key.isPressed(this.keyboardMapping.LU) || key.isPressed(this.keyboardMapping.LD);
			leftRight = key.isPressed(this.keyboardMapping.LL) || key.isPressed(this.keyboardMapping.LR);

			if (!upDown) {
				this.state.lstick.y = Math.round(tools.mathZoom(parseInt(this.state.lstick.y), restPos, settings.stickReturn));
			}

			if (!leftRight) {
				this.state.lstick.x = Math.round(tools.mathZoom(parseInt(this.state.lstick.x), restPos, settings.stickReturn));
			}
		}

		if (key.isPressed(this.keyboardMapping.ABtn)) {
			this.state.btns.a = 1;
		} else if (key.wasPressed(this.keyboardMapping.ABtn, this.wasPressedKeyCodes)) {
			this.state.btns.a = 0;
		}
		if (key.isPressed(this.keyboardMapping.BBtn)) {
			this.state.btns.b = 1;
		} else if (key.wasPressed(this.keyboardMapping.BBtn, this.wasPressedKeyCodes)) {
			this.state.btns.b = 0;
		}
		if (key.isPressed(this.keyboardMapping.XBtn)) {
			this.state.btns.x = 1;
		} else if (key.wasPressed(this.keyboardMapping.XBtn, this.wasPressedKeyCodes)) {
			this.state.btns.x = 0;
		}
		if (key.isPressed(this.keyboardMapping.YBtn)) {
			this.state.btns.y = 1;
		} else if (key.wasPressed(this.keyboardMapping.YBtn, this.wasPressedKeyCodes)) {
			this.state.btns.y = 0;
		}

		if (key.isPressed(this.keyboardMapping.DUp)) {
			this.state.btns.up = 1;
		} else if (key.wasPressed(this.keyboardMapping.DUp, this.wasPressedKeyCodes)) {
			this.state.btns.up = 0;
		}
		if (key.isPressed(this.keyboardMapping.DDown)) {
			this.state.btns.down = 1;
		} else if (key.wasPressed(this.keyboardMapping.DDown, this.wasPressedKeyCodes)) {
			this.state.btns.down = 0;
		}
		if (key.isPressed(this.keyboardMapping.DLeft)) {
			this.state.btns.left = 1;
		} else if (key.wasPressed(this.keyboardMapping.DLeft, this.wasPressedKeyCodes)) {
			this.state.btns.left = 0;
		}
		if (key.isPressed(this.keyboardMapping.DRight)) {
			this.state.btns.right = 1;
		} else if (key.wasPressed(this.keyboardMapping.DRight, this.wasPressedKeyCodes)) {
			this.state.btns.right = 0;
		}

		if (!this.settings.analogStickMode) {
			if (key.isPressed(this.keyboardMapping.RU)) {
				this.state.rstick.y = 255;
			} else if (key.wasPressed(this.keyboardMapping.RU, this.wasPressedKeyCodes)) {
				this.state.rstick.y = restPos;
			}
			if (key.isPressed(this.keyboardMapping.RD)) {
				this.state.rstick.y = 0;
			} else if (key.wasPressed(this.keyboardMapping.RD, this.wasPressedKeyCodes)) {
				this.state.rstick.y = restPos;
			}
			if (key.isPressed(this.keyboardMapping.RL)) {
				this.state.rstick.x = 0;
			} else if (key.wasPressed(this.keyboardMapping.RL, this.wasPressedKeyCodes)) {
				this.state.rstick.x = restPos;
			}
			if (key.isPressed(this.keyboardMapping.RR)) {
				this.state.rstick.x = 255;
			} else if (key.wasPressed(this.keyboardMapping.RR, this.wasPressedKeyCodes)) {
				this.state.rstick.x = restPos;
			}
		} else {
			let leftRight = false;
			let upDown = false;

			if (key.isPressed(this.keyboardMapping.RU)) {
				this.state.rstick.y = Math.round(parseInt(this.state.rstick.y) + settings.stickAttack);
			}
			if (key.isPressed(this.keyboardMapping.RD)) {
				this.state.rstick.y = Math.round(parseInt(this.state.rstick.y) - settings.stickAttack);
			}
			if (key.isPressed(this.keyboardMapping.RL)) {
				this.state.rstick.x = Math.round(parseInt(this.state.rstick.x) - settings.stickAttack);
			}
			if (key.isPressed(this.keyboardMapping.RR)) {
				this.state.rstick.x = Math.round(parseInt(this.state.rstick.x) + settings.stickAttack);
			}

			upDown = key.isPressed(this.keyboardMapping.RU) || key.isPressed(this.keyboardMapping.RD);
			leftRight = key.isPressed(this.keyboardMapping.RL) || key.isPressed(this.keyboardMapping.RR);

			if (!upDown) {
				this.state.rstick.y = Math.round(tools.mathZoom(parseInt(this.state.rstick.y), restPos, settings.stickReturn));
			}

			if (!leftRight) {
				this.state.rstick.x = Math.round(tools.mathZoom(parseInt(this.state.rstick.x), restPos, settings.stickReturn));
			}
		}

		if (key.isPressed(this.keyboardMapping.Minus)) {
			this.state.btns.minus = 1;
		} else if (key.wasPressed(this.keyboardMapping.Minus, this.wasPressedKeyCodes)) {
			this.state.btns.minus = 0;
		}
		if (key.isPressed(this.keyboardMapping.Plus)) {
			this.state.btns.plus = 1;
		} else if (key.wasPressed(this.keyboardMapping.Plus, this.wasPressedKeyCodes)) {
			this.state.btns.plus = 0;
		}

		if (key.isPressed(this.keyboardMapping.Capture)) {
			this.state.btns.capture = 1;
		} else if (key.wasPressed(this.keyboardMapping.Capture, this.wasPressedKeyCodes)) {
			this.state.btns.capture = 0;
		}
		if (key.isPressed(this.keyboardMapping.Home)) {
			this.state.btns.home = 1;
		} else if (key.wasPressed(this.keyboardMapping.Home, this.wasPressedKeyCodes)) {
			this.state.btns.home = 0;
		}

		if (key.isPressed(this.keyboardMapping.LBtn)) {
			this.state.btns.l = 1;
		} else if (key.wasPressed(this.keyboardMapping.LBtn, this.wasPressedKeyCodes)) {
			this.state.btns.l = 0;
		}
		if (key.isPressed(this.keyboardMapping.RBtn)) {
			this.state.btns.r = 1;
		} else if (key.wasPressed(this.keyboardMapping.RBtn, this.wasPressedKeyCodes)) {
			this.state.btns.r = 0;
		}

		if (key.isPressed(this.keyboardMapping.ZL)) {
			this.state.btns.zl = 1;
		} else if (key.wasPressed(this.keyboardMapping.ZL, this.wasPressedKeyCodes)) {
			this.state.btns.zl = 0;
		}
		if (key.isPressed(this.keyboardMapping.ZR)) {
			this.state.btns.zr = 1;
		} else if (key.wasPressed(this.keyboardMapping.ZR, this.wasPressedKeyCodes)) {
			this.state.btns.zr = 0;
		}

		if (key.isPressed(this.keyboardMapping.lstick)) {
			this.state.btns.lstick = 1;
		} else if (key.wasPressed(this.keyboardMapping.lstick, this.wasPressedKeyCodes)) {
			this.state.btns.lstick = 0;
		}
		if (key.isPressed(this.keyboardMapping.rstick)) {
			this.state.btns.rstick = 1;
		} else if (key.wasPressed(this.keyboardMapping.rstick, this.wasPressedKeyCodes)) {
			this.state.btns.rstick = 0;
		}

		this.wasPressedKeyCodes = key.getPressedKeyCodes();

		let newControllerState = this.state.getState();

		// reset if nothing changed:
		if (newControllerState == oldControllerState) {
			this.state.setState(oldControllerState);
		}
	}

}






module.exports = VirtualKeyboard;