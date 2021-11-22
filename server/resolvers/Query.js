const { mainCards, animals, categories } = require("../db.js");

const Query = {
  mainCards: (parent, args, { mainCards }) => mainCards,
  animals: (parent, args, { animals }) => animals,
  // this is to query for one particular animal
  animal: (parent, args, { animals }) =>
    animals.find((animal) => animal.slug === args.slug),

  categories: (parent, args, { categories }) => categories,
  category: (parent, args, { categories }) =>
    categories.find((category) => category.slug === args.slug),
};

module.exports = Query;

// query{
//   animals {
//     slug
//     image
//   }
// }
