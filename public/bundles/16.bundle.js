(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/@material-ui/core/esm/LinearProgress/LinearProgress.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/LinearProgress/LinearProgress.js ***!
  \*****************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");









var TRANSITION_DURATION = 4; // seconds

var styles = function styles(theme) {
  var getColor = function getColor(color) {
    return theme.palette.type === 'light' ? Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__["lighten"])(color, 0.62) : Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__["darken"])(color, 0.5);
  };

  var backgroundPrimary = getColor(theme.palette.primary.main);
  var backgroundSecondary = getColor(theme.palette.secondary.main);
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      overflow: 'hidden',
      height: 4
    },

    /* Styles applied to the root and bar2 element if `color="primary"`; bar2 if `variant="buffer"`. */
    colorPrimary: {
      backgroundColor: backgroundPrimary
    },

    /* Styles applied to the root and bar2 elements if `color="secondary"`; bar2 if `variant="buffer"`. */
    colorSecondary: {
      backgroundColor: backgroundSecondary
    },

    /* Styles applied to the root element if `variant="determinate"`. */
    determinate: {},

    /* Styles applied to the root element if `variant="indeterminate"`. */
    indeterminate: {},

    /* Styles applied to the root element if `variant="buffer"`. */
    buffer: {
      backgroundColor: 'transparent'
    },

    /* Styles applied to the root element if `variant="query"`. */
    query: {
      transform: 'rotate(180deg)'
    },

    /* Styles applied to the additional bar element if `variant="buffer"`. */
    dashed: {
      position: 'absolute',
      marginTop: 0,
      height: '100%',
      width: '100%',
      animation: '$buffer 3s infinite linear'
    },

    /* Styles applied to the additional bar element if `variant="buffer"` and `color="primary"`. */
    dashedColorPrimary: {
      backgroundImage: "radial-gradient(".concat(backgroundPrimary, " 0%, ").concat(backgroundPrimary, " 16%, transparent 42%)"),
      backgroundSize: '10px 10px',
      backgroundPosition: '0px -23px'
    },

    /* Styles applied to the additional bar element if `variant="buffer"` and `color="secondary"`. */
    dashedColorSecondary: {
      backgroundImage: "radial-gradient(".concat(backgroundSecondary, " 0%, ").concat(backgroundSecondary, " 16%, transparent 42%)"),
      backgroundSize: '10px 10px',
      backgroundPosition: '0px -23px'
    },

    /* Styles applied to the layered bar1 and bar2 elements. */
    bar: {
      width: '100%',
      position: 'absolute',
      left: 0,
      bottom: 0,
      top: 0,
      transition: 'transform 0.2s linear',
      transformOrigin: 'left'
    },

    /* Styles applied to the bar elements if `color="primary"`; bar2 if `variant` not "buffer". */
    barColorPrimary: {
      backgroundColor: theme.palette.primary.main
    },

    /* Styles applied to the bar elements if `color="secondary"`; bar2 if `variant` not "buffer". */
    barColorSecondary: {
      backgroundColor: theme.palette.secondary.main
    },

    /* Styles applied to the bar1 element if `variant="indeterminate or query"`. */
    bar1Indeterminate: {
      width: 'auto',
      animation: '$indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite'
    },

    /* Styles applied to the bar1 element if `variant="determinate"`. */
    bar1Determinate: {
      transition: "transform .".concat(TRANSITION_DURATION, "s linear")
    },

    /* Styles applied to the bar1 element if `variant="buffer"`. */
    bar1Buffer: {
      zIndex: 1,
      transition: "transform .".concat(TRANSITION_DURATION, "s linear")
    },

    /* Styles applied to the bar2 element if `variant="indeterminate or query"`. */
    bar2Indeterminate: {
      width: 'auto',
      animation: '$indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite'
    },

    /* Styles applied to the bar2 element if `variant="buffer"`. */
    bar2Buffer: {
      transition: "transform .".concat(TRANSITION_DURATION, "s linear")
    },
    // Legends:
    // || represents the viewport
    // -  represents a light background
    // x  represents a dark background
    '@keyframes indeterminate1': {
      //  |-----|---x-||-----||-----|
      '0%': {
        left: '-35%',
        right: '100%'
      },
      //  |-----|-----||-----||xxxx-|
      '60%': {
        left: '100%',
        right: '-90%'
      },
      '100%': {
        left: '100%',
        right: '-90%'
      }
    },
    '@keyframes indeterminate2': {
      //  |xxxxx|xxxxx||-----||-----|
      '0%': {
        left: '-200%',
        right: '100%'
      },
      //  |-----|-----||-----||-x----|
      '60%': {
        left: '107%',
        right: '-8%'
      },
      '100%': {
        left: '107%',
        right: '-8%'
      }
    },
    '@keyframes buffer': {
      '0%': {
        opacity: 1,
        backgroundPosition: '0px -23px'
      },
      '50%': {
        opacity: 0,
        backgroundPosition: '0px -23px'
      },
      '100%': {
        opacity: 1,
        backgroundPosition: '-200px -23px'
      }
    }
  };
};
/**
 * ## ARIA
 *
 * If the progress bar is describing the loading progress of a particular region of a page,
 * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
 * attribute to `true` on that region until it has finished loading.
 */

