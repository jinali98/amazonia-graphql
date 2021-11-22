const { categories } = require("../db");

const Animal = {
  category: (parent, args, ctx) =>
    categories.find((category) => category.id === parent.category),
};

module.exports = Animal;
