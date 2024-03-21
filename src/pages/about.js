import React from "react"
import AboutGrid from "../components/about/aboutGrid"
import AboutHeader from "../components/about/aboutHeader"
import AboutMore from "../components/about/aboutMore"
import AboutTeamBigCard from "../components/about/aboutTeamBigCard"
import AboutTeamBigCardRight from "../components/about/aboutTeamBigCardRight"

import Layout from "../components/layout"

const About = () => {
  return (
    <Layout>
      <AboutHeader></AboutHeader>
      <AboutTeamBigCardRight></AboutTeamBigCardRight>
      <AboutMore></AboutMore>
      <AboutTeamBigCard></AboutTeamBigCard>
    </Layout>
  )
}

export default About
