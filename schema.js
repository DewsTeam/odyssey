import { gql } from 'apollo-server'
import Users from './data-sources/Users'

const users = new Users()

export const typeDefs = gql`
  type User {
    id: String
    name:String!
    email: String!
    phoneNumber:String!
    nidNumber: String!
    isMarried: Boolean!
    lastBloodGivenAt: String!
    bloodGivenCount: Int!
  }

  type Query {
    users: [User!]!
    getUser(name: String!): User!
  }
`

export const resolvers = {
    Query: {
      users: () => users.getUsers(),
      getUser: (_, {name}, {}) => users.getUser(name)
    },
};

