import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

function Footer() {
  // Automatically scrolls to top of a page
  function scrollTop() {
    // window.scrollTo(0, 0);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <Wrapper>
      <div className="footer-container">
        <div className="footer-column">
          <h4>Open Daily</h4>
          <p>9 AM - 6 PM</p>
        </div>
        <div className="footer-column">
          <h4>Call Us</h4>
          <p>0790 310 7393</p>
          <p>0840 927 8915</p>
        </div>
        <div className="footer-column">
          <h4>Address</h4>
          <p>Hathbari road, Gopalganj Nirsha</p>
          <p>Dhanbad 828205</p>
        </div>
      </div>

      {/* <div className="footer-sitemap">
        <Link to={"/"} onClick={scrollTop}>
          Home
        </Link>
        <Link to={"/watch"} onClick={scrollTop}>
          Products
        </Link>
        <Link to={"/about"} onClick={scrollTop}>
          Contact Us
        </Link>
      </div> */}
      {/* <div className="footer-bottom">
        <hr />
        <p className="copyright-text">travelBucket, Copyright &copy; 2021</p>
      </div> */}
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background: var(--theme-color-1);
  /* min-height: 20vh; */
  /* position: absolute;
  bottom: 0;
  left: 0;
  right: 0; */
  .footer-container {
    width: 75vw;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 4rem 0;
  }

  .footer-column h4 {
    ${"" /* color: #223c50; */}
    font-size: 1.25rem;
    /* color: hsl(209, 61%, 16%); */
    color: var(--theme-color-accent-1);
    font-weight: 500;
    margin-bottom: 0.6rem;
  }
  .quick-link {
    display: flex;
    flex-direction: column;
  }
  .quick-link a {
    display: block;
    color: #fff;
    font-size: 1.12rem;
  }
  .quick-link a:hover {
    color: turquoise;
  }
  p {
    color: #fff;
  }

  .footer-bottom {
    width: 80%;
    margin-top: 2rem;
    margin-right: auto;
    margin-left: auto;
  }
  hr {
    height: 0.5px;
    background: #fff;
  }
  .copyright-text {
    ${"" /* text-align: center; */}
    padding-top: 2rem;
  }

  .footer-sitemap {
    display: flex;
  }

  /* <===========================  Phone  ===================> */
  @media screen and (max-width: 576px) {
    .footer-container {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      padding: 3rem 0;
    }
    .footer-column {
      margin-bottom: 0.5rem;
    }
    .footer-column h4 {
      font-size: 1.12rem;
      margin-bottom: 0rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

export default Footer;
