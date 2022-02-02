import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import image1 from "./../assets/tvs_jupiter_125.jpg";
import image2 from "./../assets/TVS_RTR_Series_2020.jpg";
import image3 from "./../assets/TVS_Sport_2020.jpg";
import image4 from "./../assets/TVS_StarCity_2021.jpg";
import image5 from "./../assets/TVS_XL_2021.jpg";
import image6 from "./../assets/tvs-radeon-2020.jpg";
import image7 from "./../assets/tvs-zest-2020.jpg";
import Bike from "../components/Bike";
import { upcomingBikes, sortedBikes, owners } from "./../bikeDb";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
// const sortedBikes = [];

const mockImages = [
  {
    photo: require("./../assets/tvs_jupiter_125.jpg"),
    text: "tvs-jupiter-bike",
  },
  {
    photo: require("./../assets/TVS_RTR_Series_2020.jpg"),
    text: "tvs-rtr-series-bike",
  },
  {
    photo: require("./../assets/TVS_Sport_2020.jpg"),
    text: "tvs-sport-bike",
  },
  {
    photo: require("./../assets/TVS_StarCity_2021.jpg"),
    text: "tvs-starcity-bike",
  },
  {
    photo: require("./../assets/TVS_XL_2021.jpg"),
    text: "tvs-xl-bike",
  },
];
const rakeshInfo =
  "This is the string aboy info, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint dolorem ratione reprehenderit vero delectus illum fugiat eveniet eos, molestiae saepe inventore iure fuga totam tene necessitatibus assumenda ipsam ea fugit. y info, Lorem ipsum dolor sit, amet consectetur adipisicing elit. . y info, Lorem ipsum dolor sit, amet consectetur adipisicing elit. . y info, Lorem ipsum dolor sit, amet consectetur adipisicing elit. ";

function Home() {
  const [bannerImages, setBannerImages] = useState(mockImages);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [readMore1, setReadMore1] = useState(false);
  const [readMore2, setReadMore2] = useState(false);

  function onReadMoreClick1() {
    setReadMore1((oldValue) => {
      return !oldValue;
    });
  }
  function onReadMoreClick2() {
    setReadMore2((oldValue) => {
      return !oldValue;
    });
  }

  return (
    //https://medium.com/how-to-react/create-beautiful-image-sliders-carousels-in-react-using-react-alice-carousel-395d8ae9310c
    //https://react-bootstrap.github.io/components/carousel/
    <Wrapper>
      {/* <img
        className="banner-image"
        src={bannerImages[currentIndex].photo}
        alt="bike-image"
      /> */}
      <AliceCarousel
        autoPlay
        infinite
        autoPlayInterval={3000}
        disableButtonsControls
      >
        <img className="banner-image" src={image1} alt="bike" />
        <img className="banner-image" src={image2} alt="bike" />
        <img className="banner-image" src={image3} alt="bike" />
        <img className="banner-image" src={image4} alt="bike" />
        <img className="banner-image" src={image5} alt="bike" />
      </AliceCarousel>

      <div className="container">
        {/* OWNERS SECTION */}
        <div className="divider"></div>

        <h2 className="center-heading"> Founder's & Owners</h2>
        <article className="owners">
          <div className="owner">
            <img src={owners[0].image} alt={owners[0].name} />
            <h3>{owners[0].name}</h3>
            <p>
              {readMore1
                ? owners[0].description
                : `${owners[0].description.slice(0, 250)}...`}
              <span className="read-more" onClick={onReadMoreClick1}>
                {readMore1 ? "Read less" : "Read more"}
              </span>
            </p>
          </div>

          <div className="owner">
            <img src={owners[1].image} alt={owners[1].name} />
            <h3>{owners[1].name}</h3>
            <p>
              {readMore2
                ? owners[1].description
                : `${owners[1].description.slice(0, 250)}...`}
              <span className="read-more" onClick={onReadMoreClick2}>
                {readMore2 ? "Read less" : "Read more"}
              </span>
            </p>
          </div>
        </article>
        <div className="divider"></div>

        {/* ----------------------------
            NEW ARRIVAL BIKES SECTION 
            ----------------------------*/}
        <h2 className="center-heading"> New Arrival Bike's</h2>
        <Bike bikes={upcomingBikes} />
        <div className="divider"></div>

        {/* ----------------------------
            ALL BIKES SECTION 
            ----------------------------*/}
        <h2 className="center-heading"> TVS all Bikes & Scooty</h2>
        <Bike bikes={sortedBikes} />

        <br />
        <div className="show-more-container">
          <Link className="show-more" to="/products">
            show more
          </Link>
        </div>
      </div>
      {/* <Footer /> */}
    </Wrapper>
  );
}

const Wrapper = styled.header`
  .banner-image {
    width: 100%;
    height: auto;
    object-fit: cover;
    overflow: hidden;
  }

  .container {
    width: 90vw;
    margin: 1rem auto;
  }
  .divider {
    border-bottom: 1.5px solid var(--subText50);
    margin-top: 3rem;
  }

  .center-heading {
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }
  .owners {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* grid-template-rows: auto 1fr; */
    grid-gap: 20px 20px;
  }
  .owner {
    background: var(--clr-white);
    ${"" /* margin-bottom: 2rem; */}
    box-shadow: var(--lightShadowNew);
    transition: var(--mainTransition);
    /* display: grid; */
    /* grid-template-rows: auto 1fr; */
    border-radius: var(--mainBorderRadius);
  }

  /* .owner:hover {
    box-shadow: var(--darkShadowNew);
    transform: translateY(-7px);
  } */

  .owner img {
    /* width: 160px;
    height: 160px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: var(--light-shadow);
    text-align: center; */

    width: 100%;
    height: 12rem;
    object-fit: cover;
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
  }
  .owner h3 {
    margin-top: 1rem;
    text-align: center;
  }

  .owner p {
    padding: 1rem;
    color: var(--text);
  }
  .read-more {
    color: #3535f0;
    font-size: 18px;
    font-weight: 500;
  }

  .read-more:hover {
    cursor: pointer;
  }
  .show-more-container {
    display: flex;
    justify-content: center;
  }
  .show-more {
    background-color: var(--theme-color-accent-1);
    color: var(--theme-color-1);
    padding: 1rem 2rem;
    margin-top: 1rem;
    font-size: 20px;
    font-weight: 500;
    /* transition: all 0.3s ease; */
  }

  .show-more:hover {
    color: var(--theme-color-1);
    background-color: white;
    border: 1px solid var(--theme-color-1);
  }

  /* <===========================  Phone  ===================> */
  @media screen and (max-width: 576px) {
    .owners {
      grid-template-columns: 1fr;
    }
    .show-more {
      padding: 0.8rem 1.5rem;
      font-size: 18px;
      /* transition: all 0.3s ease; */
    }
  }
`;

export default Home;