var LinearProgress = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function LinearProgress(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      value = props.value,
      valueBuffer = props.valueBuffer,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'indeterminate' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className", "color", "value", "valueBuffer", "variant"]);

  var theme = Object(_styles_useTheme__WEBPACK_IMPORTED_MODULE_8__["default"])();
  var rootProps = {};
  var inlineStyles = {
    bar1: {},
    bar2: {}
  };

  if (variant === 'determinate' || variant === 'buffer') {
    if (value !== undefined) {
      rootProps['aria-valuenow'] = Math.round(value);
      var transform = value - 100;

      if (theme.direction === 'rtl') {
        transform = -transform;
      }

      inlineStyles.bar1.transform = "translateX(".concat(transform, "%)");
    } else if (true) {
      console.error('Material-UI: you need to provide a value prop ' + 'when using the determinate or buffer variant of LinearProgress .');
    }
  }

  if (variant === 'buffer') {
    if (valueBuffer !== undefined) {
      var _transform = (valueBuffer || 0) - 100;

      if (theme.direction === 'rtl') {
        _transform = -_transform;
      }

      inlineStyles.bar2.transform = "translateX(".concat(_transform, "%)");
    } else if (true) {
      console.error('Material-UI: you need to provide a valueBuffer prop ' + 'when using the buffer variant of LinearProgress.');
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, classes["color".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__["default"])(color))], className, {
      'determinate': classes.determinate,
      'indeterminate': classes.indeterminate,
      'buffer': classes.buffer,
      'query': classes.query
    }[variant]),
    role: "progressbar"
  }, rootProps, {
    ref: ref
  }, other), variant === 'buffer' ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.dashed, classes["dashedColor".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__["default"])(color))])
  }) : null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.bar, classes["barColor".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__["default"])(color))], (variant === 'indeterminate' || variant === 'query') && classes.bar1Indeterminate, {
      'determinate': classes.bar1Determinate,
      'buffer': classes.bar1Buffer
    }[variant]),
    style: inlineStyles.bar1
  }), variant === 'determinate' ? null : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.bar, (variant === 'indeterminate' || variant === 'query') && classes.bar2Indeterminate, variant === 'buffer' ? [classes["color".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__["default"])(color))], classes.bar2Buffer] : classes["barColor".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__["default"])(color))]),
    style: inlineStyles.bar2
  }));
});
 true ? LinearProgress.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['primary', 'secondary']),

  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /**
   * The value for the buffer variant.
   * Value between 0 and 100.
   */
  valueBuffer: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /**
   * The variant to use.
   * Use indeterminate or query when there is no progress value.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['determinate', 'indeterminate', 'buffer', 'query'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'MuiLinearProgress'
})(LinearProgress));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/LinearProgress/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/LinearProgress/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LinearProgress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinearProgress */ "./node_modules/@material-ui/core/esm/LinearProgress/LinearProgress.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _LinearProgress__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/general/PopoverMenu.jsx":
/*!************************************************!*\
  !*** ./src/components/general/PopoverMenu.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_esm_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/esm/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_esm_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/esm/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_esm_Popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/esm/Popover */ "./node_modules/@material-ui/core/esm/Popover/index.js");
