import audibleAtmosphereLogo from "../assets/images/AudibleAtmosphere.png";
import whadayaPreview from "../assets/images/Whadaya-Preview.png";
import placeholder from "../assets/images/placeholder-300.png";
import {Link} from "react-router-dom";

export default function AboutMe(){
  return(
    <div className="container">
      <div className="text-center">
        <h1>My Projects</h1>
      </div>

      <div className="grid gap-5 project-container">
        <div>
          <Link to="https://github.com/provardjake/Audible-Atmosphere" style={{textDecoration: "none", color: "inherit"}} target="_blank">
            <h3><span className="span-audible-atmosphere">Audible </span>Atmosphere<span>.</span></h3>
          </Link>

          <Link to="https://provardjake.github.io/Audible-Atmosphere/index.html" target="_blank">
            <img src={audibleAtmosphereLogo} className="img-border" width="300"></img>
          </Link>
        </div>

        <div>
          <Link to="https://github.com/provardjake/Whadaya" style={{textDecoration: "none", color: "inherit"}} target="_blank">
            <h3 className="animate-character">Whadaya</h3>
          </Link>
          
          <Link to="https://whadaya-production.up.railway.app/" target="_blank">
            <img src={whadayaPreview} className="img-border" height="300"></img>
          </Link>
        </div>

        <div>
          <h3>Project 3</h3>
          <img src={placeholder} className="img-border"></img>
        </div>

        <div>
          <h3>Project 4</h3>
          <img src={placeholder} className="img-border"></img>
        </div>

        <div>
          <h3>Project 5</h3>
          <img src={placeholder} className="img-border"></img>
        </div>

        <div>
          <h3>Project 6</h3>
          <img src={placeholder} className="img-border"></img>
        </div>
      </div>

    </div>
  )
}