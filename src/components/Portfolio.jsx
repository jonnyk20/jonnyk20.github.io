import React from "react"
import "./portfolio.scss"
import { projects } from "../data/projects.json"
import Project from "./Project"
import Bio from "./Bio"
import ContactCard from "./ContactCard"

const Portfolio = () => (
  <div className="portfolio">
    <Bio />
    {projects.map(project => (
      <Project key={project.title} project={project} />
    ))}
    <ContactCard />
  </div>
)

export default Portfolio

// {
//   "title": "Names Challenge",
//   "image_url": "https://s3.ca-central-1.amazonaws.com/jonnyk-misc/portfolio/names-challenge.jpg",
//   "description": "I learned Flutter in order to build myself an app to get better at remembering people's names.",
//   "project_url": "https://itunes.apple.com/us/app/names-challenge/id1450894774?ls=1&mt=8",
//   "code_url": "example url"
// },
