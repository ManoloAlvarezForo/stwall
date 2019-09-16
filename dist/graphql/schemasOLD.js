"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _apolloServer = require("apollo-server");function _templateObject() {var data = _taggedTemplateLiteral(["\n  type User {\n    id: String\n    name: String\n    email: String\n  }\n\n  type AuthPayLoad {\n    token: String\n    user: User\n  }\n\n  interface EventInterface {\n    title: String\n    date: String\n    time: String\n    location: String\n    description: String\n  }\n\n  type Preaching implements EventInterface {\n    id: String\n    lead: String\n    territories: [String]\n    title: String\n    date: String\n    time: String\n    location: String\n    description: String\n  }\n\n  input PreachingInput {\n    lead: String\n    territories: [String]\n    title: String\n    date: String\n    time: String\n    location: String\n    description: String\n  }\n\n  type ValidToken {\n    isValid: Boolean\n  }\n\n  type PublicMeeting implements EventInterface {\n    id: String\n    title: String\n    date: String\n    time: String\n    location: String\n    description: String\n    meetingType: String\n    president: String\n    speaker: String\n    watchtowerGuider: String\n    watchtowerReader: String\n  }\n\n  input PublicMeetingInput {\n    title: String\n    date: String\n    time: String\n    location: String\n    description: String\n    meetingType: String\n    president: String\n    speaker: String\n    watchtowerGuider: String\n    watchtowerReader: String\n  }\n\n  union Events = Preaching | PublicMeeting\n  union Event = Preaching | PublicMeeting\n\n  type EventOutput {\n    date: String\n    events: [Events]\n  }\n\n  type Query {\n    users: [User]\n    isValidToken(token: String): ValidToken\n    preachings: [Preaching]\n    publicMeetings: [PublicMeeting]\n    eventById(id: String): Event\n    getEventsByDate(fromDate: String, toDate: String): [EventOutput]\n  }\n\n  type Mutation {\n    signup(email: String, password: String, name: String): AuthPayLoad\n    login(email: String, password: String): AuthPayLoad\n    addPreachingEvent(event: PreachingInput): Preaching\n    addPublicMeeting(event: PublicMeetingInput): PublicMeeting\n  }\n"]);_templateObject = function _templateObject() {return data;};return data;}function _taggedTemplateLiteral(strings, raw) {if (!raw) {raw = strings.slice(0);}return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));}

var schemas = (0, _apolloServer.gql)(_templateObject());var _default =
































































































schemas;

// events: [Event]
// eventById(id: String): Event
// eventsByDate(from: String, to: String): [CalendarEvent]
// calendarEventsByMonth(
//   month: String
//   year: String
//   locale: String
// ): [CalendarEvent]
// applicantsByFilter(query: String, properties: [String]): [Applicant]
// clientsByFilter(query: String, properties: [String]): [Client]
// productsByFilter(query: String, properties: [String]): [Product]
exports["default"] = _default;