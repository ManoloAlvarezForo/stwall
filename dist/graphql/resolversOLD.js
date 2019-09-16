"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var AuthenticationResolver = _interopRequireWildcard(require("../resolvers/authentication"));
var UserResolver = _interopRequireWildcard(require("../resolvers/user"));
var PrechingResolver = _interopRequireWildcard(require("../resolvers/preaching"));
var PublicMeetingResolver = _interopRequireWildcard(require("../resolvers/publicMeeting"));
var EventResolver = _interopRequireWildcard(require("../resolvers/event"));function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};if (desc.get || desc.set) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}}newObj["default"] = obj;return newObj;}}

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * Authorized message.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    */
var AUTHORIZED_MESSAGE = 'You are not authorized!';

/**
                                                     * Evaluates if the user authenticated exists.
                                                     *
                                                     * @param {User to be evaluated} user
                                                     */
var validateAuthentication = function validateAuthentication(user) {
  if (!user) throw new Error(AUTHORIZED_MESSAGE);
};

var resolvers = {
  Query: {
    users: function users() {
      // validateAuthentication(context.user);
      return UserResolver.getUsers();
    },
    isValidToken: function isValidToken(_, _ref, context) {var token = _ref.token;
      // validateAuthentication(context.user);
      return AuthenticationResolver.isValidToken(token);
    },
    preachings: function preachings() {
      return PrechingResolver.getPreachings();
    },
    publicMeetings: function publicMeetings() {
      return PublicMeetingResolver.getPublicMeetings();
    },
    eventById: function eventById(_, _ref2) {var id = _ref2.id;
      return EventResolver.getEventById(id);
    },
    getEventsByDate: function getEventsByDate(_, _ref3) {var fromDate = _ref3.fromDate,toDate = _ref3.toDate;
      return EventResolver.getEventsByDate(fromDate, toDate);
    } },

  Event: {
    __resolveType: function __resolveType(obj, context, info) {
      if (obj.kind === 'preaching') {
        return 'Preaching';
      }

      if (obj.kind === 'publicMeeting') {
        return 'PublicMeeting';
      }

      return null;
    } },

  Events: {
    __resolveType: function __resolveType(obj, context, info) {
      if (obj.kind === 'preaching') {
        return 'Preaching';
      }

      if (obj.kind === 'publicMeeting') {
        return 'PublicMeeting';
      }

      return null;
    } },

  Mutation: {
    signup: function signup(_, args) {
      return AuthenticationResolver.signup(args);
    },
    login: function login(_, args) {
      return AuthenticationResolver.login(args);
    },
    addPreachingEvent: function addPreachingEvent(_, _ref4) {var event = _ref4.event;
      return PrechingResolver.addEvent(event);
    },
    addPublicMeeting: function addPublicMeeting(_, _ref5) {var event = _ref5.event;
      return PublicMeetingResolver.addEvent(event);
    } } };var _default =



resolvers;exports["default"] = _default;