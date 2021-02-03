import React from "react"

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
  return (
    <PokemonCard className="swing">
      <ImageCanvas className="img-canvas">
        <CirlceBg className="circle-bg" />
        <PokemonImage
          className="pokemon-image"
          img={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/205.png`}
        />
      </ImageCanvas>
      <PokemonContent>
        <PokemonNumber>#001</PokemonNumber>
        <PokemonTitle>Ditto</PokemonTitle>
        <PokemonTypeStyled>
          <span className="grass">Grass</span>
          <span className="poison">Poison</span>
        </PokemonTypeStyled>
      </PokemonContent>
    </PokemonCard>
  )
}
