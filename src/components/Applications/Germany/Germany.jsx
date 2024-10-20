import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./_germany.scss";
import { PROJECTS } from "./contants";

gsap.registerPlugin(ScrollTrigger);

export default function Germany() {
  const bgRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const initAnimation = () => {
      const projects = gsap.utils.toArray(projectsRef.current.children);

      projects.forEach((project, _) => {
        gsap.from(project, {
          y: 100,
          opacity: 0,
          scale: 0.9,
          scrollTrigger: {
            trigger: project,
            start: "center bottom",
            end: "top center",
            scrub: true,
          },
        });
      });

      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".germany",
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });
    };

    initAnimation();

    const resizeObserver = new ResizeObserver(() => {
      ScrollTrigger.refresh();
    });
    resizeObserver.observe(document.body);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="germany">
      <div className="germany__img-container">
        <img
          ref={bgRef}
          className="germany__image"
          src="https://www.mayfairgallery.com/media/catalog/product/1/7/17357-large-pair-baroque-style-floral-still-life-oil-paintings-6-2000x.jpg"
        />
      </div>
      <div className="main-wrap">
        <h3 className="germany__title">BMW</h3>
        <p className="germany__description">
          The following projects were developed using a combination of{" "}
          <span>Angular</span> and <span>SharePoint</span>.
        </p>
        <div className="germany__projects" ref={projectsRef}>
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="germany__project"
              style={{ zIndex: index + 1 }}
            >
              <h4 className="germany__project__title">{project.title}</h4>
              <p className="germany__project__description">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
