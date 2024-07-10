import React from "react"; // No need for useState anymore
import "./Header.css";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import leetcode from "../../assets/leetcode.png";
import github from "../../assets/github.png";
import kaggle from "../../assets/kaggle.png";

function Header() {
  return (
    <header>
      <div className="project-name">Digit Recognizer</div>
      <div className="header-icons">
        <a
          href="https://linkedin.com/in/naveen-sharma-871b7a257"
          target="_blank"
        >
          <img src={linkedin} alt="" width={45} height={45} />
        </a>
        <a href="https://www.kaggle.com/naveennas" target="_blank">
          <img src={kaggle} alt="" width={45} height={45} />
        </a>
        <a href="https://github.com/Naveen-NaS" target="_blank">
          <img src={github} alt="" width={45} height={45} />
        </a>
        <a href="https://leetcode.com/u/Naveen-NaS/" target="_blank">
          <img src={leetcode} alt="" width={45} height={45} />
        </a>
        <a href="https://x.com/NSharma_NaS" target="_blank">
          <img src={twitter} alt="" width={45} height={45} />
        </a>
      </div>
    </header>
  );
}

export default Header;
