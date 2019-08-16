import { gql } from 'apollo-server';

const schemas = gql`
  type User {
    id: String
    name: String
    email: String
  }

  type AuthPayLoad {
    token: String
    user: User
  }

  interface EventInterface {
    title: String
    date: String
    time: String
    location: String
    description: String
  }

  type Preaching implements EventInterface {
    id: String
    lead: String
    territories: [String]
    title: String
    date: String
    time: String
    location: String
    description: String
  }

  input PreachingInput {
    lead: String
    territories: [String]
    title: String
    date: String
    time: String
    location: String
    description: String
  }

  type ValidToken {
    isValid: Boolean
  }

  type PublicMeeting implements EventInterface {
    id: String
    title: String
    date: String
    time: String
    location: String
    description: String
    meetingType: String
    president: String
    speaker: String
    watchtowerGuider: String
    watchtowerReader: String
  }

  input PublicMeetingInput {
    title: String
    date: String
    time: String
    location: String
    description: String
    meetingType: String
    president: String
    speaker: String
    watchtowerGuider: String
    watchtowerReader: String
  }

  union Events = Preaching | PublicMeeting
  union Event = Preaching | PublicMeeting

  type EventOutput {
    date: String
    events: [Events]
  }

  type Query {
    users: [User]
    isValidToken(token: String): ValidToken
    preachings: [Preaching]
    publicMeetings: [PublicMeeting]
    eventById(id: String): Event
    getEventsByDate(fromDate: String, toDate: String): [EventOutput]
  }

  type Mutation {
    signup(email: String, password: String, name: String): AuthPayLoad
    login(email: String, password: String): AuthPayLoad
    addPreachingEvent(event: PreachingInput): Preaching
    addPublicMeeting(event: PublicMeetingInput): PublicMeeting
  }
`;

export default schemas;

// events: [Event]
// eventById(id: String): Event
// eventsByDate(from: String, to: String): [CalendarEvent]
// calendarEventsByMonth(
//   month: String
//   year: String
//   locale: String
// ): [CalendarEvent]
// applicantsByFilter(query: String, properties: [String]): [Applicant]
// clientsByFilter(query: String, properties: [String]): [Client]
// productsByFilter(query: String, properties: [String]): [Product]
