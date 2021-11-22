import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import CardDisplay from "../components/CardDisplay/CardDisplay";
import { gql, useQuery } from "@apollo/client";

const FETCH_DATA = gql`
  query ($slug: String!) {
    category(slug: $slug) {
      category
      animals {
        id
        image
        slug
        title
        price
        rating
      }
    }
  }
`;

function CategoryPage() {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(FETCH_DATA, {
    variables: {
      slug: slug,
    },
  });
  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;
  return (
    <div className="py-5">
      <Container>
        <h1 className="text-capitalize">
          {data.category.category}
          <CardDisplay animals={data.category.animals} />
        </h1>
      </Container>
    </div>
  );
}

export default CategoryPage;
