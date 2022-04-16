import React from "react";
import "./container.css";
import { useState } from "react";
import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer/Footer";
import { About } from "./About/About";
import { Contact } from "./Contact/Contact.jsx";
import { Projects } from "./Projects/Projects.jsx";
import { Studies } from "./Studies/Studies.jsx";
import { Skills } from "./Skills/Skills.jsx";
import { Banner } from "./Banner/Banner.jsx";
export const Container = () => {
  const [english, setEnglish] = useState(true);
  return (
    <div className="container">
      <Navbar english={english} setEnglish={setEnglish} />
      <Banner english={english} />
      <About english={english} />
      <Projects english={english} />
      <Studies english={english} />
      <Skills english={english} />
      <Contact english={english} />
      <Footer english={english} />
    </div>
  );
};
