import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
// icons
import { FaPizzaSlice, FaHamburger, FaFish } from "react-icons/fa";
import {
  GiChopsticks,
  GiHotSpices,
  GiBowlOfRice,
  GiChickenOven,
  GiTacos,
  GiMeat,
  GiPotato,
  GiSausage,
  GiOlive,
} from "react-icons/gi";
import { BsEggFried } from "react-icons/bs";

function Categories() {
  return (
    <List>
      <Slink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </Slink>
      <Slink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </Slink>
      <Slink to={"/cuisine/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </Slink>
      <Slink to={"/cuisine/Indian"}>
        <GiHotSpices />
        <h4>Indian</h4>
      </Slink>
      <Slink to={"/cuisine/Chinese"}>
        <GiBowlOfRice />
        <h4>Chinese</h4>
      </Slink>
      <Slink to={"/cuisine/German"}>
        <GiSausage />
        <h4>German</h4>
      </Slink>
      <Slink to={"/cuisine/Irish"}>
        <GiPotato />
        <h4>Irish</h4>
      </Slink>
      <Slink to={"/cuisine/French"}>
        <GiChickenOven />
        <h4>French</h4>
      </Slink>
      <Slink to={"/cuisine/African"}>
        <GiTacos />
        <h4>African</h4>
      </Slink>
      <Slink to={"/cuisine/Spanish"}>
        <BsEggFried />
        <h4>Spanish</h4>
      </Slink>
      <Slink to={"/cuisine/Mediterranean"}>
        <GiOlive />
        <h4>Mediterranean</h4>
      </Slink>
      <Slink to={"/cuisine/Greek"}>
        <GiMeat />
        <h4>Greek</h4>
      </Slink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
  padding: 2rem;
`;

const Slink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background-color: #4b4649;
  width: 4rem;
  height: 4rem;
  cursor: pointer;

  h4 {
    color: white;
    font-size: 0.8rem;
    object-fit: fill;
  }
  svg {
    color: white;
    height: 4rem;
    width: 4rem;
  }
  &.active {
    background-color: white;
    svg {
      color: #000000;
    }
    h4 {
      color: #000000;
    }
  }
`;

export default Categories;
