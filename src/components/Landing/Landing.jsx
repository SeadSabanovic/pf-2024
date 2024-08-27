import "./_landing.scss";
import Roses from "../../assets/img/roses.jpeg";

export default function Landing() {
  return (
    <div className="landing">
      <div className="landing__inner">
        <img src={Roses} alt="" className="landing__bg" />
        <h1 className="landing__title">SEAD SABANOVIC</h1>
        <span className="landing__sub">FRONTEND UI DEVELOPER</span>
      </div>
    </div>
  );
}
