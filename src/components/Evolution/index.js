import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

import BgGrey from "../../assets/images/body_gray_bg.png"
import { PokemonTypeStyled } from "../../components/PokeCard/styled"
import {
  EvolutionCard,
  EvolutionTitle,
  EvolutionImg,
  EvolutionPer,
  EvolutionPerTitle,
  EvolutionPerNumber,
  NextEvo,
  Row,
} from "./styled"

export default () => {
  const state = useSelector((state) => state)
  const [evoId, setEvoId] = useState([0, 1, 2])

  useEffect(() => {
    checkEvolution()
  }, [])

  const checkEvolution = () => {
    if (
      state.detail.evolution.chain.species.name &&
      state.detail.data.name === state.detail.evolution.chain.species.name
    ) {
      setEvoId([0, 1, 2])
    } else if (
      state.detail.evolution.chain.evolves_to.length > 0 &&
      state.detail.data.name ===
        state.detail.evolution.chain.evolves_to[0].species.name
    ) {
      setEvoId([-1, 0, 1])
    } else if (
      state.detail.evolution.chain.evolves_to[0].evolves_to.length > 0 &&
      state.detail.data.name ===
        state.detail.evolution.chain.evolves_to[0].evolves_to[0].species.name
    ) {
      setEvoId([-2, -1, 0])
    }
  }

  const padLeadingZeros = (num, size) => {
    var s = num + ""
    while (s.length < size) s = "0" + s
    return s
  }

  return (
    <>
      <EvolutionCard img={BgGrey}>
        <EvolutionTitle>Evolutions</EvolutionTitle>
        <Row className="row d-flex justify-content-center">
          {state.detail.evolution.chain.species.name && (
            <div className="col-4">
              <EvolutionPer>
                <EvolutionImg className="evo-img">
                  <img
                    src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${padLeadingZeros(
                      state.detail.data.id + evoId[0],
                      3
                    )}.png`}
                    alt=""
                    width="95%"
                  />
                </EvolutionImg>
                <div className="row">
                  <EvolutionPerTitle>
                    {state.detail.evolution.chain.species.name}
                  </EvolutionPerTitle>
                  <EvolutionPerNumber>
                    #{padLeadingZeros(state.detail.data.id + evoId[0], 3)}
                  </EvolutionPerNumber>
                </div>
                {state.detail.data.types && (
                  <PokemonTypeStyled
                    className="row d-flex justify-content-center"
                    style={{
                      width: "90%",
                    }}
                  >
                    {state.pokemon.data[
                      state.detail.data.id + evoId[0] - 1
                    ].types.map((node, i) => (
                      <span key={i} className={`${node.type.name}`}>
                        {node.type.name}
                      </span>
                    ))}
                  </PokemonTypeStyled>
                )}
              </EvolutionPer>
              {state.detail.evolution.chain.evolves_to.length > 0 && (
                <NextEvo icon={faChevronRight} />
              )}
            </div>
          )}
          {state.detail.evolution.chain.evolves_to.length > 0 && (
            <div className="col-4">
              <EvolutionPer>
                <EvolutionImg className="evo-img">
                  <img
                    src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${padLeadingZeros(
                      state.detail.data.id + evoId[1],
                      3
                    )}.png`}
                    alt=""
                    width="95%"
                  />
                </EvolutionImg>
                <div className="row">
                  <EvolutionPerTitle>
                    {state.detail.evolution.chain.evolves_to[0].species.name}
                  </EvolutionPerTitle>
                  <EvolutionPerNumber>
                    #{padLeadingZeros(state.detail.data.id + evoId[1], 3)}
                  </EvolutionPerNumber>
                </div>
                {state.detail.data.types && (
                  <PokemonTypeStyled
                    className="row d-flex justify-content-center"
                    style={{
                      width: "90%",
                    }}
                  >
                    {state.pokemon.data[
                      state.detail.data.id + evoId[1] - 1
                    ].types.map((node, i) => (
                      <span key={i} className={`${node.type.name}`}>
                        {node.type.name}
                      </span>
                    ))}
                  </PokemonTypeStyled>
                )}
              </EvolutionPer>
              {state.detail.evolution.chain.evolves_to[0].evolves_to.length >
                0 && <NextEvo icon={faChevronRight} />}
            </div>
          )}
          {state.detail.evolution.chain.evolves_to[0].evolves_to.length > 0 && (
            <div className="col-4">
              <EvolutionPer>
                <EvolutionImg className="evo-img">
                  <img
                    src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${padLeadingZeros(
                      state.detail.data.id + evoId[2],
                      3
                    )}.png`}
                    alt=""
                    width="95%"
                  />
                </EvolutionImg>
                <div className="row">
                  <EvolutionPerTitle>
                    {
                      state.detail.evolution.chain.evolves_to[0].evolves_to[0]
                        .species.name
                    }
                  </EvolutionPerTitle>
                  <EvolutionPerNumber>
                    #{padLeadingZeros(state.detail.data.id + evoId[2], 3)}
                  </EvolutionPerNumber>
                </div>
                {state.detail.data.types && (
                  <PokemonTypeStyled
                    className="row d-flex justify-content-center"
                    style={{
                      width: "90%",
                    }}
                  >
                    {state.pokemon.data[
                      state.detail.data.id + evoId[2] - 1
                    ].types.map((node, i) => (
                      <span key={i} className={`${node.type.name}`}>
                        {node.type.name}
                      </span>
                    ))}
                  </PokemonTypeStyled>
                )}
              </EvolutionPer>
            </div>
          )}
        </Row>
      </EvolutionCard>
    </>
  )
}
