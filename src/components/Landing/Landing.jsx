import "./_landing.scss";
import Frame from "../../assets/img/frame-landing.png";
import Scroll from "../../assets/svg/scroll-text.svg";
import { useLayoutEffect } from "react";
import gsap from "gsap";

export default function Landing() {
  useLayoutEffect(() => {
    gsap.to(document.querySelector(".landing__scroll svg"), {
      rotation: "360",
      duration: 20,
      ease: "none",
      repeat: -1,
    });
  }, []);
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
        <div className="landing__scroll">
          <Scroll />
        </div>
      </div>
    </div>
  );
}
