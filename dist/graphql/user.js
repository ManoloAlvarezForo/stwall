"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.UserResolvers = exports.User = void 0;var UserResolver = _interopRequireWildcard(require("../resolvers/user"));function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};if (desc.get || desc.set) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}}newObj["default"] = obj;return newObj;}}

var User = "\ntype User {\n    id: String\n    name: String\n    email: String\n  }\n";exports.User = User;







var UserResolvers = {
  Query: {
    users: function users() {
      // validateAuthentication(context.user);
      return UserResolver.getUsers();
    } } };exports.UserResolvers = UserResolvers;