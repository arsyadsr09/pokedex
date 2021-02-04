import React from "react"
import Logo from "../assets/images/logo.png"
import { Link } from "react-router-dom"
import { NavbarStyled } from "./styled"

export default () => (
  <NavbarStyled>
    <Link to="/">
      <img src={Logo} width={250} alt="logo" />
    </Link>
  </NavbarStyled>
)
