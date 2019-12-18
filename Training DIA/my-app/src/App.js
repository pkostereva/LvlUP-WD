import React from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import Welcome from "./Components/Welcome/Welcome";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";
import WhatWeDo from "./Components/WhatWeDo/WhatWeDo";
import Process from "./Components/Process/Process";
import Features from "./Components/Features/Features";
import Testimonials from "./Components/Testimonials/Testimonials";
import Results from "./Components/Results/Results";
import Contacts from "./Components/Contacts/Contacts";

function App() {
  return (
    <>
      <div class="intro column-container container background ">
        <Header />
        <Intro />
      </div>
      <Welcome />
      <WhatWeDo />
      <Process />
      <Features />
      <Testimonials />
      <Results />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
