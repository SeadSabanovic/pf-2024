import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./_background.scss";

export default function Background() {
  const thirdShapeRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      console.log(e);
      gsap.to(thirdShapeRef.current, {
        duration: 1,
        x: e.clientX,
        y: e.clientY,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    // New animation for rotation, border radius, and color change
    gsap.to(thirdShapeRef.current, {
      rotation: 360,
      borderRadius: "50%",
      backgroundColor: ["#B1D690", "#C4E1F6", "#FFE3E3", "#FFE6A5"],
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="background">
      <div className="background__shape" />
      <div className="background__shape" />
      <div className="background__shape" ref={thirdShapeRef} />
    </div>
  );
}
