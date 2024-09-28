import "./_stratos.scss";
import Star from "../../../assets/svg/star-1.svg";
import Space from "../../../assets/img/space.gif";

export default function Stratos() {
  return (
    <div className="stratos">
      <Star />
      <Star />
      <div className="stratos__inner">
        <img src={Space} alt="" className="stratos__gif" />
      </div>
    </div>
  );
}
