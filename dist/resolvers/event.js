"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.removeEventById = exports.updateEventById = exports.getEventById = exports.addEvent = exports.getEventsByMonth = exports.getEventsByDate = exports.getEvents = void 0;var _event = _interopRequireDefault(require("../models/event"));
var _CalendarUtil = require("../utils/CalendarUtil");
var _moment = _interopRequireDefault(require("moment"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(source, true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(source).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Gets All events.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */
var getEvents = /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {var allEvents, response, _loop, index;return regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
              _event["default"].find({}));case 2:allEvents = _context.sent;
            response = [];_loop = function _loop(

            index) {
              var e = allEvents[index];
              var dateFound = response.find(function (l) {return l.date === e.date;});
              if (dateFound) {
                dateFound.events.push(e);
                var _index = response.indexOf(dateFound);
                response[_index] = dateFound;
              } else {
                response = [].concat(_toConsumableArray(response), [{ date: e.date, events: [e] }]);
              }};for (index = 0; index < allEvents.length; index++) {_loop(index);
            }return _context.abrupt("return",

            response);case 7:case "end":return _context.stop();}}}, _callee);}));return function getEvents() {return _ref.apply(this, arguments);};}();


/**
                                                                                                                                                         * Gets Events by a Date from and a Date to.
                                                                                                                                                         *
                                                                                                                                                         * @param {String} from Date to specifies the from.
                                                                                                                                                         * @param {String} to Date to specifies the to.
                                                                                                                                                         */exports.getEvents = getEvents;
var getEventsByDate = /*#__PURE__*/function () {var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(fromDateParam, toDateParam) {var response, fromDate, toDate, newDate, auxDate;return regeneratorRuntime.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
            response = [];
            fromDate = (0, _moment["default"])(fromDateParam);
            toDate = (0, _moment["default"])(toDateParam);case 3:if (

            (0, _moment["default"])(fromDate).isAfter(toDate)) {_context2.next = 12;break;}
            newDate = { date: fromDate.format('YYYY-MM-DD'), events: [] };_context2.next = 7;return (
              _event["default"].find({ date: fromDate.format('YYYY-MM-DD') }));case 7:auxDate = _context2.sent;
            if (auxDate.length !== 0) {
              newDate.events = newDate.events.concat(auxDate);
              response.push(newDate);
            }

            fromDate.add(1, 'days');_context2.next = 3;break;case 12:return _context2.abrupt("return",


            response);case 13:case "end":return _context2.stop();}}}, _callee2);}));return function getEventsByDate(_x, _x2) {return _ref2.apply(this, arguments);};}();


/**
                                                                                                                                                                          * Gets the events by month and year date also use the locale and the days per month to calculate the events.
                                                                                                                                                                          *
                                                                                                                                                                          * @param {String} month Month number to be used to find Events.
                                                                                                                                                                          * @param {String} year Year number to be used to find Events.
                                                                                                                                                                          * @param {String} locale Locale to handle Dates according the locale.
                                                                                                                                                                          * @param {String} daysPerMonth Days per month to extra days.
                                                                                                                                                                          */exports.getEventsByDate = getEventsByDate;
var getEventsByMonth = /*#__PURE__*/function () {var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(month, year, locale, daysPerMonth) {var calendarUtil, fromDate, toDate, response, auxDate, dayAux;return regeneratorRuntime.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
            calendarUtil = (0, _CalendarUtil.getStartAndEndDateFromMonth)(
            month,
            year,
            locale,
            daysPerMonth);

            fromDate = calendarUtil.startDate;
            toDate = calendarUtil.endDate;
            response = [];case 4:if (

            (0, _moment["default"])(fromDate).isAfter(toDate)) {_context3.next = 12;break;}_context3.next = 7;return (
              _event["default"].find({ date: fromDate.format('YYYY-MM-DD') }));case 7:auxDate = _context3.sent;
            if (auxDate.length !== 0) {
              dayAux = { date: fromDate.format('YYYY-MM-DD'), events: [] };
              dayAux.events = dayAux.events.concat(auxDate);
              response.push(dayAux);
            }

            fromDate.add(1, 'days');_context3.next = 4;break;case 12:return _context3.abrupt("return",


            response);case 13:case "end":return _context3.stop();}}}, _callee3);}));return function getEventsByMonth(_x3, _x4, _x5, _x6) {return _ref3.apply(this, arguments);};}();


/**
                                                                                                                                                                                      * Adds the new Event based in the arguments.
                                                                                                                                                                                      *
                                                                                                                                                                                      * @param {Object} args Contanis the arguments to be added in the new intem.
                                                                                                                                                                                      */exports.getEventsByMonth = getEventsByMonth;
var addEvent = /*#__PURE__*/function () {var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(args) {var newEvent, response;return regeneratorRuntime.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
            newEvent = new _event["default"](_objectSpread({}, args));_context4.next = 3;return (
              newEvent.save());case 3:response = _context4.sent;return _context4.abrupt("return",
            response);case 5:case "end":return _context4.stop();}}}, _callee4);}));return function addEvent(_x7) {return _ref4.apply(this, arguments);};}();


/**
                                                                                                                                                              * Gets an Event according the id.
                                                                                                                                                              *
                                                                                                                                                              * @param {String} id ID to be used to fing the Event.
                                                                                                                                                              */exports.addEvent = addEvent;
var getEventById = /*#__PURE__*/function () {var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(id) {return regeneratorRuntime.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_context5.next = 2;return (
              _event["default"].findById(id));case 2:return _context5.abrupt("return", _context5.sent);case 3:case "end":return _context5.stop();}}}, _callee5);}));return function getEventById(_x8) {return _ref5.apply(this, arguments);};}();


/**
                                                                                                                                                                                                                                                   * Updates the Events using the Event Object to update.
                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                   * @param {Object} EventToUpdate
                                                                                                                                                                                                                                                   */exports.getEventById = getEventById;
var updateEventById = /*#__PURE__*/function () {var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(EventToUpdate) {var event, eventUpdated;return regeneratorRuntime.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:_context6.next = 2;return (
              _event["default"].findByIdAndUpdate(EventToUpdate.id, EventToUpdate));case 2:event = _context6.sent;
            eventUpdated = { updated: false, Event: {} };if (!(

            event !== null)) {_context6.next = 9;break;}
            eventUpdated.updated = true;_context6.next = 8;return (
              _event["default"].findById(EventToUpdate.id));case 8:eventUpdated.Event = _context6.sent;case 9:return _context6.abrupt("return",


            eventUpdated);case 10:case "end":return _context6.stop();}}}, _callee6);}));return function updateEventById(_x9) {return _ref6.apply(this, arguments);};}();


/**
                                                                                                                                                                          * Removes an Event using an Id.
                                                                                                                                                                          *
                                                                                                                                                                          * @param {
                                                                                                                                                                          * } idToRemove
                                                                                                                                                                          */exports.updateEventById = updateEventById;
var removeEventById = /*#__PURE__*/function () {var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(idToRemove) {return regeneratorRuntime.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:_context7.next = 2;return (
              _event["default"].findByIdAndRemove(idToRemove));case 2:return _context7.abrupt("return", _context7.sent);case 3:case "end":return _context7.stop();}}}, _callee7);}));return function removeEventById(_x10) {return _ref7.apply(this, arguments);};}();exports.removeEventById = removeEventById;