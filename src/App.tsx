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
  AdditionalInfo,
  HelpYou,
  FixedHeader,
  Footer,
} from "./components";
import { ParallaxProvider } from "react-scroll-parallax";
import "./App.css";
import { animateScroll } from "react-scroll";

function App() {
  const orderRef: any = React.useRef(null);

  const scrollToOrderRef = () => {
    animateScroll.scrollTo(orderRef.current.offsetTop);
  };
  return (
    <div className="root">
      <ParallaxProvider>
        <Header scrollToOrder={scrollToOrderRef} />
        <FixedHeader scrollToOrder={scrollToOrderRef} />
        <Safety />
        <PhoneCase1 />
        <MobileApp />
        <PhoneCase2 />
        <Reason />
        <Easy />
        <HowToGet refProp={orderRef} />
        <AdditionalInfo />
        <HelpYou />
        <Footer />
      </ParallaxProvider>
    </div>
  );
}

export default App;
