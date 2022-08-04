import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import styled from "styled-components";

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await response.json();
    setSearchedRecipes(recipes.results);
  };
  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);
  return (
    <Container>
      {searchedRecipes?.map((item) => {
        return (
          <Slink to={/recipe/ + item.id} key={item.id}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </Slink>
        );
      })}
    </Container>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 1rem;
`;
const Slink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-decoration: none;

  img {
    border-radius: 1rem;
    overflow: hidden;
  }
  p {
    font-size: 1rem;
    font-weight: heavy;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: black;
  }
`;
export default Searched;
