"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.PreachingResolvers = exports.Preaching = void 0;var PrechingResolver = _interopRequireWildcard(require("../resolvers/preaching"));function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};if (desc.get || desc.set) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}}newObj["default"] = obj;return newObj;}}

var Preaching = "\n    type Preaching implements EventInterface {\n        id: String\n        lead: String\n        territories: [String]\n        title: String\n        date: String\n        time: String\n        location: String\n        description: String\n        moment: String\n        type: String\n    }\n\n    input PreachingInput {\n        lead: String\n        territories: [String]\n        title: String\n        date: String\n        time: String\n        location: String\n        description: String\n        moment: String\n    }\n";exports.Preaching = Preaching;

























var PreachingResolvers = {
  Query: {
    preachings: function preachings() {
      return PrechingResolver.getPreachings();
    } },

  Mutation: {
    addPreachingEvent: function addPreachingEvent(_, _ref) {var event = _ref.event;
      return PrechingResolver.addEvent(event);
    } } };exports.PreachingResolvers = PreachingResolvers;