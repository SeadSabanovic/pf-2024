import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./_prev.scss";
import PrevImg from "../../../assets/img/eu.svg";
import { ExpoScaleEase } from "gsap/all";

export default function Prev() {
  const prevRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const prevElement = prevRef.current;
    const img = imgRef.current;

    let isHovering = false;

    const animation = gsap.to(img, {
      scale: 4,
      top: "-60%",
      left: "10%",
      ease: ExpoScaleEase.config(1, 4),
      paused: true,
      duration: 0.3,
    });

    const handleMouseMove = (e) => {
      const { left, top, width, height } = prevElement.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      if (x >= 0 && x <= 1 && y >= 0 && y <= 1) {
        if (!isHovering) {
          isHovering = true;
          animation.play();
        }

        gsap.to(img, {
          x: (x - 0.5) * 70,
          y: (y - 0.5) * 70,
          duration: 0.3,
          ease: "expoScale(0.5,7,none)",
        });
      } else {
        if (isHovering) {
          isHovering = false;
          animation.reverse();
        }
      }
    };

    prevElement.addEventListener("mousemove", handleMouseMove);
    prevElement.addEventListener("mouseleave", () => {
      isHovering = false;
      animation.reverse();
      gsap.to(img, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    return () => {
      prevElement.removeEventListener("mousemove", handleMouseMove);
      prevElement.removeEventListener("mouseleave", () => {});
    };
  }, []);

  return (
    <div className="prev" ref={prevRef}>
      <PrevImg className="prev__img" ref={imgRef} />
    </div>
  );
}
