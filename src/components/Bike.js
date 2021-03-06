import styled from "styled-components";

function Bike({ bikes }) {
  return (
    <Wrapper>
      <section className="bikes">
        {bikes.map((bike) => {
          return (
            <article className="bike">
              <img src={bike.image} alt={bike.name} />
              <div className="bike-info">
                <div className="hr-lay">
                  <h3>{bike.name}</h3>
                  <div>
                    <span className="bike-price">{bike.price}</span> onwards
                  </div>
                </div>
                <p className="bike-description">{bike.description}</p>
              </div>
            </article>
          );
        })}
      </section>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .bikes {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px 20px;
  }

  .bike {
    background: var(--clr-white);
    ${"" /* margin-bottom: 2rem; */}
    box-shadow: var(--lightShadowNew);
    transition: var(--mainTransition);
    display: grid;
    grid-template-rows: auto 1fr;
    border-radius: var(--mainBorderRadius);
  }
  .bike:hover {
    box-shadow: var(--darkShadowNew);
    transform: translateY(-7px);
  }
  .bike img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
  }

  .bike-info {
    padding: 0.8rem 0.5rem 1rem 0.5rem;
    /* border: 1px solid red; */
  }
  .bike-info h3 {
    font-size: 1.6rem;
  }
  .hr-lay {
    display: flex;
    justify-content: space-between;
  }
  .bike-price {
    /* display: inline; */
    font-size: 1.25rem;
    font-weight: 700;
    color: red;
  }

  .bike-description {
    font-size: 1rem;
  }
  /* <===========================  Tablet  ===================> */
  @media screen and (min-width: 577px) and (max-width: 768px) {
    .bike-info h3 {
      font-size: 1.4rem;
    }
  }

  /* <===========================  Phone  ===================> */
  @media screen and (max-width: 576px) {
    .bikes {
      grid-template-columns: 1fr;
    }
    .bike-info h3 {
      font-size: 1.4rem;
    }
    .bike-description {
      font-size: 0.9rem;
    }
    .bike-price {
      font-size: 1.12rem;
    }
  }
`;

export default Bike;
