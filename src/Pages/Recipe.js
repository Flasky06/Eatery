import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState([]);
  const fetchDetails = async (name) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailsData = await response.json();
    setDetails(detailsData);
    console.log(detailsData);
  };
  useEffect(() => {
    fetchDetails();
  }, [params.name]);
  return (
    <DetailWrapper>
      <h2>{details.title}</h2>
      <Card>
        <img src={details.image} alt={details.image} />
      </Card>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin: 0% 10%;
`;
const Card = styled.div`
  width: 100%;
  img {
    object-fit: fill;
    height: 13rem;
    width: 13rem;
    border-radius: 50%;
  }
`;
export default Recipe;
