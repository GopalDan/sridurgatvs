import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Service from "./pages/Service";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/products" component={Product} />
        <Route exact path="/services" component={Service} />
        <Route exact path="/our-teams" component={Team} />
        <Route exact path="/contact-us" component={Contact} />
        <Route exact path="/gallery" component={Gallery} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
