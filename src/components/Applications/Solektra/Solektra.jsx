import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./_solektra.scss";
import Clock from "./Clock/Clock";
import Text1 from "../../../assets/svg/solektra-text-1.svg";
import Text2 from "../../../assets/svg/solektra-text-2.svg";

gsap.registerPlugin(ScrollTrigger);

export default function Solektra() {
  const headerRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const text1 = text1Ref.current;
    const text2 = text2Ref.current;

    gsap.to(header, {
      filter: "grayscale(100%)",
      opacity: 0.1,
      y: 1300,
      rotate: -90,
      scale: 0.8,
      scrollTrigger: {
        trigger: header,
        start: "top 20%",
        end: "bottom+=1300 30%",
        scrub: 3,
      },
    });

    // Text animations
    gsap.from(text1, {
      rotate: 20,
      scrollTrigger: {
        trigger: text1,
        start: "top bottom",
        end: "bottom+=500 30%",
        scrub: 2,
      },
    });

    gsap.fromTo(
      text2,
      { rotate: 140 },
      {
        rotate: 0,
        scrollTrigger: {
          trigger: text2,
          start: "top bottom",
          end: "bottom+=500 30%",
          scrub: 3,
        },
      }
    );

    // Image container animations
    const imgContainers = document.querySelectorAll(
      ".solektra__content__img-container"
    );

    // Animation for all image containers
    imgContainers.forEach((container) => {
      gsap.fromTo(
        container,
        {
          height: 0,
          y: 0,
          width: "0%",
          autoAlpha: 0.56,
        },
        {
          autoAlpha: 1,
          height: 200,
          y: 50,
          width: "70%",
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "top+=300 center",
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <div className="solektra">
      <div className="solektra__header" ref={headerRef}>
        <Clock />
        <Text1
          className="solektra__header__text solektra__header__text--1"
          ref={text1Ref}
        />
        <Text2
          className="solektra__header__text solektra__header__text--2"
          ref={text2Ref}
        />
      </div>
      <div className="solektra__content main-wrap">
        <div className="solektra__content__img-container">
          <img
            src="https://romanpagan.wordpress.com/wp-content/uploads/2016/01/apollocedini.jpg"
            alt="Solektra"
            className="solektra__content__img"
          />
        </div>
        <p>
          The app for Solektra, a Croatian company specializing in solar energy
          solutions - is role-based, with two key roles: worker and accountant.
          <br />
          <br />
          Workers can only view and enter their own work hours, while
          accountants have access to view and approve all employees' hours. They
          also handle payroll, review analytics for three sister companies, and
          manage payroll calculations.
        </p>
        <div className="solektra__content__img-container ml">
          <img
            src="https://media.meer.com/attachments/37974a81dd47d4b7afcfa0c7a3fbb19e3fe1f5da/store/fill/860/645/2307aed37890e359c738012b5353408ca03d3c6177af789abd425a534cbb/Salvador-Dali-The-Persistence-of-Memory.jpg"
            alt="Solektra"
            className="solektra__content__img"
          />
        </div>
        <p>
          The app is built using <span>React</span>, incorporating{" "}
          <span>React Hook Form</span> for form handling and <span>Framer</span>{" "}
          for animations. The <span>Context API</span> manages the state, and
          the entire UI was custom-designed for the client to ensure a tailored
          experience.
        </p>
      </div>
    </div>
  );
}
