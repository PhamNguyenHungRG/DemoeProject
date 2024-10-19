import { Link } from "react-router-dom";
import TopHeader from "./TopHeader";
import BodyHeader from "./BodyHeader";

function Header() {
  return (
    <div>
      <TopHeader/>
      <BodyHeader/>
    </div>
  );
}

export default Header;
