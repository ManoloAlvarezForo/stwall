"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.NotificationResolvers = exports.Notification = void 0;var NotificationsResolver = _interopRequireWildcard(require("../resolvers/notifications"));
var _graphqlSubscriptions = require("graphql-subscriptions");
var _app = require("../app");function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};if (desc.get || desc.set) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}}newObj["default"] = obj;return newObj;}}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}

var Notification = "\n  type Notification {\n    title: String\n    text: String\n    createdDate: String\n    id: String\n    isChecked: Boolean\n  }\n\n  type UnreadNotificationsSize {\n    size: Int\n  }\n";exports.Notification = Notification;













var NotificationResolvers = {
  Subscription: {
    notificationSent: {
      subscribe: (0, _graphqlSubscriptions.withFilter)(
      function () {return _app.pubsub.asyncIterator('notificationSent');},
      function (payload, variables, context) {
        var user = context.user;
        // The payload in that case is the new preaching and the variables comes from the params.
        // return payload.commentAdded.repository_name === variables.repoFullName;
        return true;
      }) } },



  Query: {
    getUnreadNotificationsSize: function () {var _getUnreadNotificationsSize = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_, _ref) {var userId;return regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:userId = _ref.userId;return _context.abrupt("return",
                NotificationsResolver.getUnreadNotificationsSizeByUserId(userId));case 2:case "end":return _context.stop();}}}, _callee);}));function getUnreadNotificationsSize(_x, _x2) {return _getUnreadNotificationsSize.apply(this, arguments);}return getUnreadNotificationsSize;}() },


  Mutation: {
    sendNotificationByUserId: function () {var _sendNotificationByUserId = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_, _ref2) {var userId, title, text, notification;return regeneratorRuntime.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:userId = _ref2.userId, title = _ref2.title, text = _ref2.text;_context2.next = 3;return (
                  NotificationsResolver.sendNotificationByUserId(
                  userId,
                  title,
                  text));case 3:notification = _context2.sent;return _context2.abrupt("return",


                notification);case 5:case "end":return _context2.stop();}}}, _callee2);}));function sendNotificationByUserId(_x3, _x4) {return _sendNotificationByUserId.apply(this, arguments);}return sendNotificationByUserId;}() } };exports.NotificationResolvers = NotificationResolvers;