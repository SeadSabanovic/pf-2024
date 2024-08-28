import "./_about.scss";

export default function About() {
  return (
    <div className="about">
      <h2 className="about__title">ABOUT</h2>
      <div className="about__content">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At, inventore
          ad? Tenetur consequatur animi deserunt nemo beatae voluptate ea
          possimus quisquam voluptatem vero, aspernatur repellat molestias
          itaque cum harum modi? Qui provident maxime suscipit! Qui illo
          consequuntur, amet facere odit quia, minima ipsam veritatis, quod
          beatae at impedit tempora voluptatum provident quasi possimus nulla
        </span>
        <span className="about__expand-img"></span>
        <span>
          Lorem ipsum <br />
          dolor sit amet consectetur adipisicing elit. At, inventore ad? Tenetur
          consequatur animi deserunt nemo beatae voluptate ea possimus quisquam
          voluptatem vero, aspernatur repellat molestias itaque cum harum modi?
          Qui provident maxime suscipit! Qui illo consequuntur, amet facere odit
          quia, minima ipsam veritatis, quod beatae at impedit tempora
          voluptatum provident quasi possimus nulla
        </span>
      </div>
    </div>
  );
}
