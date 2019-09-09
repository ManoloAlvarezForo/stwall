"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _mongoose = _interopRequireDefault(require("mongoose"));
var _event = _interopRequireDefault(require("./event"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}

_event["default"].discriminator(
'preaching',
new _mongoose["default"].Schema({
  lead: String,
  territories: [String],
  moment: String,
  type: { type: String, "default": 'preaching' } }));var _default =



_mongoose["default"].model('preaching');exports["default"] = _default;