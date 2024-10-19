import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./_applications.scss";
import Germany from "./Germany/Germany";
import Solektra from "./Solektra/Solektra";

export default function Applications() {
  const dotsRef = useRef(null);

  useEffect(() => {
    const dots = Array.from(dotsRef.current.children);
    
    gsap.set(dots, { opacity: 0 });

    const tl = gsap.timeline({ repeat: -1 });

    dots.forEach((dot, index) => {
      tl.to(dot, { opacity: 1, duration: 0.2 }, index * 0.2)
        .to(dot, { opacity: 0, duration: 0.2 }, `>0.2`);
    });
  }, []);

  return (
    <div className="applications">
      <Solektra />
      <Germany />
      <h5 className="applications__more">
        and much more
        <span ref={dotsRef}>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </span>
      </h5>
    </div>
  );
}
