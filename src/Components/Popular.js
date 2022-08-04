import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { NavLink } from "react-router-dom";

function Popular() {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=5`
      );
      const data = await response.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };
  return (
    <Container>
      <h2>Popular dishes</h2>
      <Splide
        options={{
          rewind: true,
          perPage: 4,
          pagination: false,
          gap: "0.5rem",
        }}
      >
        {popular.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Slink to={/recipe/ + recipe.id}>
                <img src={recipe.image} alt={recipe.title} />
                <p>{recipe.title}</p>
              </Slink>
            </SplideSlide>
          );
        })}
      </Splide>
    </Container>
  );
}
const Container = styled.div`
  h2 {
    margin-left: 5%;
    margin-bottom: 2rem;
  }
`;
const Slink = styled(NavLink)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 300px;
  width: 300px;
  border-radius: 1rem;
  overflow: hidden;
  text-decoration: none;
  img {
    object-fit: fill;
    height: 260px;
    width: 300px;
  }
  p {
    margin: 2rem;
    padding: auto;
    font-size: 1rem;
    font-weight: heavy;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: black;
  }
`;

export default Popular;
