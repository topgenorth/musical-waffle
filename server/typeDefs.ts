import {gql} from "apollo-server-express";

const typeDefs = gql`
  type SimplifiedRangeLog {
    id: ID!
    date: String!
    firearm: String!
    rounds: Int!
    range: String
    ammoDescription: String
    notes: String    
  }
`;

export default typeDefs;
