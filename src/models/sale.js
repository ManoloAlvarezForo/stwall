import mongoose from 'mongoose';
import moment from 'moment';

const Schema = mongoose.Schema;

/**
 * Product mongoose schema.
 */
export default mongoose.model('sale', new Schema({
    date: String,
    time: String,
    clientId: String,
    nit: String,
    nitName: String,
    products: [String],
    totalPayed: String,
    createdDate: { type: String, default: moment().format()}
}));