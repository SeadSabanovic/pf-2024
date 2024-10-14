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
            start: "center center",
            end: "bottom 20%",
            scrub: true,
          },
        });
      });

      gsap.to(bgRef.current, {
        yPercent: 10,
        ease: "none",
        scale: 1,
        filter: "grayscale(0.5)",
        scrollTrigger: {
          trigger: ".germany",
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });
    };

    initAnimation();

    // Set up ResizeObserver to refresh ScrollTrigger on height changes
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
          src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Peter_Paul_Rubens_-_Perseus_and_Andromeda_(detail)_-_WGA20305.jpg"
        />
      </div>
      <div className="main-wrap">
        <h3 className="germany__title">BMW</h3>
        <p className="germany__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          suscipit iste nostrum repellat rerum molestias a nesciunt deleniti quo
          debitis, ratione dolorem atque quis dolore tempore velit repellendus,
          voluptate quod?
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
