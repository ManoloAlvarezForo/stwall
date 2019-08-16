import Preaching from '../models/preaching';
export const getPreachings = async () => {
  return await Preaching.find({});
};

export const addEvent = async args => {
  const newPreaching = new Preaching({ ...args });
  const response = await newPreaching.save();
  return response;
};

export const getPreachingById = async id => {
  return await Preaching.findById(id);
};
