"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.EventResolvers = exports.Event = void 0;var EventResolver = _interopRequireWildcard(require("../resolvers/event"));function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};if (desc.get || desc.set) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}}newObj["default"] = obj;return newObj;}}

var Event = "\n    union Events = Preaching | PublicMeeting\n    union Event = Preaching | PublicMeeting\n\n    type EventOutput {\n        date: String\n        events: [Events]\n    }\n";exports.Event = Event;









var EventResolvers = {
  Query: {
    allEvents: function allEvents() {
      return EventResolver.getEvents();
    },
    getEventsByDate: function getEventsByDate(_, _ref) {var fromDate = _ref.fromDate,toDate = _ref.toDate;
      return EventResolver.getEventsByDate(fromDate, toDate);
    },
    getEventsByMonth: function getEventsByMonth(_, _ref2) {var month = _ref2.month,year = _ref2.year,locale = _ref2.locale;
      return EventResolver.getEventsByMonth(month, year, locale);
    },
    eventById: function eventById(_, _ref3) {var id = _ref3.id;
      return EventResolver.getEventById(id);
    },
    recentEvents: function recentEvents() {
      return EventResolver.getRecentEvents();
    } },

  Event: {
    __resolveType: function __resolveType(obj) {
      if (obj.kind === 'preaching') {
        return 'Preaching';
      }

      if (obj.kind === 'publicMeeting') {
        return 'PublicMeeting';
      }

      return null;
    } },

  Events: {
    __resolveType: function __resolveType(obj) {
      if (obj.kind === 'preaching') {
        return 'Preaching';
      }

      if (obj.kind === 'publicMeeting') {
        return 'PublicMeeting';
      }

      return null;
    } } };exports.EventResolvers = EventResolvers;