"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _lodash = require("lodash");
var _user = require("./user");
var _authentication = require("./authentication");
var _eventInterface = require("./eventInterface");
var _preaching = require("./preaching");
var _publicMeeting = require("./publicMeeting");
var _event = require("./event");
var _graphqlTools = require("graphql-tools");

var Query = "\n    type Query {\n        users: [User]\n        isValidToken(token: String): ValidToken\n        preachings: [Preaching]\n        publicMeetings: [PublicMeeting]\n        eventById(id: String): Event\n        getEventsByDate(fromDate: String, toDate: String): [EventOutput]\n        getEventsByMonth(month: String, year: String, locale: String): [EventOutput]\n    }\n";











var Mutation = "\n    type Mutation {\n        signup(email: String, password: String, name: String): AuthPayLoad\n        login(email: String, password: String): AuthPayLoad\n        addPreachingEvent(event: PreachingInput): Preaching\n        addPublicMeeting(event: PublicMeetingInput): PublicMeeting\n    }\n";








var resolvers = {};var _default =

(0, _graphqlTools.makeExecutableSchema)({
  typeDefs: [
  _user.User,
  _authentication.Authentication,
  _eventInterface.EventInterface,
  _preaching.Preaching,
  _publicMeeting.PublicMeeting,
  _event.Event,
  Query,
  Mutation],

  resolvers: (0, _lodash.merge)(
  resolvers,
  _user.UserResolvers,
  _authentication.AuthenticationResolvers,
  _preaching.PreachingResolvers,
  _publicMeeting.PublicMeetingResolvers,
  _event.EventResolvers),

  resolverValidationOptions: { requireResolversForResolveType: false } });exports["default"] = _default;