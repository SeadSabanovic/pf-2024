import "./_landing.scss";
import Roses from "../../assets/img/roses.webp";
import LinkedInIcon from "../../assets/icons/linkedin.svg";
import GitHubIcon from "../../assets/icons/github.svg";
import MailIcon from "../../assets/icons/email.svg";
import DownloadIcon from "../../assets/icons/download.svg";

export default function Landing() {
  return (
    <div className="landing">
      <div className="landing__inner">
        <img src={Roses} alt="" className="landing__bg" />
        <h1 className="landing__title">SEAD SABANOVIC</h1>
        <span className="landing__sub">FRONTEND UI DEVELOPER</span>
        <div className="landing__cta-container">
          <a href="" className="landing__cta-container__link">
            <LinkedInIcon />
          </a>
          <a href="" className="landing__cta-container__link">
            <GitHubIcon />
          </a>
          <a href="" className="landing__cta-container__link">
            <MailIcon />
          </a>
          <a href="" className="landing__cta-container__link">
            <DownloadIcon />
            <span>Curriculum Vitae</span>
          </a>
        </div>
      </div>
    </div>
  );
}
