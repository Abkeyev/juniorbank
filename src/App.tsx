import React from "react";
import {
  Header,
  Safety,
  MobileApp,
  PhoneCase1,
  PhoneCase2,
  Reason,
  Easy,
  HowToGet,
  About,
  AdditionalInfo,
  HelpYou,
  CardOrder,
  Footer,
} from "./components";
import { ParallaxProvider } from "react-scroll-parallax";
import "./App.css";

function App() {
  return (
    <div className="root">
      <ParallaxProvider>
        <Header />
        <Safety />
        <PhoneCase1 />
        <MobileApp />
        <PhoneCase2 />
        <Reason />
        <Easy />
        <HowToGet />
        {/* <About /> */}
        <CardOrder />
        <AdditionalInfo />
        <HelpYou />
        <Footer />
      </ParallaxProvider>
    </div>
  );
}

export default App;
