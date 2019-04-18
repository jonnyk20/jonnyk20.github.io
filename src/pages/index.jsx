import React from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Portfolio from "../components/Portfolio"
import projects from "../data/projects.json"
library.add(fab, faEnvelope)

console.log({ projects })

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" keywords={[`gatsby`, `application`, `react`]} />
    <div className="container" style={{ marginBottom: `1.45rem` }}>
      <Portfolio />
    </div>
  </Layout>
)

export default IndexPage
