import React from "react"
import Layout from "../components/layout"
import Fade from "react-reveal/Fade"
import PricingHeader from "../components/Pricing/pricingHeader"
//import PricingFAQ from "../components/Pricing/pricingFAQ"
//import PricingCTA from "../components/Pricing/pricingCTA"
import AboutGrid from "../components/about/aboutGrid"

const Team = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto mt-6 font-poppins text-white flex flex-col items-center">
        <Fade bottom>
          <h1 className="text-white text-6xl font-bold m-5 xxs:text-xl sm:text-4xl lg:text-6xl">
            Our Team
          </h1>
          <h2 className="text-white opacity-50 text-center xxs:text-sm sm:text-lg">
            General Partners of Lambda Capital
          </h2>
        </Fade>
      </div>
      <AboutGrid></AboutGrid>
      <div className="mt-10"></div>
    </Layout>
  )
}

export default Team
