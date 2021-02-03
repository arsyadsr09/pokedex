import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SyncLoader } from "react-spinners"
import { getPokemon } from "../../modules/pokemon/action"

import {
  PokemonCard,
  PokemonImage,
  PokemonTitle,
  PokemonNumber,
  PokemonTypeStyled,
  PokemonContent,
  ImageCanvas,
  CirlceBg,
  LoadingWrapper,
  PokemonLink,
} from "./styled"

export default (props) => {
  const statePokemon = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!props.data.id) {
      dispatch(getPokemon(props.id, props.name))
    }
    console.log(statePokemon)
  }, [])

  const padLeadingZeros = (num, size) => {
    var s = num + ""
    while (s.length < size) s = "0" + s
    return s
  }

  return (
    <PokemonLink to={`/Detail/${props.id}`}>
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
          {props.data.isLoading || props.data == undefined ? (
            <>
              <LoadingWrapper>
                <SyncLoader size={5} color="#2f3542" />
              </LoadingWrapper>
            </>
          ) : (
            <>
              <PokemonNumber>#{padLeadingZeros(props.id + 1, 3)}</PokemonNumber>
              <PokemonTitle>{props.name}</PokemonTitle>
              {props.data.types && (
                <PokemonTypeStyled>
                  {props.data.types.map((node) => (
                    <span className={`${node.type.name}`}>
                      {node.type.name}
                    </span>
                  ))}
                </PokemonTypeStyled>
              )}
            </>
          )}
        </PokemonContent>
      </PokemonCard>
    </PokemonLink>
  )
}
