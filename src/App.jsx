import { ReactLenis } from "lenis/react";

import "./App.scss";
import About from "./components/About/About";
import Applications from "./components/Applications/Applications";
import Background from "./components/Background/Background";
import Intro from "./components/Intro/Intro";
import Landing from "./components/Landing/Landing";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Loader from "./components/Loader/Loader";

function App() {
  return (
    <ReactLenis root>
      {/* <Loader /> */}
      <div className="app">
        <Background />
        <Landing />
        <Skills />
        <Intro />
        <Work />
        <Applications />
        <About />
      </div>
    </ReactLenis>
  );
}

export default App;
