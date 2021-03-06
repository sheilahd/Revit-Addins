import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./header";
import Services from "./services";
import AddinsCardsLinks from "./cards";
import About from "./about";
import Team from "./team";
import ContactUs from "./contactUs";
import Footer from "./footer";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/agency.min.css";
// import roof from "../../assets/img/cards/roof.jpeg";
// import blueprint from "../../assets/img/cards/blueprint.jpeg";
// import walls from "../../assets/img/cards/walls.jpg";
// import floor1 from "../../assets/img/cards/floor1.jpeg";
// import bricks from "../../assets/img/cards/bricks.jpg";
// import xyz from "../../assets/img/cards/xyz.jpeg";
import btn3 from "../../assets/img/cards/btn3-generic.jpg";

function Landing() {
  const addinsCardsLinks = [
    {
      title: "Addin Form",
      caption: "Help Construction drawings and specifications.",
      picture: btn3,
    },
    {
      title: "Roof type selector",
      caption: "Type selector to specify the type of roof.",
      picture: btn3,
    },
    {
      title: "Building dimensions",
      caption: "Building horizontal outer edge of wall.",
      picture: btn3,
    },
    {
      title: "Slab",
      caption: "Use the slab checkbox for default floor.",
      picture: btn3,
    },
  ];

  return (
    <div>
      <Header />
      <Services />
      <AddinsCardsLinks addinsCardsLinks={addinsCardsLinks}></AddinsCardsLinks>
      <About />
      <Team />
      <ContactUs />
      <Footer />
    </div>
  );
}
export default Landing;