// react:





const PopoverMenu = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Popover__WEBPACK_IMPORTED_MODULE_3__["default"], {
  open: props.open,
  anchorEl: props.anchorEl,
  onClose: props.onClose,
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "center"
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "center"
  }
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Paper__WEBPACK_IMPORTED_MODULE_1__["default"], {
  elevation: 4,
  style: {
    padding: "10px"
  }
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
  variant: "contained",
  color: "primary"
}, "View Profile"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
  variant: "contained",
  color: "secondary"
}, "Ban"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
  variant: "contained",
  color: "primary"
}, "Kick from Queue")));

/* harmony default export */ __webpack_exports__["default"] = (PopoverMenu);

/***/ }),

/***/ "./src/components/stream/streamInfo/StreamInfo.jsx":
/*!*********************************************************!*\
  !*** ./src/components/stream/streamInfo/StreamInfo.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _playerInfo_PlayerInfo_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playerInfo/PlayerInfo.jsx */ "./src/components/stream/streamInfo/playerInfo/PlayerInfo.jsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
// react:
 // components:

 // material ui:

 // redux:

 // recompose:

 // jss:

const styles = theme => ({
  root: {
    gridArea: "info",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: 0,
    margin: 0,
    overflowX: "hidden",
    textAlign: "center"
  }
});

class StreamInfo extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      classes
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.root
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_playerInfo_PlayerInfo_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null));
  }

}

const mapStateToProps = state => {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_4__["compose"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps))(StreamInfo));

/***/ }),

/***/ "./src/components/stream/streamInfo/playerInfo/PlayerInfo.jsx":
/*!********************************************************************!*\
  !*** ./src/components/stream/streamInfo/playerInfo/PlayerInfo.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _player_Player_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player/Player.jsx */ "./src/components/stream/streamInfo/playerInfo/player/Player.jsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/libs/utils.js */ "./src/shared/libs/utils.js");
// react:
 // components:

 // material ui:

 // redux:

 // recompose:

 // libs:

 // jss:

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    overflowX: "hidden",
    // padding: "10px",
    flexWrap: "wrap"
  },
  [shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_5__["device"].tablet]: {
    root: {
      flexDirection: "row" // width: "100%",
      // padding: "5px",

    }
  },
  [shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_5__["device"].laptop]: {
    root: {// width: "24%",
      // padding: "5px",
    }
  }
};

class PlayerInfo extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      classes
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.root
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_player_Player_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      num: 0
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_player_Player_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      num: 1
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_player_Player_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      num: 2
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_player_Player_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      num: 3
    }));
  }

}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_4__["compose"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps))(PlayerInfo));

/***/ }),

/***/ "./src/components/stream/streamInfo/playerInfo/player/ControlQueue.jsx":
/*!*****************************************************************************!*\
  !*** ./src/components/stream/streamInfo/playerInfo/player/ControlQueue.jsx ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var shared_components_account_Username_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/components/account/Username.jsx */ "./src/shared/components/account/Username.jsx");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
// react:
 // redux:

 // components:
// material ui:





 // recompose:


 // jss:

const styles = theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  listItem: {
    cursor: "pointer",
    userSelect: "none",
    width: "100%"
  },
  highlighted: {
    // backgroundColor: "#DDE263",
    backgroundColor: theme.palette.secondary.light
  }
});

