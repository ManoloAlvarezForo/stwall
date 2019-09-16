"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _mongoose = _interopRequireDefault(require("mongoose"));
var _event = _interopRequireDefault(require("./event"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}

_event["default"].discriminator(
'publicMeeting',
new _mongoose["default"].Schema({
  meetingType: String,
  president: String,
  speaker: String,
  watchtowerGuider: String,
  watchtowerReader: String,
  type: { type: String, "default": 'meeting' } }));var _default =



_mongoose["default"].model('publicMeeting');exports["default"] = _default;