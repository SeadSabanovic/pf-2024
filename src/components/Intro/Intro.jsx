import "./_intro.scss";
import Statue from "../../assets/img/statue.png";
import Petals from "../../assets/img/petals.png";

export default function Intro() {
  return (
    <div className="intro">
      <div className="intro__section">
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
      </div>
      <img src={Statue} alt="" className="intro__statue" />
      <img src={Petals} alt="" className="intro__petals intro__petals--1" />
      <img src={Petals} alt="" className="intro__petals intro__petals--2" />
    </div>
  );
}
