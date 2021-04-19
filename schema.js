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

  type updateUserPayload{
    user(
      name:String!
      email: String!
      phoneNumber:String!
      nidNumber: String
      isMarried: Boolean
      lastBloodGivenAt: String
      bloodGivenCount: Int
    ): User
    id: String!
  }

  input updateUserInput{
    name:String
    email: String
    phoneNumber:String
    nidNumber: String
    isMarried: Boolean
    lastBloodGivenAt: String
    bloodGivenCount: Int
  }

  type Query {
    users: [User!]!
    getUser(name: String!): User!
    deleteUser(_id: String): Int
  }

  type Mutation {
    createUser(
      name:String!
      email: String!
      phoneNumber:String!
      nidNumber: String
      isMarried: Boolean
      lastBloodGivenAt: String
      bloodGivenCount: Int
    ): User
    
    updateUser(
      user: updateUserInput
      id: String!
    ): updateUserPayload
    
  }
`

export const resolvers = {
    Query: {
      users: () => users.gets(),
      getUser: (_, {name}, {}) => users.get(name),
      deleteUser: (_, args, {}) => users.delete(args)
    },
    Mutation: {
      createUser: (_, args, {}) => users.create(args),
      updateUser: (_, args, {}) => users.update(args),
    }
};

