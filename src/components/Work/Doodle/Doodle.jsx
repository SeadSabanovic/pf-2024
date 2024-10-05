import "./_doodle.scss";
import Pearl from "../../../assets/img/pearl.png";
import { useEffect } from "react";
import gsap from "gsap";

export default function Doodle() {
  useEffect(() => {
    const pupils = document.querySelectorAll(".doodle__eye");

    const handleMouseMove = (e) => {
      pupils.forEach((pupil) => {
        const rect = pupil.getBoundingClientRect();
        // Calculate x relative to the center of the pupil
        let x = (e.clientX - (rect.left + rect.width / 2)) / 100;
        // Calculate y using e.clientY relative to the center of the pupil
        let y = (e.clientY - (rect.top + rect.height / 2)) / 100;

        x = Math.max(-2, Math.min(4, x)) + "px";
        y = Math.max(-1, Math.min(1, y)) + "px";

        gsap.to(pupil, {
          x,
          y,
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="doodle">
      <img src={Pearl} alt="" className="doodle__pearl" />
      <div className="doodle__eye"></div>
      <div className="doodle__eye"></div>
    </div>
  );
}
