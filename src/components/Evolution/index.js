import React from "react"
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
  EvolutionLink,
  Row,
} from "./styled"

export default () => {
  const state = useSelector((state) => state)

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
          {state.detail.evoDetail &&
            state.detail.evoDetail.map((item, i) => (
              <EvolutionLink
                key={i}
                to={`/Detail/${item.name}`}
                className="col-4"
              >
                <EvolutionPer>
                  <EvolutionImg className="evo-img">
                    <img
                      src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${padLeadingZeros(
                        item.id,
                        3
                      )}.png`}
                      alt=""
                      width="95%"
                    />
                  </EvolutionImg>
                  <div className="row">
                    <EvolutionPerTitle>
                      {item.name}
                    </EvolutionPerTitle>
                    <EvolutionPerNumber>
                      #{padLeadingZeros(item.id, 3)}
                    </EvolutionPerNumber>
                  </div>
                  {item.types && (
                    <PokemonTypeStyled
                      className="row d-flex justify-content-center"
                      style={{
                        width: "90%",
                      }}
                    >
                      {item.types.map((node, i) => (
                        <span key={i} className={`${node.type.name}`}>
                          {node.type.name}
                        </span>
                      ))}
                    </PokemonTypeStyled>
                  )}
                </EvolutionPer>
                {i < state.detail.evoDetail.length - 1 && (
                  <NextEvo icon={faChevronRight} />
                )}
              </EvolutionLink>
            ))}
        </Row>
      </EvolutionCard>
    </>
  )
}
