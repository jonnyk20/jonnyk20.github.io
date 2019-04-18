import React from "react"
import Image from "./Image"

const Bio = () => (
  <div className="bio">
    <div className="bio__image">
      <img
        class="img-fluid"
        src="https://s3.ca-central-1.amazonaws.com/jonnyk-misc/portfolio/profile.jpg"
        alt="bio image"
      />
    </div>
    <div className="bio__info">
      <p>
        I'm a web developer with a passion for technology and cultures. I also
        make tutorials on Medium and Youtube. When I'm not coding, I enjoy
        studying languages, being in nature and taking care of my pet turtle
        Roshi. Check out some of my projects below!
      </p>
    </div>
  </div>
)

export default Bio
