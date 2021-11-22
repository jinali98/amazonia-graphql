const { ApolloServer, gql } = require("apollo-server");
const typeDefs = require("./schema.js");
const Query = require("./resolvers/Query.js");
const Category = require("./resolvers/Category.js");
const Animal = require("./resolvers/Animal.js");
const { mainCards, animals, categories } = require("./db.js");

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query,
  Category,
  Animal,
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { mainCards, animals, categories },
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
