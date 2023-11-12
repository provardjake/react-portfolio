import resume from "../assets/Resume/Jake_Provard_Resume.pdf";

export default function Resume(){
  return(
      <div className="container text-center">
        <h1>My Skills: </h1>

        <ul className="list-group mt-5">
          <li className="list-group-item fs-5">JavaScript</li>
          <li className="list-group-item fs-5">HTML</li>
          <li className="list-group-item fs-5">CSS</li>
          <li className="list-group-item fs-5">Node.js</li>
          <li className="list-group-item fs-5">Express.js</li>
          <li className="list-group-item fs-5">SQL</li>
          <li className="list-group-item fs-5">MongoDB</li>
          <li className="list-group-item fs-5">React.js</li>
        </ul>

        <a href={resume} download="Jake_Provard_Resume" target="blank_">
          <button className="mt-4">Download Resume</button>
        </a>
      </div>
  )
}