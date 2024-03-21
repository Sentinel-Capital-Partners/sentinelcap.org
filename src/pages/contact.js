import React from "react"
import Layout from "../components/layout"
import Input from "../components/Atoms/input"
import Button from "../components/Atoms/button"
import Fade from "react-reveal/Fade"

const Contact = () => {
  return (
    <Layout>
      <Fade bottom cascade>
        <div className="max-w-7xl justify-center mx-auto mt-10 flex text-white xxs:flex-col sm:flex-row flex-wrap">
          <div className="bg-lightblack p-10 rounded-xl w-3/4 m-5">
            <h2 className="text-lg opacity-50">Get in touch</h2>
            <h1 className="text-4xl font-bold font-poppins mt-2 xxs:text-lg sm:text-2xl lg:text-4xl">
              Contact the Team
            </h1>
            <p className="text-lg mt-2 opacity-50 w-3/4 xxs:text-xs xxs:w-full sm:text-sm sm:w-3/4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
          <div className="w-1/4 overflow-hidden rounded-xl m-5 xxs:hidden sm:block"></div>
        </div>
      </Fade>
    </Layout>
  )
}

export default Contact
