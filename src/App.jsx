import "./App.scss";
import Background from "./components/Background/Background";
import Landing from "./components/Landing/Landing";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="app">
      <Background />
      <div className="main-wrap">
        <Landing />
        <Skills />
        <div className="grid grid--3">
          <Landing />
          <Landing />
          <Landing />
        </div>
        <div className="grid grid--2">
          <Landing />
          <Landing />
        </div>
      </div>
    </div>
  );
}

export default App;
