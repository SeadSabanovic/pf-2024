import "./_applications.scss";
import Solektra from "./Solektra/Solektra";

export default function Applications() {
  return (
    <div className="applications">
      <div className="main-wrap">
        <h2 className="applications__title">Apps</h2>
      </div>
      <Solektra />
    </div>
  );
}
