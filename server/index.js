const { ApolloServer, gql } = require("apollo-server");
const { mainCards, animals, categories } = require("./db");

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

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    mainCards: () => mainCards,
    animals: () => animals,
    // this is to query for one particular animal
    animal: (parent, args, ctx) =>
      animals.find((animal) => animal.slug === args.slug),

    categories: () => categories,
    category: (parent, args, ctx) =>
      categories.find((category) => category.slug === args.slug),
  },

  Category: {
    animals: (parent, args, ctx) =>
      animals.filter((animal) => animal.category === parent.id),
  },
  Animal: {
    category: (parent, args, ctx) =>
      categories.find((category) => category.id === parent.category),
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
