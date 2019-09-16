"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.PublicMeetingResolvers = exports.PublicMeeting = void 0;var PublicMeetingResolver = _interopRequireWildcard(require("../resolvers/publicMeeting"));function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};if (desc.get || desc.set) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}}newObj["default"] = obj;return newObj;}}

var PublicMeeting = "\n    type PublicMeeting implements EventInterface {\n        id: String\n        title: String\n        date: String\n        time: String\n        location: String\n        description: String\n        meetingType: String\n        president: String\n        speaker: String\n        watchtowerGuider: String\n        watchtowerReader: String\n        type: String\n    }\n\n    input PublicMeetingInput {\n        title: String\n        date: String\n        time: String\n        location: String\n        description: String\n        meetingType: String\n        president: String\n        speaker: String\n        watchtowerGuider: String\n        watchtowerReader: String\n    }\n";exports.PublicMeeting = PublicMeeting;





























var PublicMeetingResolvers = {
  Query: {
    publicMeetings: function publicMeetings() {
      return PublicMeetingResolver.getPublicMeetings();
    } },

  Mutation: {
    addPublicMeeting: function addPublicMeeting(_, _ref) {var event = _ref.event;
      return PublicMeetingResolver.addEvent(event);
    } } };exports.PublicMeetingResolvers = PublicMeetingResolvers;