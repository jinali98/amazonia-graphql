// const { categories } = require("../db");

const Animal = {
  category: (parent, args, { categories }) =>
    categories.find((category) => category.id === parent.category),
};

module.exports = Animal;
