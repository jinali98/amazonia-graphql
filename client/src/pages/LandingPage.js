import React from "react";
import MainHero from "../components/MainHero/MainHero";
import CategoryDisplay from "../components/CategoryDisplay/CategoryDisplay";
import CardDisplay from "../components/CardDisplay/CardDisplay";
import { useQuery, gql, useMutation } from "@apollo/client";

const FETCH_DATA = gql`
  query {
    animals {
      id
      image
      rating
      slug
      price
      title
    }
  }
`;

const addAnimalMutation = gql`
  mutation (
    $slug: String!
    $image: String
    $title: String!
    $rating: Float
    $price: String!
    $description: [String!]!
    $stock: Int!
    $onSale: Boolean
  ) {
    addAnimal(
      slug: $slug
      image: $image
      title: $title
      rating: $rating
      price: $price
      description: $description
      stock: $stock
      onSale: $onSale
    ) {
      id
    }
  }
`;

function LandingPage() {
  const { loading, error, data } = useQuery(FETCH_DATA);

  const [addAnimal] = useMutation(addAnimalMutation);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;
  return (
    <div>
      <MainHero />
      <CategoryDisplay />
      <CardDisplay animals={data.animals} />
      <button
        onClick={() =>
          addAnimal({
            variables: {
              slug: "ostrich",
              image: "ostrich",
              title: "a cute dog",
              rating: 4.5,
              price: "45",
              stock: 4,
              description: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
              ],
              onSale: false,
            },
          })
        }
      >
        Add Animal
      </button>
    </div>
  );
}

export default LandingPage;
