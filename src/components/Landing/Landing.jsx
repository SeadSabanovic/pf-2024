import "./_landing.scss";
import Frame from "../../assets/img/frame-landing.png";

export default function Landing() {
  return (
    <div className="landing">
      <img src={Frame} alt="" className="landing__frame" />
      <div className="landing__inner">
        <h1 className="landing__title">
          S&#x00C8;AD
          <br />
          SABANOV&#x00CD;C
        </h1>
        <p className="landing__sub">I DEVELOP FROM THE FRONT</p>
      </div>
    </div>
  );
}
