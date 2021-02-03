import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemon } from "../../modules/actions"

import {
  PokemonCard,
  PokemonImage,
  PokemonTitle,
  PokemonNumber,
  PokemonTypeStyled,
  PokemonContent,
  ImageCanvas,
  CirlceBg,
} from "./styled"

export default (props) => {
  const pokemonDetail = useSelector((state) => state.data)
  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(getPokemon(props.id, props.name))
    // console.log(pokemonDetail)
  }, [])

  const padLeadingZeros = (num, size) => {
    var s = num + ""
    while (s.length < size) s = "0" + s
    return s
  }

  return (
    <PokemonCard className="swing">
      <ImageCanvas className="img-canvas">
        <CirlceBg className="circle-bg" />
        <PokemonImage
          className="pokemon-image"
          img={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padLeadingZeros(
            props.id + 1,
            3
          )}.png`}
        />
      </ImageCanvas>
      <PokemonContent>
        <PokemonNumber>#{padLeadingZeros(props.id + 1, 3)}</PokemonNumber>
        <PokemonTitle>{props.name}</PokemonTitle>
        <PokemonTypeStyled>
          <span className="grass">Grass</span>
          <span className="poison">Poison</span>
        </PokemonTypeStyled>
      </PokemonContent>
    </PokemonCard>
  )
}
