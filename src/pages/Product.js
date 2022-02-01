import styled from "styled-components";
import { upcomingBikes, allBikes } from "./../bikeDb";
import Bike from "../components/Bike";

function Product() {
  return (
    <Wrapper>
      {/* ----------------------------
            ALL BIKES SECTION 
            ----------------------------*/}
      <h2 className="center-heading"> Products We Offer</h2>
      <Bike bikes={allBikes} />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 90vw;
  margin: 1rem auto;
  .center-heading {
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

export default Product;
