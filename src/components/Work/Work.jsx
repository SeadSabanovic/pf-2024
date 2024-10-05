import { useLayoutEffect } from "react";
import "./_work.scss";
import { PROJECTS } from "./constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  useLayoutEffect(() => {
    const section = document.querySelector(".work__projects");
    const wrap = document.querySelector(".work__projects__wrap");
    const projects = document.querySelectorAll(".work__projects__project");

    const vertical = gsap.to(wrap, {
      xPercent: -100,
      x: section.getBoundingClientRect().width,
      scrollTrigger: {
        pin: wrap,
        anticipatePin: 1,
        start: "center center",
        end: `+=${wrap.getBoundingClientRect().width}`,
        trigger: wrap,
        scrub: 1,
      },
    });

    // Opacity animation for each project
    projects.forEach((project) => {
      gsap.fromTo(
        project,
        {
          opacity: 0.2,
          scale: 0.95,
        },
        {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            containerAnimation: vertical,
            trigger: project,
            start: "right 110%",
            end: "+=2",
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <div className="work">
      <div className="work__inner main-wrap">
        <div className="work__intro">
          <h2 className="work__title">WORK</h2>
          <p className="work__intro-text">
            Please note that the portfolio displayed here represents only a
            portion of my work. Due to non-disclosure agreements with certain
            clients and projects, I am unable to showcase the complete range of
            my experience.
          </p>
        </div>
        <div className="work__projects">
          <h2 className="work__projects__title">WEBSITES</h2>
          <div className="work__projects__wrap">
            {PROJECTS.map((project, index) => {
              return (
                <div className="work__projects__project" key={index}>
                  <div className="work__projects__project__details">
                    <h3 className="work__projects__project__name">
                      {project.name}
                    </h3>
                    <p className="work__projects__project__desc">
                      {project.desc}
                    </p>
                  </div>
                  <div className="work__projects__project__body">
                    {project.body && project.body}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
