import styled from "styled-components";

function About() {
  return (
    <Wrapper>
      <h1>About page</h1>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 60vw;
  /* min-height: 19vh; */
  margin: 3rem auto;
  h3 {
    margin-top: 1rem;
  }
`;
export default About;