class ControlQueue extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
  }

  getQueue() {
    const {
      classes
    } = this.props;
    let queue = [];
    let userids = this.props.controlQueues[this.props.num];

    if (userids.length == 0) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
        key: "0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__["default"], {
        primary: "The queue is empty."
      }));
    }

    for (let i = 0; i < userids.length; i++) {
      let username = this.props.accountMap[userids[i]];
      username = username ? username.username : "loading";
      let listItemClasses = classnames__WEBPACK_IMPORTED_MODULE_8___default()(classes.listItem, {
        [classes.highlighted]: this.props.userid == userids[i]
      });
      queue.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shared_components_account_Username_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: i,
        style: {
          width: "100%"
        },
        userid: userids[i]
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
        button: true,
        key: i,
        className: listItemClasses,
        userid: userids[i]
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__["default"], {
        primary: username
      }))));
    }

    return queue;
  }

  render() {
    const {
      classes
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: classes.root
    }, this.getQueue());
  }

} // ControlQueue.propTypes = {
// 	controlQueues: PropTypes.arrayOf(
// 		PropTypes.arrayOf(
// 			PropTypes.string.isRequired
// 		),
// 	).isRequired
// };


const mapStateToProps = state => {
  return {
    userid: state.client.userid,
    controlQueues: state.stream.players.controlQueues,
    accountMap: state.stream.accountMap
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_7__["compose"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps))(ControlQueue));

/***/ }),

/***/ "./src/components/stream/streamInfo/playerInfo/player/Player.jsx":
/*!***********************************************************************!*\
  !*** ./src/components/stream/streamInfo/playerInfo/player/Player.jsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shared_components_general_MyCheckbox_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/components/general/MyCheckbox.jsx */ "./src/shared/components/general/MyCheckbox.jsx");
/* harmony import */ var _TurnTimers_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TurnTimers.jsx */ "./src/components/stream/streamInfo/playerInfo/player/TurnTimers.jsx");
/* harmony import */ var _QueueButton_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QueueButton.jsx */ "./src/components/stream/streamInfo/playerInfo/player/QueueButton.jsx");
/* harmony import */ var _ControlQueue_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ControlQueue.jsx */ "./src/components/stream/streamInfo/playerInfo/player/ControlQueue.jsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_esm_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/esm/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var src_actions_settings_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/actions/settings.js */ "./src/actions/settings.js");
/* harmony import */ var src_actions_players_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/actions/players.js */ "./src/actions/players.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! shared/libs/utils.js */ "./src/shared/libs/utils.js");
// react:
 // components:




 // material ui:


 // redux:

 // actions:


 // recompose:

 // libs:

 // jss:

const styles = theme => ({
  root: {
    width: "100%",
    padding: "5px"
  },
  [shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_11__["device"].tablet]: {
    root: {
      width: "100%" // padding: "5px",

    }
  },
  [shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_11__["device"].laptop]: {
    root: {
      width: "24%" // padding: "5px",

    }
  }
});

class Player extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
    this.choosePlayer = this.choosePlayer.bind(this);
    this.state = {};
  }

  choosePlayer() {
    let players = [0, 1, 2, 3, 4, 5, 6, 7];
    players.forEach(cNum => {
      this.props.leavePlayerControlQueue(cNum);
    });
    this.props.choosePlayer(this.props.num);
  }

  render() {
    const {
      classes
    } = this.props;
    let n = this.props.num;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], {
      elevation: 4,
      className: classes.root
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shared_components_general_MyCheckbox_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      text: `Player ${this.props.num + 1}`,
      handleChange: this.choosePlayer,
      checked: this.props.currentPlayer == this.props.num
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TurnTimers_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      num: this.props.num
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_QueueButton_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      num: this.props.num,
      controlQueue: this.props.controlQueues[n],
      userid: this.props.userid
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ControlQueue_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
      num: this.props.num
    }));
  }

}

const mapStateToProps = state => {
  return {
    // turnTimers: state.turnTimers,
    controlQueues: state.stream.players.controlQueues,
    userid: state.client.userid,
    // time: state.time,
    currentPlayer: state.settings.currentPlayer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    choosePlayer: index => {
      dispatch(Object(src_actions_settings_js__WEBPACK_IMPORTED_MODULE_8__["updateSettings"])({
        currentPlayer: index
      }));
    },
    leavePlayerControlQueue: controllerNumber => {
      dispatch(Object(src_actions_players_js__WEBPACK_IMPORTED_MODULE_9__["leavePlayerControlQueue"])(controllerNumber));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_10__["compose"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps))(Player));

/***/ }),

