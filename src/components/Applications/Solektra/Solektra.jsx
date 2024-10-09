import "./_solektra.scss";
import Clock from "./Clock/Clock";

export default function Solektra() {
  return (
    <div className="solektra">
      <div className="solektra__header">
        <h4 className="solektra__header__title">Solektra</h4>
        <p className="solektra__header__description">
          Time tracking and management
        </p>
        <Clock />
      </div>
    </div>
  );
}
