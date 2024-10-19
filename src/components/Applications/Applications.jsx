import "./_applications.scss";
import Germany from "./Germany/Germany";
import Solektra from "./Solektra/Solektra";

export default function Applications() {
  return (
    <div className="applications">
      <Solektra />
      <Germany />
      <h5 className="applications__more">and many more...</h5>
    </div>
  );
}
