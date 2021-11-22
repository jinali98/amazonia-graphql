import React from "react";
import "./MainHero.css";
import animals from "../../assets/images";
import { Container } from "reactstrap";
import { useQuery, gql } from "@apollo/client";

const FETCH_DATA = gql`
  query {
    mainCards {
      title
      image
    }
  }
`;

function MainHero() {
  const { loading, error, data } = useQuery(FETCH_DATA);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div className="MainHero">
      <Container>
        <div className="header-container">
          <h2>
            Find your <br /> new four-legged <br /> best friend
          </h2>
          <img src={animals.rhino} alt="card-img" />
        </div>
        <div className="cards-container">
          {data.mainCards.map((card) => {
            return (
              <div key={card.title} className="card">
                <h3>{card.title}</h3>
                <img
                  src={animals[card.image]}
                  style={{ width: "100%" }}
                  alt="card"
                />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default MainHero;
