import "./intro.css";
import Me from "../../img/me.png";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "reactstrap";
const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello,My name is</h2>
          <h1 className="i-name">Piyush Ghosh</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Designer</div>
              <div className="i-title-item">Programmer</div>
              <div className="i-title-item">Blogger</div>
            </div>
          </div>
          <p className="i-desc">
            design and develop services for customers of all sizes, specializing
            in creating stylish, modern websites, web services and online
            stores.
          </p>
          <div className="btnss">
            <a href="piyushGhosh_cv_Aug22.pdf" target="_blank" download>
              <Button variant="primary">Downlaod CV</Button>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/piyush-ghosh-479881193/"
            >
              <Button variant="secondary">Hire Me</Button>
            </a>
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
