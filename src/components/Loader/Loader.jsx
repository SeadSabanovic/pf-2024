import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./_loader.scss";

export default function Loader() {
  const loaderRef = useRef(null);
  const dividerRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: "power2.inOut" },
      delay: 1.5,
      onComplete: () => {
        if (loaderRef.current) {
          loaderRef.current.remove();
        }
      },
    });

    tl.to(dividerRef.current, { height: 0 })
      .to(section1Ref.current, { width: 0 }, "-=50%")
      .to(section2Ref.current, { width: 0 }, "-=50%");

    return () => tl.kill();
  }, []);

  return (
    <div className="loader" ref={loaderRef}>
      <div className="loader__divider" ref={dividerRef}></div>
      <div className="loader__section" ref={section1Ref}></div>
      <div className="loader__section" ref={section2Ref}></div>
    </div>
  );
}
