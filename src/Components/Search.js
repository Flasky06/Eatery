import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";
import { useNavigate, NavLink } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };
  return (
    <Container>
      <SvgCard to={"/"}>
        <GiKnifeFork />
        <p>boni</p>
      </SvgCard>
      <FormStyle onSubmit={submitHandler}>
        <div>
          <FaSearch />
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            value={input}
          />
        </div>
      </FormStyle>
    </Container>
  );
}
const Container = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1rem auto;
  min-height: 5rem;
`;
const SvgCard = styled(NavLink)`
  margin-left: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  /* background-color: black; */
  border: none;
  overflow: hidden;
  text-decoration: none;
  svg {
    height: 5rem;
    width: 5rem;
    color: #e30c67;
  }
  p {
    color: #e30c67;
  }
`;
const Slink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #383334;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  text-decoration: none;

  p {
    color: white;
    font-size: 0.8rem;
    font-style: italic;
  }
  svg {
    color: white;
    height: 4rem;
    width: 4rem;
  }
`;
const FormStyle = styled.form`
  margin: 0rem 30rem;
  div {
    width: 100%;
    position: relative;
  }
  input {
    border: none;
    background-color: #383334;
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    color: white;
    size: 1rem;
    transform: translate(100%, -50%);
  }
`;

export default Search;
