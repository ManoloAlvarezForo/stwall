"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.signup = exports.getUserByToken = exports.isValidToken = exports.login = void 0;var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _utils = require("../utils/utils");
var UserResolver = _interopRequireWildcard(require("../resolvers/user"));function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};if (desc.get || desc.set) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}}newObj["default"] = obj;return newObj;}}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   * Creates the token according the user param.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   * @param {object} user User Object.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   */
var createToken = function createToken(user) {
  return _jsonwebtoken["default"].sign({ userId: user.id }, _utils.APP_SECRET);
};

/**
    * Validates the user to return a token with the user.
    *
    * @param {Object} args Arguments that contains the user object.
    */
var login = /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(args) {var user, valid;return regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
              UserResolver.getUserByEmail(args.email));case 2:user = _context.sent;if (

            user) {_context.next = 5;break;}throw (
              new Error('No such user found'));case 5:_context.next = 7;return (


              _bcryptjs["default"].compare(args.password, user.password));case 7:valid = _context.sent;if (

            valid) {_context.next = 10;break;}throw (
              new Error('Invalid password'));case 10:return _context.abrupt("return",


            {
              token: createToken(user),
              user: user });case 11:case "end":return _context.stop();}}}, _callee);}));return function login(_x) {return _ref.apply(this, arguments);};}();



/**
                                                                                                                                                              * Validates token.
                                                                                                                                                              *
                                                                                                                                                              * @param {String} token JWT Token to be validated.
                                                                                                                                                              */exports.login = login;
var isValidToken = function isValidToken(token) {
  var isValid = { isValid: false };

  try {
    var response = _jsonwebtoken["default"].verify(token, _utils.APP_SECRET);
    response && (isValid.isValid = true);
  } catch (error) {
    console.log(error);
    isValid.isValid = false;
  }

  return isValid;
};

/**
    * Gets the user authenticated by a token.
    *
    * @param {String} token JWT Token.
    */exports.isValidToken = isValidToken;
var getUserByToken = /*#__PURE__*/function () {var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(token) {var userResponse, response;return regeneratorRuntime.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
            userResponse = null;_context2.prev = 1;

            response = _jsonwebtoken["default"].verify(token, _utils.APP_SECRET);_context2.next = 5;return (
              UserResolver.getUserById(response.userId));case 5:userResponse = _context2.sent;_context2.next = 11;break;case 8:_context2.prev = 8;_context2.t0 = _context2["catch"](1);

            console.log(_context2.t0);case 11:return _context2.abrupt("return",


            userResponse);case 12:case "end":return _context2.stop();}}}, _callee2, null, [[1, 8]]);}));return function getUserByToken(_x2) {return _ref2.apply(this, arguments);};}();


/**
                                                                                                                                                                                         * Creates a new user with the cryptopassword to return a token.
                                                                                                                                                                                         *
                                                                                                                                                                                         * @param {Object} args Arguments that contains the user object.
                                                                                                                                                                                         */exports.getUserByToken = getUserByToken;
var signup = /*#__PURE__*/function () {var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(args) {var userFound, cryptPassword, user, token;return regeneratorRuntime.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return (

              UserResolver.getUserByEmail(args.email));case 2:userFound = _context3.sent;if (!
            userFound) {_context3.next = 5;break;}throw (
              new Error('This user already exists...'));case 5:_context3.next = 7;return (



              _bcryptjs["default"].hash(args.password, 10));case 7:cryptPassword = _context3.sent;_context3.next = 10;return (


              UserResolver.addUser({
                name: args.name,
                email: args.email,
                password: cryptPassword }));case 10:user = _context3.sent;


            //Create the user token.
            token = _jsonwebtoken["default"].sign({ userId: user.id }, _utils.APP_SECRET);return _context3.abrupt("return",

            {
              token: token,
              user: user });case 13:case "end":return _context3.stop();}}}, _callee3);}));return function signup(_x3) {return _ref3.apply(this, arguments);};}();exports.signup = signup;