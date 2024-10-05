import gsap from "gsap";
import "./_yuh.scss";
import { useEffect, useRef } from "react";

export default function Yuh() {
  const yuhRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      document.querySelector(".yuh"),
      {
        background:
          "conic-gradient(from 0deg at 50% 50%, #ccb1da 0%, #71C4FFFF 100%)",
      },
      {
        background:
          "conic-gradient(from 360deg at 50% 50%, #ccb1da 0%, #71C4FFFF 100%)",
        ease: "power1.out",
        duration: 10,
        repeat: -1,
        yoyo: true,
      }
    );
  }, []);

  return <div className="yuh" ref={yuhRef}></div>;
}
