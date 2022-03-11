import github from "../images/gitHubIcon.png";
import linkedin from "../images/linkedinIcon.png";
import twitterIcon from "../images/twitterIcon.png";

function Footer() {
  return (
    <footer className="footerContainer">
      <img src={github} alt="github logo" />
      <img src={linkedin} alt="linkedin logo" />
      <img src={twitterIcon} alt="twitter logo" />
    </footer>
  );
}

export default Footer;
