import React from "react"
import { useDispatch, useSelector } from "react-redux"
import Logo from "../assets/images/logo.png"
import { Link } from "react-router-dom"
import { NavbarStyled } from "./styled"
import { getPokemonList, resetPokemonList } from "../modules/pokemon/action"

export default () => {
  const statePokemon = useSelector((state) => state.pokemon)
  const dispatch = useDispatch()

  const onLogoClick = () => {
    dispatch(resetPokemonList())
    dispatch(getPokemonList())
  }

  return (
    <NavbarStyled>
      <Link onClick={onLogoClick} to="/">
        <img src={Logo} width={250} alt="logo" />
      </Link>
    </NavbarStyled>
  )
}
