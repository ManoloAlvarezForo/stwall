import mongoose from 'mongoose';
import Event from './event';

Event.discriminator(
  'preaching',
  new mongoose.Schema({
    lead: String,
    territories: [String],
  }),
);

export default mongoose.model('preaching');
