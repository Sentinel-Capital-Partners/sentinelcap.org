import { Link } from "gatsby"
import React from "react"
import Logo from "../images/sentinel-capital.svg"

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto p-10 mt-10 bg-lightblack rounded-xl">
      <div className="flex">
        <div>
          <Link to="/">
            <img className="h-12 w-12" src={Logo} alt="Logo" />
          </Link>
          <p className="text-white text-sm mt-0 opacity-50">
            Sentinel Capital Partners is a registered General Partnership in
            accordance with the laws of the State of Pennsylvania. The
            Partnership is NOT registered as an investment advisor with the U.S.
            Securities and Exchange Commission thus the Partnership does not
            provide legal or tax advice, and recommends that you consult with
            your attorney, accountant, and other professional advisors before
            making any investment or legal decisions.
          </p>
          <h1 className="text-white text-lg mt-2 ">
            © copyright{" "}
            <a href="https://lmbdcapital.org/">
              Sentinel Capital Partners {new Date().getFullYear()}
            </a>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Footer
