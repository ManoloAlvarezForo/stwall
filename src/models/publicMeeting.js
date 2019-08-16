import mongoose from 'mongoose';
import Event from './event';

Event.discriminator(
  'publicMeeting',
  new mongoose.Schema({
    meetingType: String,
    president: String,
    speaker: String,
    watchtowerGuider: String,
    watchtowerReader: String,
  }),
);

export default mongoose.model('publicMeeting');
