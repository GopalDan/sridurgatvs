import styled from "styled-components";

function About() {
  return (
    <Wrapper>
      <div className="title">
        <p className="about">ABOUT</p>
        <p className="sri">SRI DURGA TVS</p>
      </div>
      <div className="container">
        <p className="title-2">Sri Durga TVS, Bike for all.</p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quo
          eveniet delectus, officia consequatur necessitatibus sunt totam
          provident voluptas a ut soluta velit harum culpa id repellendus
          doloribus, aspernatur fugit blanditiis voluptatum pariatur quisquam
          obcaecati? Quo nulla non esse ullam quae odit debitis, voluptates vel
          sapiente molestias doloribus dolor maiores perferendis sunt. Tempore
          quaerat, laborum, quos nihil distinctio rem voluptate suscipit autem
          eveniet ab iste aut? Laudantium esse repellat qui obcaecati nam. Illo,
          eos. Error, architecto. Minus totam eius eum ab. Architecto officia,
          dolor ea nobis fugit nostrum vel iste, animi sunt sed illo. Reiciendis
          quo velit perferendis iusto dolore, similique odit asperiores maiores
          dolor illum quae sunt, laborum eius culpa natus? Amet delectus ab
          veniam, similique voluptate eaque enim. eos. odit asperiores maiores
          <br></br>Error, architecto. Minus totam eius eum ab. Architecto
          officia, dolor ea nobis fugit nostrum vel iste, animi sunt sed illo.
          Reiciendis quo velit perferendis iusto dolore, similique odit
          asperiores maiores dolor illum quae sunt, laborum eius culpa natus?
          Amet delectus ab veniam, similique voluptate eaque enim.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tenetur
          tempora facilis iure, delectus corporis culpa voluptatum aperiam amet
          iste voluptatibus eveniet officiis officia beatae dicta aspernatur
          recusandae autem fuga quos cumque quam id. Ex repellendus illo neque
          odit culpa sint incidunt, magnam explicabo iure labore quo dolore
          voluptas soluta! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quod tenetur tempora facilis iure, delectus corporis culpa
          voluptatum aperiam amet iste voluptatibus eveniet officiis officia
          beatae dicta aspernatur recusandae autem fuga quos cumque quam id. Ex
          repellendus illo neque odit culpa sint incidunt, magnam explicabo iure
          labore quo dolore voluptas soluta!
        </p>
        <div className="divider"></div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .title {
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #111;
    padding: 3rem 0 5rem 0;
    /* padding-left: 5vw; */
  }

  .about {
    width: 90vw;
    margin: 0 auto;
    color: white;
    font-size: 1.25rem;
    font-weight: 300;
  }
  .sri {
    width: 90vw;
    margin: 0 auto;
    color: white;
    font-size: 1.25rem;
    font-weight: 500;
  }
  .container {
    width: 90vw;
    margin: 0 auto;
  }

  .title-2 {
    padding: 1rem 0;
    color: #3a7ada;
    font-weight: 500;
    font-size: 1.25rem;
  }
  .divider {
    border-bottom: 2px solid var(--subText50);
    overflow: hidden;
    margin: 1rem 0;
  }
`;
export default About;
