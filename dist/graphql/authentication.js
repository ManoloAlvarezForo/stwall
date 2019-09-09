"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.AuthenticationResolvers = exports.Authentication = void 0;var AuthenticationResolver = _interopRequireWildcard(require("../resolvers/authentication"));function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};if (desc.get || desc.set) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}}newObj["default"] = obj;return newObj;}}

var Authentication = "\n  type AuthPayLoad {\n    token: String\n    user: User\n  }\n\n  type ValidToken {\n    isValid: Boolean\n  }\n";exports.Authentication = Authentication;










var AuthenticationResolvers = {
  Query: {
    isValidToken: function isValidToken(_, _ref, context) {var token = _ref.token;
      // validateAuthentication(context.user);
      return AuthenticationResolver.isValidToken(token);
    } },

  Mutation: {
    signup: function signup(_, args) {
      return AuthenticationResolver.signup(args);
    },
    login: function login(_, args) {
      return AuthenticationResolver.login(args);
    } } };exports.AuthenticationResolvers = AuthenticationResolvers;