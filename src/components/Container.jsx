import React from "react";
import "./container.css";
import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer/Footer";
import { About } from "./About/About";
import { Contact } from "./Contact/Contact.jsx";
import { Projects } from "./Projects/Projects.jsx";
import { Studies } from "./Studies/Studies.jsx";
import { Skills } from "./Skills/Skills.jsx";
import { Banner } from "./Banner/Banner.jsx";
export const Container = () => {
  return (
    <div className="container">
      <Navbar />
      <Banner />
      <About />
      <Projects />
      <Studies />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};
