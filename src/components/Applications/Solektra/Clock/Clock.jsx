import { useEffect } from "react";
import "./_clock.scss";
import ClockBG from "../../../../assets/img/clock.jpg";

export default function Clock() {
  useEffect(() => {
    const inc = 1000;

    function clock() {
      const date = new Date();
      const hours = ((date.getHours() + 11) % 12) + 1;
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      const hour = hours * 30;
      const minute = minutes * 6;
      const second = seconds * 6;

      document.querySelector(
        ".clock__face__hour"
      ).style.transform = `rotate(${hour}deg)`;
      document.querySelector(
        ".clock__face__minute"
      ).style.transform = `rotate(${minute}deg)`;
      document.querySelector(
        ".clock__face__second"
      ).style.transform = `rotate(${second}deg)`;
    }

    clock();
    const intervalId = setInterval(clock, inc);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clock">
      <img src={ClockBG} alt="" className="clock__bg" />
      <div className="clock__face">
        <div className="clock__face__hour"></div>
        <div className="clock__face__minute"></div>
        <div className="clock__face__second"></div>
      </div>
      <div className="clock__number">XII</div>
      <div className="clock__number">III</div>
      <div className="clock__number">VI</div>
      <div className="clock__number">IX</div>
    </div>
  );
}
