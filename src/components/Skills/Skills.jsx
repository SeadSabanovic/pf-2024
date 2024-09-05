import "./_skills.scss";
import { SKILLS } from "./constants";

export default function Skills() {
  return (
    <div className="skills">
      <div className="skills__inner">
        <div className="skills__container">
          {SKILLS.map((skill, index) => (
            <span className="skills__skill" key={index}>
              {skill}
              <span className="star">&#x002A;</span>
            </span>
          ))}
        </div>
        <div className="skills__container">
          {SKILLS.map((skill, index) => (
            <span className="skills__skill" key={index}>
              {skill}
              <span className="star">&#x002A;</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
