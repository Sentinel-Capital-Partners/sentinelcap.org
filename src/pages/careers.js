import React from "react"
import Fade from "react-reveal/Fade"
import Layout from "../components/layout"

const Careers = () => {
  return (
    <Layout>
      <Fade bottom cascade>
        <div className="max-w-7xl justify-center mx-auto mt-10 flex text-white xxs:flex-col sm:flex-row flex-wrap">
          <div className="bg-lightblack p-10 rounded-xl w-3/4 m-5">
            <h2 className="text-lg opacity-50">Join the Partnership</h2>
            <h1 className="text-4xl font-bold font-poppins mt-2 xxs:text-lg sm:text-2xl lg:text-4xl">
              There are no current openings, however...
            </h1>
            <p className="text-lg mt-2 opacity-50 w-3/4 xxs:text-xs xxs:w-full sm:text-sm sm:w-3/4">
              Please contact us and send us your resume and cover letter. We are
              always looking for talented individuals to join our team.
            </p>
          </div>
          <div className="w-1/4 overflow-hidden rounded-xl m-5 xxs:hidden sm:block"></div>
        </div>
      </Fade>
    </Layout>
  )
}

export default Careers
