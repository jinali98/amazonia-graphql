// const { animals } = require("../db");

const Category = {
  animals: (parent, args, { animals }) =>
    animals.filter((animal) => animal.category === parent.id),
};

module.exports = Category;

// query{
//   category(slug: "cats") {
//     animals {
//       id
//       title

//     }
//   }
//   }
