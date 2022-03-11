import mainPicture from "../images/natalie.jpg";
import Envelope from "../images/littleEnvelope.png";
import About from "./About";
import Interests from "./Interests";

function Info() {
  return (
    <div className="allInfoWrapper">
      <img className="profilePicture" src={mainPicture} alt="profilePicture" />
      <div className="allText">
        <h1 className="developerName">Natalie Acevedo</h1>
        <h4 className="subTitle">Web Developer</h4>

        <a className="miWebsite" href="natalieacevedo.com">
          Personal Website
        </a>

        <button>
          <img src={Envelope} alt="litle envelope" />
          Email
        </button>
        <About />
        <Interests />
      </div>
    </div>
  );
}

export default Info;
