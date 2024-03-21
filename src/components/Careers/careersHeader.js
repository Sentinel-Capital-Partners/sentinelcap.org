import React from "react"
import Fade from "react-reveal/Fade"

const CareersHeader = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <Fade bottom cascade>
        <div className="flex justify-center">
          <div className="w-2/3 m-2 text-white bg-lightblack p-8 rounded-xl">
            <h2 className="text-lg opacity-50 font-semibold">Positions</h2>
            <h1 className="text-4xl font-bold">
              We are not currently recruiting, <br></br> however...
            </h1>
            <p className="mt-5 opacity-70 text-lg">
              Please feel free to reach out to us at{" "}
              <a href="mailto:recruiting@lmbdcapital.org" /> and send us your
              resume and cover letter. We are always looking for talented
              individuals to join our team.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default CareersHeader
