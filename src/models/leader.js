import mongoose from 'mongoose';
import moment from 'moment';

const Schema = mongoose.Schema;

/**
 * Product mongoose schema.
 */
export default mongoose.model(
  'leader',
  new Schema({
    name: String,
    avatar: String,
    lastName: String,
    fullBane: String,
    phone: String,
    createdDate: { type: String, default: moment().format() },
  }),
);
