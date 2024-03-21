import React from "react"
import Fade from "react-reveal/Fade"

const AboutMore = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <Fade bottom cascade>
        <div className="flex h-full overflow-hidden justify-center">
          <div className="w-full overflow-hidden rounded-xl">
            <img
              className="object-cover h-96 w-full"
              src="https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2890&q=80"
            ></img>
          </div>
        </div>
      </Fade>
      <div className="flex">
        <p className="text-white text-3xl leading-normal mt-10 xxs:col-start-1 sm:col-start-3 xxs:text-sm xs:text-lg sm:text-3xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
    </div>
  )
}

export default AboutMore
