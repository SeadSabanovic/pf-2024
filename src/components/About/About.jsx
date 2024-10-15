import "./_about.scss";

export default function About() {
  return (
    <div className="about main-wrap">
      <div className="about__inner">
        <h2 className="about__title">OUTRO</h2>
        <div className="about__section">
          <p>
            Over four years ago, what started as a curiosity in the digital
            world quickly became an obsession. The idea that code could
            transform into vibrant, interactive experiences fascinated me.
          </p>
          <p>
            Throughout my career, I've had the opportunity to work with diverse
            organizations, adapting to a wide array of technologies and
            contributing to the development Micro Frontends and large-scale web
            applications.
          </p>
          <p>
            I'm exploring the world of design and learning how to push the
            design and learn how to push the boundaries of web development even
            further by blending aesthetics with functionality.
          </p>
          <p className="about__links">
            <p>
              Feel free to reach out and connect with me on{" "}
              <a
                href="https://www.linkedin.com/in/ssabanovic/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              , check out my{" "}
              <a
                href="https://github.com/SeadSabanovic"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              , or send me an{" "}
              <a href="mailto:sead.sabanovic97@gmail.com">email</a>.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}
