import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

function Navbar() {
  const { pathname } = useLocation();
  const [currentPosition, setCurrentPosition] = useState(0);

  function itemClick(position) {
    setCurrentPosition(position);
  }

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
      <h1 className="brand-name">SRIDURGATVS</h1>
      {/* <div id="fade-in" class="box"></div> */}

      <ul className="main-nav">
        <li>
          <Link to={"/"} onClick={() => itemClick(0)}>
            HOME
          </Link>
          <div className={`${currentPosition == 0 && "selected-link"}`}></div>
        </li>
        <li>
          <Link to={"/about-us"} onClick={() => itemClick(1)}>
            ABOUT US
          </Link>
          <div className={`${currentPosition == 1 && "selected-link"}`}></div>
        </li>
        <li>
          <Link to={"/products"} onClick={() => itemClick(2)}>
            PRODUCTS
          </Link>
          <div className={`${currentPosition == 2 && "selected-link"}`}></div>
        </li>
        <li>
          <Link to={"/services"} onClick={() => itemClick(3)}>
            SERVICES
          </Link>
          <div className={`${currentPosition == 3 && "selected-link"}`}></div>
        </li>
        <li>
          <Link to={"/our-teams"} onClick={() => itemClick(4)}>
            OUR TEAMS
          </Link>
          <div className={`${currentPosition == 4 && "selected-link"}`}></div>
        </li>
        <li>
          <Link to={"/contact-us"} onClick={() => itemClick(5)}>
            CONTACT US
          </Link>
          <div className={`${currentPosition == 5 && "selected-link"}`}></div>
        </li>
        <li>
          <Link to={"/gallery"} onClick={() => itemClick(6)}>
            GALLERY
          </Link>
          <div className={`${currentPosition == 6 && "selected-link"}`}></div>
        </li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  .box {
    display: block;
    background: lightblue;
    margin-bottom: 1em;
  }

  #fade-in {
    height: 150px;
    width: 1px;
    opacity: 0;
    transition: all 0.75s ease;
  }
  #fade-in.show {
    opacity: 1;
    height: 150px;
    width: 500px;
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
    margin-bottom: 1rem;
  }

  .main-nav li {
    margin: 0;
    padding: 0;
    list-style: none;
    margin-right: 32px;
  }

  .main-nav li a {
    color: black;
    text-decoration: none;
    /* font-size: 20px; */
  }
  .main-nav li a:hover {
    color: var(--theme-color-1);
  }

  .selected-link {
    border: 2px solid var(--theme-color-accent-1);
    border-radius: 2px;
  }
`;

export default Navbar;
