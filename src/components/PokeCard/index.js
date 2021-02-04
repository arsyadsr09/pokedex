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
      dispatch(getPokemon(props.name))
    }
  }, [])

  const padLeadingZeros = (num, size) => {
    var s = num + ""
    while (s.length < size) s = "0" + s
    return s
  }

  return (
    <>
      {`${props.data.id}`.length > 3 ? (
        <></>
      ) : (
        <PokemonLink to={`/Detail/${props.name}`}>
          <PokemonCard className="swing">
            <ImageCanvas className="img-canvas">
              <CirlceBg className="circle-bg" />
              <PokemonImage
                className="pokemon-image"
                img={
                  `${props.data.id}`.length > 3
                    ? "https://pngimg.com/uploads/pokeball/pokeball_PNG21.png"
                    : `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padLeadingZeros(
                        props.data.id,
                        3
                      )}.png`
                }
              />
            </ImageCanvas>
            <PokemonContent>
              {props.data.isLoading || props.data === undefined ? (
                <>
                  <LoadingWrapper>
                    <SyncLoader size={10} color="#2f3542" />
                  </LoadingWrapper>
                </>
              ) : (
                <>
                  <PokemonNumber>
                    #{padLeadingZeros(props.data.id, 3)}
                  </PokemonNumber>
                  <PokemonTitle>{props.name}</PokemonTitle>
                  {props.data.types && (
                    <PokemonTypeStyled>
                      {props.data.types.map((node, i) => (
                        <span key={i} className={`${node.type.name}`}>
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
      )}
    </>
  )
}
