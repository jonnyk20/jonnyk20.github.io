import React from "react"
// import Image from "./Image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const color = "#1f96f3"
const size = "3x"

const ContactCard = () => (
  <div className="contact-card">
    <h3>Get in touch!</h3>

    <div className="contact-card__contacts-container">
      <a href="https://github.com/jonnyk20">
        <div className="social-icon">
          <FontAwesomeIcon icon={["fab", "apple"]} color={color} size={size} />
        </div>
      </a>
      <a href="https://www.linkedin.com/in/jonnykalambay/">
        <div className="social-icon">
          <FontAwesomeIcon
            icon={["fab", "linkedin"]}
            color={color}
            size={size}
          />
        </div>
      </a>
      <a href="https://medium.com/@jonnykalambay">
        <div className="social-icon">
          <FontAwesomeIcon icon={["fab", "medium"]} color={color} size={size} />
        </div>
      </a>
      <a href="https://www.youtube.com/channel/UCUm0chMKj4MA7q9CWZXWhiA">
        <div className="social-icon">
          <FontAwesomeIcon
            icon={["fab", "youtube"]}
            color={color}
            size={size}
          />
        </div>
      </a>
      <a href="http://instagram.com/jonnykalambay">
        <div className="social-icon">
          <FontAwesomeIcon
            icon={["fab", "instagram"]}
            color={color}
            size={size}
          />
        </div>
      </a>
      <a href="mailto:jonnyk_78@hotmail.com">
        <div className="social-icon">
          <FontAwesomeIcon icon="envelope" color={color} size={size} />
        </div>
      </a>
    </div>
  </div>
)

export default ContactCard
