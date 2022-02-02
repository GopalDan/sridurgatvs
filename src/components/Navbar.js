import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { FaThumbsUp, FaTimes, FaHamburger, FaClose } from "react-icons/fa";
import styled from "styled-components";

function Navbar() {
  const { pathname } = useLocation();
  const [currentPosition, setCurrentPosition] = useState(0);
  const [showNavbar, setShowNavbar] = useState(false);
  const [showAnim, setShowAnim] = useState(false);

  function itemClick(position) {
    setCurrentPosition(position);
    setShowNavbar(!showNavbar);
  }

  const onMenuIconClick = () => {
    setShowNavbar(!showNavbar);
  };

  const mouseHovered = () => {
    setShowAnim(true);
  };
  const mouseRemoved = () => {
    setShowAnim(false);
  };

  useEffect(() => {
    if (pathname === "/") setCurrentPosition(0);
    else if (pathname === "/about-us") setCurrentPosition(1);
    else if (pathname === "/products") setCurrentPosition(2);
    else if (pathname === "/services") setCurrentPosition(3);
    else if (pathname === "/our-teams") setCurrentPosition(4);
    else if (pathname === "/contact-us") setCurrentPosition(5);
    else setCurrentPosition(6);
  }, [pathname]);
  return (
    <Wrapper>
      <div className="top-item">
        <p>
          Call Us:
          <span> 0790 310 7393</span>
        </p>
      </div>
      <div className="brand-layout">
        <h1 className="brand-name">SRIDURGATVS</h1>
        <div class="menu-btn" onClick={onMenuIconClick}>
          <i>{!showNavbar && <FaHamburger></FaHamburger>}</i>
        </div>
      </div>

      <ul className={`main-nav ${showNavbar && "show"}`}>
        <li>
          <Link to={"/"} onClick={() => itemClick(0)}>
            HOME
            <div className={`${currentPosition == 0 && "selected-link"}`}></div>
          </Link>
        </li>
        <li>
          <Link
            to={"/about-us"}
            onClick={() => itemClick(1)}
            onMouseOver={mouseHovered}
            onMouseOut={mouseRemoved}
          >
            ABOUT US
            <div
              className={`${currentPosition == 1 && "selected-link"} `}
            ></div>
            <div className={`fade-in ${showAnim && "fade-in-show"}`}></div>
          </Link>
        </li>
        <li>
          <Link to={"/products"} onClick={() => itemClick(2)}>
            PRODUCTS
            <div className={`${currentPosition == 2 && "selected-link"}`}></div>
          </Link>
        </li>
        <li>
          <Link to={"/services"} onClick={() => itemClick(3)}>
            SERVICES
            <div className={`${currentPosition == 3 && "selected-link"}`}></div>
          </Link>
        </li>
        <li>
          <Link to={"/our-teams"} onClick={() => itemClick(4)}>
            OUR TEAMS
            <div className={`${currentPosition == 4 && "selected-link"}`}></div>
          </Link>
        </li>
        <li>
          <Link to={"/contact-us"} onClick={() => itemClick(5)}>
            CONTACT US
            <div className={`${currentPosition == 5 && "selected-link"}`}></div>
          </Link>
        </li>
        <li>
          <Link to={"/gallery"} onClick={() => itemClick(6)}>
            GALLERY
            <div className={`${currentPosition == 6 && "selected-link"}`}></div>
          </Link>
        </li>
      </ul>

      <div class="close-btn" onClick={onMenuIconClick}>
        <i>{showNavbar && <FaTimes></FaTimes>}</i>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  .fade-in {
    height: 4px;
    width: 0%;
    background: red;
    margin: auto;
    opacity: 0;
    transition: all 0.5s ease;
  }
  .fade-in-show {
    /* opacity: 1; */
    width: 80%;
  }
  .top-item {
    min-height: 4rem;
    background: var(--theme-color-1);
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .top-item p {
    color: white;
    font-size: 1rem;
    font-weight: 500;
    padding-right: 3rem;
  }

  .top-item span {
    color: var(--text);
    font-size: 1rem;
    font-weight: 700;
    padding-left: 0.2rem;
  }
  .brand-name {
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  .main-nav {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    margin-bottom: 1rem;
    /* border: 2px solid green; */
  }

  .main-nav li {
    /* margin: 0;
    padding: 0;
    list-style: none;*/
    margin-right: 50px;
    /* display: inline-block; */
    /* border: 2px solid blue; */
  }

  .main-nav li a {
    /* display: block; */
    color: black;
    /* text-decoration: none; */
    /* padding: 0.2rem 0; */
    /* margin: 0 10px; */

    /* margin-bottom: 0.5rem; */
    /* font-size: 20px; */
  }

  .main-nav li a:hover {
    color: var(--theme-color-1);
  }

  /* ------- UNDERLINE STRIKE ANIMATION -------- */
  .main-nav li a,
  .main-nav li a:after,
  .main-nav li a:before {
    transition: all 0.5s;
  }

  .main-nav li a {
    position: relative;
    /* border: 1px solid red; */
  }
  .main-nav li a:after {
    position: absolute;
    /* top: 0; */
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 0%;
    content: ".";
    color: transparent;
    background: var(--theme-color-accent-1);
    height: 4px;
  }
  .main-nav li a:hover:after {
    /* width: 80%; */
  }
  /* ------- END OF ANIMATION -------- */
  .selected-link {
    border: 2px solid var(--theme-color-accent-1);
    border-radius: 2px;
  }

  .menu-btn {
    display: none;
    color: var(--theme-color-1);
    font-size: 2rem;
    cursor: pointer;
  }

  .close-btn {
    display: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
  }
  /* <===========================  Laptop  ===================> */
  @media screen and (max-width: 992px) {
    .top-item {
      min-height: 3rem;
    }

    .top-item p {
      font-size: 1rem;
      padding-right: 1rem;
    }

    .brand-layout {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 1rem;
    }

    .brand-name {
      font-size: 1remm;
    }

    .menu-btn {
      display: block;
    }
    /* .menu-btn {
      display: block;
      position: absolute;
      top: 5rem;
      right: 2rem;
      z-index: 10;
    } */

    .close-btn {
      display: block;
      position: absolute;
      top: 2rem;
      right: 2rem;
      z-index: 10;
    }

    .main-nav {
      position: fixed;
      min-height: 60vh;
      width: 100%;
      ${"" /* left: -100%; */}
      ${"" /* top: 0; */}
      left: 0;
      top: -100%;
      background: var(--theme-color-1);
      /* background:#111; */
      text-align: center;
      padding-top: 80px;
      padding-bottom: 40px;
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      z-index: 10;
      ${"" /* z-index: 10; */}
    }
    .main-nav li {
      display: block;
      /* border: 2px solid red; */
    }

    .main-nav li a {
      color: white;
      display: inline-block;
      margin: 16px 0;
      /* font-size: 25px; */
      ${"" /* border: 2px solid blue; */}
    }

    .main-nav li a:hover {
      color: var(--theme-color-accent-1);
    }
    .show {
      ${"" /* left: 0; */}
      top: 0;
    }
  }

  /* <===========================  Phone  ===================> */
  @media screen and (max-width: 576px) {
  }
`;

export default Navbar;
