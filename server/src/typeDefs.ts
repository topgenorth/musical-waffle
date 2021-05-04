import {gql} from "apollo-server-express";

const typeDefs = gql`
  type SimplifiedRangeLog {
    id: ID!
    rowid: String!
    date: String!
    firearmname: String!
    rounds: Int!
    range: String
    ammo: String
    notes: String
  }

  type User {
    id: ID!
    username: String!
    email: String
  }

  type Todo {
    id: ID!
    title: String!
    description: String
  }

  type Query {
    getUser(id: ID): User
    getTodos: [Todo!]
    getSimplifiedRangeLogs: [SimplifiedRangeLog!]
    getSimplifiedRangeLog(id: ID): SimplifiedRangeLog
  }

  type Mutation {
    addTodo(title: String!, description: String): Todo
    addSimplifiedRangeLog(date: String!, firearmname: String!, rounds: Int, range: String, ammo: String, notes:String): SimplifiedRangeLog
  }

  type Subscription {
    newTodo: Todo!
    newSimplifiedRangeLog: SimplifiedRangeLog!
  }
`;

export default typeDefs;
