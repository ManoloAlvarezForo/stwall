"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _mongoose = _interopRequireDefault(require("mongoose"));
var _moment = _interopRequireDefault(require("moment"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}

var Schema = _mongoose["default"].Schema;

var productSchema = new Schema({
  productId: { type: String, "default": '' },
  image: String,
  productName: String,
  price: Number,
  description: String,
  isAvailable: Boolean,
  availableQuantity: Number,
  createdDate: { type: String, "default": (0, _moment["default"])().format() } });


var CounterSchema = new Schema({
  _id: { type: String, required: true },
  seq: { type: Number, "default": 0 } });


var counter = _mongoose["default"].model('counter', CounterSchema);

productSchema.pre('save', function (next) {
  var doc = this;
  counter.findByIdAndUpdate({ _id: 'productId' }, { $inc: { seq: 1 } }, { "new": true, upsert: true }).then(function (count) {
    doc.productId = count.seq;
    next();
  })["catch"](
  function (error) {
    console.error("counter error-> : " + error);
    throw error;
  });
});

/**
     * Product mongoose schema.
     */var _default =
_mongoose["default"].model('product', productSchema);exports["default"] = _default;