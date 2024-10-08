import "./App.scss";
import About from "./components/About/About";
import Applications from "./components/Applications/Applications";
import Background from "./components/Background/Background";
import Intro from "./components/Intro/Intro";
import Landing from "./components/Landing/Landing";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";

function App() {
  return (
    <div className="app">
      <Background />
      <Landing />
      <Skills />
      <Intro />
      <Work />
      <Applications />
      <div className="main-wrap">
        <About />
      </div>
    </div>
  );
}

export default App;
