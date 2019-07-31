import * as AuthenticationResolver from '../resolvers/authentication';
import * as UserResolver from '../resolvers/user';
import * as ApplicantResolver from '../resolvers/applicant';
import * as RouteResolver from '../resolvers/route';
import * as EventResolver from '../resolvers/event';
import * as ClientResolver from '../resolvers/client';
import * as ProductResolver from '../resolvers/product';

/**
 * Authorized message.
 */
const AUTHORIZED_MESSAGE = 'You are not authorized!';

/**
 * Evaluates if the user authenticated exists.
 * 
 * @param {User to be evaluated} user 
 */
const validateAuthentication = (user) => {
  if (!user) throw new Error(AUTHORIZED_MESSAGE)
}

const resolvers = {
  Query: {
    users(_, args, context) {
      // validateAuthentication(context.user);
      return UserResolver.getUsers();
    },
    applicants(_, args, context) {
      // validateAuthentication(context.user);
      return ApplicantResolver.getApplicants();
    },
    applicantById(_, args, context) {
      // validateAuthentication(context.user);
      return ApplicantResolver.getApplicantById(args.id);
    },
    events(_, __, context) {
      return EventResolver.getEvents();
    },
    eventById(_, {id}, context) {
      return EventResolver.getEventById(id);
    },
    eventsByDate(_, args, context) {
      return EventResolver.getEventsByDate(args.from, args.to);
    },
    calendarEventsByMonth(_, {month, year, locale}, context) {
      return EventResolver.getCalendarEventsByMonth(month, year, locale);
    },
    applicantsByFilter(_, {query, properties}, context) {
      return ApplicantResolver.getApplicantsByFilter(query, properties);
    },
    clientsByFilter(_, {query, properties}, context) {
      return ClientResolver.getClientsByFilter(query, properties);
    },
    productsByFilter(_, {query, properties}, context) {
      return ProductResolver.getProductsByFilter(query, properties);
    },
    isValidToken(_, {token}, context) {
      // validateAuthentication(context.user);
      return AuthenticationResolver.isValidToken(token);
    }
  },
  Mutation: {
    signup(_, args) {
      return AuthenticationResolver.signup(args);
    },
    login(_, args) {
      return AuthenticationResolver.login(args);
    },
    addApplicant(_, {applicant}, context) {
      validateAuthentication(context);
      return ApplicantResolver.addApplicant(applicant);
    },
    updateApplicant(_, {applicantToUpdate}, context) {
      validateAuthentication(context);
      return ApplicantResolver.updateApplicantById(applicantToUpdate);
    },
    addRoute(_, {route}, context) {
      validateAuthentication(context);
      return RouteResolver.addRoute(route);
    },
    addEvent(_, {event}, context) {
      return EventResolver.addEvent(event);
    },
    addClient(_, {client}, context) {
      return ClientResolver.addClient(client);
    },
    addProduct(_, {product}, context) {
      return ProductResolver.addProduct(product);
    }
  }
};

export default resolvers;