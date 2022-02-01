import styled from "styled-components";
import { showroomImages } from "./../bikeDb";

function Gallery() {
  return (
    <Wrapper>
      <h2>Gallery page ( showroom images )</h2>
      <section className="images">
        {showroomImages.map((image) => {
          return (
            <div className="image">
              <img src={image.photo} alt="image" />
            </div>
          );
        })}
      </section>
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
export default Gallery;
