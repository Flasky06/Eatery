import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, NavLink } from "react-router-dom";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&cuisine=${name}`
    );
    const recipes = await response.json();
    setCuisine(recipes.results);
    console.log(recipes.results);
  };
  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);
  return (
    <Container>
      {cuisine.map((item) => {
        return (
          <Card to={/recipe/ + item.id} key={item.id}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </Card>
        );
      })}
    </Container>
  );
}
const Container = styled.div`
  margin-left: 6rem;
  margin-right: 6rem;
  display: grid;
  grid-template-columns: auto auto auto auto;

  grid-gap: 2rem;
`;

const Card = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  img {
    border-radius: 1rem;
    overflow: hidden;
  }
  p {
    font-size: 1rem;
    font-weight: semi-bold;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: black;
  }
`;
export default Cuisine;
