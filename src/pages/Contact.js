import styled from "styled-components";

function Contact() {
  return (
    <Wrapper>
      <h2>If you have any query, reach out to us</h2>
      <h3>Phone</h3>
      <p>0790 310 7393</p>
      <p>0840 927 8915</p>
      <h3>Email</h3>
      <p>sridurgatvs@gmail.com</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 60vw;
  margin: 3rem auto;
  h3 {
    margin-top: 1rem;
  }
`;

export default Contact;
