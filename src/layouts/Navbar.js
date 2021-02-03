import React from "react"
import styled from "styled-components"
import Logo from "../assets/images/logo.png"
import { Link } from "react-router-dom"

const NavbarStyled = styled.div`
  padding: 1rem;
  margin: auto 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
`

export default () => (
  <NavbarStyled>
    <Link to="/">
      <img src={Logo} width={250} alt="logo" />
    </Link>
  </NavbarStyled>
)
