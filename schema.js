const { gql } = require('apollo-server');

const users = [
    {
        id: "1",
        name:"Amam",
        email: "amam@amam.me",
        phoneNumber:"01521103492",
        nidNumber:"105224568",
        isMarried: true,
        lastBloodGivenAt:"10Dec",
        bloodGivenCount:2
    },
    {
        id: "2",
        name:"Wahab",
        email: "amam@amam.me",
        phoneNumber:"01521103492",
        nidNumber:"105224568",
        isMarried: true,
        lastBloodGivenAt:"10Dec",
        bloodGivenCount:2
    },
]

const typeDefs = gql`

  type User {
    id: String
    name:String
    email: String
    phoneNumber:String
    nidNumber: String
    isMarried: Boolean
    lastBloodGivenAt: String
    bloodGivenCount: Int
  }

  type Query {
    users: [User]
    user(id: String!): User
  }
`

const resolvers = {
    Query: {
      users: () => users,
      user: (_, {id}, {}) => users.find(c=>c.id==id)
    },
};

module.exports = {typeDefs, resolvers}