/***/ "./src/components/stream/streamInfo/playerInfo/player/QueueButton.jsx":
/*!****************************************************************************!*\
  !*** ./src/components/stream/streamInfo/playerInfo/player/QueueButton.jsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_esm_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/esm/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var src_actions_players_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/actions/players.js */ "./src/actions/players.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
// react:
 // material ui:


 // redux:

 // actions:

 // recompose:

 // jss:

const styles = theme => ({
  root: {
    width: "100%"
  }
});

class QueueButton extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
    this.joinLeaveQueue = this.joinLeaveQueue.bind(this);
    this.state = {};
  }

  joinLeaveQueue() {
    if (this.props.controlQueue.indexOf(this.props.userid) > -1) {
      this.props.leavePlayerControlQueue(this.props.num);
    } else {
      for (let i = 0; i < this.props.playerCount; i++) {
        if (i == this.props.num) {
          continue;
        }

        this.props.leavePlayerControlQueue(i);
      }

      this.props.joinPlayerControlQueue(this.props.num);
    }
  }

  render() {
    const {
      classes
    } = this.props;
    let buttonText;

    if (this.props.controlQueue.indexOf(this.props.userid) > -1) {
      buttonText = "Leave Queue";
    } else {
      buttonText = "Join Queue";
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: classes.root,
      variant: "contained",
      onClick: this.joinLeaveQueue
    }, buttonText);
  }

}

const mapStateToProps = state => {
  return {
    playerCount: state.stream.players.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    leavePlayerControlQueue: controllerNumber => {
      dispatch(Object(src_actions_players_js__WEBPACK_IMPORTED_MODULE_4__["leavePlayerControlQueue"])(controllerNumber));
    },
    joinPlayerControlQueue: controllerNumber => {
      dispatch(Object(src_actions_players_js__WEBPACK_IMPORTED_MODULE_4__["joinPlayerControlQueue"])(controllerNumber));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_5__["compose"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps))(QueueButton));

/***/ }),

/***/ "./src/components/stream/streamInfo/playerInfo/player/TurnTimer.jsx":
/*!**************************************************************************!*\
  !*** ./src/components/stream/streamInfo/playerInfo/player/TurnTimer.jsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_esm_LinearProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/esm/LinearProgress */ "./node_modules/@material-ui/core/esm/LinearProgress/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
// react:
 // material ui:


 // libs:

 // jss:

const styles = {
  root: {
    position: "relative",
    marginBottom: "5px"
  },
  turnText: {
    width: "100%",
    position: "absolute",
    top: "0px",
    lineHeight: "24px"
  },
  forfeitText: {
    width: "100%",
    position: "absolute",
    top: "0px",
    lineHeight: "15px"
  },
  turn: {
    height: "24px",
    borderRadius: "6px"
  },
  forfeit: {
    height: "15px",
    borderRadius: "6px"
  }
};

class TurnTimer extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getBarText() {
    if (this.props.name == null) {
      if (this.props.type == "turn") {
        return "No one is playing right now.";
      } else if (this.props.type == "forfeit") {
        return null;
      }
    } else {
      if (this.props.type == "turn") {
        return `${this.props.name}: ${this.props.timeLeft} seconds`;
      } else if (this.props.type == "forfeit") {
        return `${this.props.timeLeft} seconds until turn forfeit.`;
      }
    }
  }

  getStyle() {
    if (this.props.name == null) {
      return {
        width: "100%"
      };
    } else {
      return {
        width: this.props.percent + "%"
      };
    }
  }

  render() {
    const {
      classes
    } = this.props;
    let isTurn = this.props.type == "turn";
    let color = isTurn ? "primary" : "secondary";
    let override = classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      [classes.turn]: isTurn,
      [classes.forfeit]: !isTurn
    });
    let value = this.props.name == null ? 100 : this.props.percent;
    let textClass = classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      [classes.turnText]: isTurn,
      [classes.forfeitText]: !isTurn
    });
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.root
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_LinearProgress__WEBPACK_IMPORTED_MODULE_2__["default"], {
      classes: {
        root: override
      },
      variant: "determinate",
      value: value,
      color: color
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: textClass
    }, this.getBarText()));
  }

} // const mapStateToProps = (state) => {
// 	return {
// 		time: state.time,
// 		turnTimers: state.players.turnTimers,
// 	};
// };
//
// const mapDispatchToProps = (dispatch) => {
// 	return {};
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(TurnTimer);


