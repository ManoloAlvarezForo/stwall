"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _mongoose = _interopRequireDefault(require("mongoose"));
var _moment = _interopRequireDefault(require("moment"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}

var Schema = _mongoose["default"].Schema;var _default =

_mongoose["default"].model(
'user',
new Schema({
  name: String,
  email: String,
  password: String,
  notifications: [
  {
    text: String,
    title: String,
    isChecked: { type: Boolean, "default": false },
    createdDate: { type: String, "default": (0, _moment["default"])().format() } }] }));exports["default"] = _default;