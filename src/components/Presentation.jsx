import React from "react"
// import Image from "../Image"

const isNil = str => !str || str === ""

const Presentation = ({ project }) => (
  <div className="project">
    <div className="project__image">
      <img src={project.image_url} alt="pone of my projects" />
    </div>
    <div className="project__info">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project__badge-container">
        <a href={project.project_url}>
          <div className="badge">Take a look</div>
        </a>
        {!isNil(project.code_url) && (
          <a href={project.code_url}>
            <div className="badge">See the Code</div>
          </a>
        )}
      </div>
    </div>
  </div>
)

export default Presentation
