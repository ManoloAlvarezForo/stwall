"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _mongoose = _interopRequireDefault(require("mongoose"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}

var Schema = _mongoose["default"].Schema;var _default =

_mongoose["default"].model(
'user',
new Schema({
  name: String,
  email: String,
  password: String }));exports["default"] = _default;