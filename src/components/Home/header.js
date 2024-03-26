import React from "react"
import Fade from "react-reveal/Fade"

const Header = () => {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <Fade>
        <div>
          <h2 className="text-white font-poppins opacity-50 font-semibold mt-6 text-lg xxs:text-md xs:text-md sm:text-lg md:text-xl lg:text-2xl">
            Wharton's premier student-run investment partnership
          </h2>

          <h1 className="text-white font-poppins font-semibold text-2xl xxs:text-2xl xs:text-3xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-5xl 2xl:text-6xl">
            <span class="text-5xl text-gradient bg-gradient-to-r from-pink to-purple">
              SENTINEL CAPITAL PARTNERS
            </span>
            <br></br>
            Shaping financial frontiers with disruptive innovation
          </h1>
        </div>
      </Fade>
    </div>
  )
}

export default Header
