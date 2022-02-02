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
              <img src={image.photo} alt="showroom-image" />
            </div>
          );
        })}
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 3rem auto;
  h3 {
    margin-top: 1rem;
  }

  .images {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    margin-bottom: 2rem;
  }

  .image {
    background: var(--clr-white);
    ${"" /* margin-bottom: 2rem; */}
    box-shadow: var(--lightShadowNew);
    transition: var(--mainTransition);
    display: grid;
    grid-template-rows: auto 1fr;
    border-radius: var(--mainBorderRadius);
  }
  .image img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
  }
  /* <===========================  Phone  ===================> */
  @media screen and (max-width: 576px) {
    /* width: 100vw; */
    margin: 0 1rem;
  }
`;
export default Gallery;
