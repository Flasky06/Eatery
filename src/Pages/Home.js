import React from "react";
import styled from "styled-components";

import New from "../Components/New";
import Popular from "../Components/Popular";

function Home() {
  return (
    <HomeDiv>
      <New />
      <Popular />
    </HomeDiv>
  );
}
const HomeDiv = styled.div`
  width: 85%;
  margin: auto;
`;

export default Home;
