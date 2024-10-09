import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./_prev.scss";
import PrevImg from "../../../assets/img/eu.svg";

export default function Prev() {
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;

    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      gsap.to(img, {
        x: (x - 0.5) * 70,
        y: (y - 0.5) * 70,
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="prev">
      <PrevImg className="prev__img" ref={imgRef} />
    </div>
  );
}
