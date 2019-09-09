import * as PrechingResolver from '../resolvers/preaching';

export const Preaching = `
    type Preaching implements EventInterface {
        id: String
        lead: String
        territories: [String]
        title: String
        date: String
        time: String
        location: String
        description: String
        moment: String
        type: String
    }

    input PreachingInput {
        lead: String
        territories: [String]
        title: String
        date: String
        time: String
        location: String
        description: String
        moment: String
    }
`;

export const PreachingResolvers = {
  Query: {
    preachings: () => {
      return PrechingResolver.getPreachings();
    },
  },
  Mutation: {
    addPreachingEvent: (_, { event }) => {
      return PrechingResolver.addEvent(event);
    },
  },
};
