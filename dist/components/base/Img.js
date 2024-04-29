"use strict";

require("core-js/modules/es.object.assign.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Img;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
const _excluded = ["src", "alt", "classImg", "link"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Img(_ref) {
  let {
      src,
      alt = "alt",
      classImg,
      link = ""
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const style = classImg !== undefined ? classImg + " img-fluid" : "img-fluid";
  let imgsrc = src !== undefined ? src : "https://placehold.co/150x150";
  let linkImg = link !== "" ? link : "";
  if (linkImg !== "") {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      to: linkImg
    }, /*#__PURE__*/_react.default.createElement("img", _extends({
      src: imgsrc,
      alt: alt,
      className: style
    }, props))));
  } else {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("img", _extends({
      src: imgsrc,
      alt: alt,
      className: style
    }, props)));
  }
}