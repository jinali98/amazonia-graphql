const { ApolloServer, gql } = require("apollo-server");

// defining gql schema
const typeDefs = gql`
  type MainCard {
    title: String
    image: String
  }

  type Animal {
    id: ID!
    slug: String!
    img: String!
    title: String!
    rating: Float!
    price: String!
    description: [String!]!
    stock: Int!
    onSale: Boolean
    category: Category!
  }

  type Category {
    id: ID!
    image: String!
    category: String!
    slug: String!
    animals: [Animal!]!
  }

  type Query {
    mainCards: [MainCard]
    animals: [Animal!]!
    animal(slug: String!): Animal
    categories: [Category!]!
    category(slug: String!): Category!
  }
`;

module.exports = typeDefs;
