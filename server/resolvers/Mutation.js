const { v4 } = require("uuid");
const Mutation = {
  addAnimal: (parent, args, { animals }) => {
    const {
      slug,
      img,
      title,
      rating,
      price,
      description,
      stock,
      onSale,
      category,
    } = args;

    const newAnimal = {
      id: v4(),
      slug,
      img,
      title,
      rating,
      price,
      description,
      stock,
      onSale,
      category,
    };
    animals.push(newAnimal);
    return newAnimal;
  },

  removeAnimal: (parent, { id }, { animals }) => {
    const animalToRemove = animals.findIndex((animal) => animal.id === id);
    animals.splice(animalToRemove, 1);

    return true;
  },
};

module.exports = Mutation;

// mutation{
//     addAnimal(slug: "dog",
//     img: "dog",
//     title: "a cute dog",
//     rating: 4.5,
//     price:"45",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//     stock: 7,
//     onSale: false,
//     category: "mammal",) {
//         description
//       }
//     }

// mutation{
//     removeAnimal(id: "7")
//   }
