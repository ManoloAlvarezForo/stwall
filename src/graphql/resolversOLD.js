import * as AuthenticationResolver from '../resolvers/authentication';
import * as UserResolver from '../resolvers/user';
import * as PrechingResolver from '../resolvers/preaching';
import * as PublicMeetingResolver from '../resolvers/publicMeeting';
import * as EventResolver from '../resolvers/event';

/**
 * Authorized message.
 */
const AUTHORIZED_MESSAGE = 'You are not authorized!';

/**
 * Evaluates if the user authenticated exists.
 *
 * @param {User to be evaluated} user
 */
const validateAuthentication = user => {
  if (!user) throw new Error(AUTHORIZED_MESSAGE);
};

const resolvers = {
  Query: {
    users() {
      // validateAuthentication(context.user);
      return UserResolver.getUsers();
    },
    isValidToken(_, { token }, context) {
      // validateAuthentication(context.user);
      return AuthenticationResolver.isValidToken(token);
    },
    preachings: () => {
      return PrechingResolver.getPreachings();
    },
    publicMeetings: () => {
      return PublicMeetingResolver.getPublicMeetings();
    },
    eventById: (_, { id }) => {
      return EventResolver.getEventById(id);
    },
    getEventsByDate: (_, { fromDate, toDate }) => {
      return EventResolver.getEventsByDate(fromDate, toDate);
    },
  },
  Event: {
    __resolveType(obj, context, info) {
      if (obj.kind === 'preaching') {
        return 'Preaching';
      }

      if (obj.kind === 'publicMeeting') {
        return 'PublicMeeting';
      }

      return null;
    },
  },
  Events: {
    __resolveType(obj, context, info) {
      if (obj.kind === 'preaching') {
        return 'Preaching';
      }

      if (obj.kind === 'publicMeeting') {
        return 'PublicMeeting';
      }

      return null;
    },
  },
  Mutation: {
    signup(_, args) {
      return AuthenticationResolver.signup(args);
    },
    login(_, args) {
      return AuthenticationResolver.login(args);
    },
    addPreachingEvent: (_, { event }) => {
      return PrechingResolver.addEvent(event);
    },
    addPublicMeeting: (_, { event }) => {
      return PublicMeetingResolver.addEvent(event);
    },
  },
};

export default resolvers;
