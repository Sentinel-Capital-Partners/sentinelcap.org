import React from "react"
import Fade from "react-reveal/Fade"

const AboutTeamCard = ({ imgSrc, position }) => {
  return (
    <Fade bottom cascade>
      <div className="mb-0">
        <div className="w-64 h-64 object-contain relative overflow-hidden rounded-sm flex flex-col justify-end items-center">
          <img
            className="object-cover h-full w-full absolute"
            src={imgSrc}
          ></img>
        </div>
        <div className="text-white text-lg text-center mt-3">{position}</div>
      </div>
    </Fade>
  )
}

export default AboutTeamCard
