"use strict";

require("core-js/modules/es.symbol.description.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/es.regexp.to-string.js");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const ButtonGrp = _ref => {
  let {
    children,
    spacing = 1,
    isAttached
  } = _ref;
  // Transformer les enfants (boutons) avec le style de marge droite
  const spacedChildren = _react.default.Children.map(children, (child, index) => {
    // Vérifier si l'enfant est le dernier dans la liste
    const isLastChild = index === children.length - 1;
    const isFirstChild = index === 0;

    // Calculer le style à appliquer à cet enfant

    if (spacing <= 0) {
      let childStyle = {
        marginRight: isLastChild ? 0 : spacing.toString() + "rem",
        marginLeft: 0,
        marginTop: 5,
        marginBottom: 5,
        borderTopLeftRadius: isFirstChild ? 5 + "px" : 0,
        borderBottomLeftRadius: isFirstChild ? 5 + "px" : 0,
        borderTopRightRadius: isLastChild ? 5 + "px" : 0,
        borderBottomRightRadius: isLastChild ? 5 + "px" : 0
      };
      return /*#__PURE__*/_react.default.cloneElement(child, _objectSpread(_objectSpread({}, child.props), {}, {
        // Toutes les props existantes de l'enfant
        style: _objectSpread(_objectSpread({}, child.props.style || {}), childStyle)
        // Fusionner avec les styles existants
      }));
    } else {
      let childStyle = {
        marginRight: isLastChild ? 0 : spacing.toString() + "rem",
        marginLeft: 0,
        marginTop: 5,
        marginBottom: 5
      };
      return /*#__PURE__*/_react.default.cloneElement(child, _objectSpread(_objectSpread({}, child.props), {}, {
        // Toutes les props existantes de l'enfant
        style: _objectSpread(_objectSpread({}, child.props.style || {}), childStyle)
        // Fusionner avec les styles existants
      }));
    }
  });

  if (isAttached) return /*#__PURE__*/_react.default.createElement("div", {
    className: "gpt_button isAttached"
  }, spacedChildren);else return /*#__PURE__*/_react.default.createElement("div", {
    className: "gpt_button"
  }, spacedChildren);
};
var _default = ButtonGrp;
exports.default = _default;