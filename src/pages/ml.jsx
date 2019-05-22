import React, { Component } from "react"
class ML extends Component {
  componentDidMount() {
    window.location.replace("/intro-to-ml.pdf")
  }
  render() {
    return <div>Redirecting to slides</div>
  }
}

export default ML