/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(TurnTimer));

/***/ }),

/***/ "./src/components/stream/streamInfo/playerInfo/player/TurnTimers.jsx":
/*!***************************************************************************!*\
  !*** ./src/components/stream/streamInfo/playerInfo/player/TurnTimers.jsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TurnTimer_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TurnTimer.jsx */ "./src/components/stream/streamInfo/playerInfo/player/TurnTimer.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
// react:

 // redux:



class TurnTimers extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: Date.now()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let n = this.props.num;
    let serverTime = this.props.time.server;
    let now = Date.now() - this.props.time.lastServerUpdate + serverTime; // let elapsedTime = now - serverTime;
    // turn:

    let turnStartTime = this.props.turnTimers[n].turnStartTime;
    let turnLength = this.props.turnTimers[n].turnLength;
    let turnTimeLeft = turnLength - (now - turnStartTime);
    let turnTimeLeftPercent = turnTimeLeft / turnLength * 100; // forfeit:

    let forfeitStartTime = this.props.turnTimers[n].forfeitStartTime;
    let forfeitLength = this.props.turnTimers[n].forfeitLength;
    let forfeitTimeLeft = forfeitLength - (now - forfeitStartTime);
    let forfeitTimeLeftPercent = forfeitTimeLeft / forfeitLength * 100;
    let username = this.props.accountMap[this.props.controlQueues[n][0]];
    username = username ? username.username : "loading";

    if (!this.props.controlQueues[n][0]) {
      username = null;
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TurnTimer_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      type: "turn",
      name: username,
      timeLeft: parseInt(turnTimeLeft / 1000),
      percent: parseInt(turnTimeLeftPercent)
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TurnTimer_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      type: "forfeit",
      name: username,
      timeLeft: parseInt(forfeitTimeLeft / 1000),
      percent: parseInt(forfeitTimeLeftPercent)
    }));
  }

}

const mapStateToProps = state => {
  return {
    time: state.stream.time,
    turnTimers: state.stream.players.turnTimers,
    controlQueues: state.stream.players.controlQueues,
    accountMap: state.stream.accountMap
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(TurnTimers));

/***/ }),

/***/ "./src/shared/components/account/Username.jsx":
/*!****************************************************!*\
  !*** ./src/shared/components/account/Username.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_general_PopoverMenu_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/general/PopoverMenu.jsx */ "./src/components/general/PopoverMenu.jsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
// react:
 // components:

 // material ui:

 // redux:

 // recompose:

 // jss:

const styles = theme => ({
  root: {}
});

class Username extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
    this.state = {
      popoverOpen: false
    };
    this.ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.handleOpenPopover = this.handleOpenPopover.bind(this);
    this.handleClosePopover = this.handleClosePopover.bind(this);
  }

  handleOpenPopover() {
    this.setState({
      popoverOpen: true
    });
  }

  handleClosePopover() {
    this.setState({
      popoverOpen: false
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: this.props.style,
      onClick: this.handleOpenPopover,
      ref: ref => {
        this.ref = ref;
      }
    }, this.props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_components_general_PopoverMenu_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      open: this.state.popoverOpen,
      onClose: this.handleClosePopover,
      anchorEl: this.ref
    }));
  }

}

const mapStateToProps = state => {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_4__["compose"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps))(Username));

/***/ })

}]);
//# sourceMappingURL=16.bundle.js.map