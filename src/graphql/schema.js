import { merge } from 'lodash';
import { User, UserResolvers } from './user';
import { Authentication, AuthenticationResolvers } from './authentication';
import { EventInterface } from './eventInterface';
import { Preaching, PreachingResolvers } from './preaching';
import { PublicMeeting, PublicMeetingResolvers } from './publicMeeting';
import { Event, EventResolvers } from './event';
import { makeExecutableSchema } from 'graphql-tools';

const Query = `
    type Query {
        users: [User]
        isValidToken(token: String): ValidToken
        preachings: [Preaching]
        publicMeetings: [PublicMeeting]
        eventById(id: String): Event
        getEventsByDate(fromDate: String, toDate: String): [EventOutput]
    }
`;

const Mutation = `
    type Mutation {
        signup(email: String, password: String, name: String): AuthPayLoad
        login(email: String, password: String): AuthPayLoad
        addPreachingEvent(event: PreachingInput): Preaching
        addPublicMeeting(event: PublicMeetingInput): PublicMeeting
    }
`;

const resolvers = {};

export default makeExecutableSchema({
  typeDefs: [
    User,
    Authentication,
    EventInterface,
    Preaching,
    PublicMeeting,
    Event,
    Query,
    Mutation,
  ],
  resolvers: merge(
    resolvers,
    UserResolvers,
    AuthenticationResolvers,
    PreachingResolvers,
    PublicMeetingResolvers,
    EventResolvers,
  ),
  resolverValidationOptions: { requireResolversForResolveType: false },
});
