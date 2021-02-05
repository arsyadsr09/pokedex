import React, { useState } from "react"
import { faBalanceScale, faTimes } from "@fortawesome/free-solid-svg-icons"
import axios from "axios"
import { SyncLoader } from "react-spinners"
import { API_URL } from "../../configs"

import { LoadingWrapper } from "../../pages/Home/styled"

import {
  CompareButton,
  InnerCompareButton,
  CompareIcon,
  CompareCanvas,
  CompareTitle,
  Row,
  Divider,
  HeaderStyled,
  ImageLeftCanvas,
  ImageRightCanvas,
  TitleLeftStyled,
  NumberLeftStyled,
  TitleRightStyled,
  NumberRightStyled,
  LabelCompare,
  LoseValueCompare,
  WinValueCompare,
  CompareVersus,
  CompareTypeStyled,
  BtnExecute,
} from "./styled"

export default () => {
  const [show, setShow] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [firstPokemon, setFirstPokemon] = useState(undefined)
  const [secondPokemon, setSecondPokemon] = useState(undefined)
  const [firstPokemonController, setFirstPokemonController] = useState("")
  const [secondPokemonController, setSecondPokemonController] = useState("")
  let [firstPokemonPoint, setFirstPokemonPoint] = useState(1)
  let [secondPokemonPoint, setSecondPokemonPoint] = useState(1)

  const getPokemonDetail = async (value) => {
    try {
      const pokemon = await axios.get(`${API_URL}/pokemon/${value}`)
      return pokemon.data
    } catch (e) {
      console.log(e)
    }
  }

  const onExecute = async () => {
    setIsLoading(true)
    try {
      const firstPokemonData = await getPokemonDetail(firstPokemonController)
      const secondPokemonData = await getPokemonDetail(secondPokemonController)

      setFirstPokemon(firstPokemonData)
      setSecondPokemon(secondPokemonData)

      firstPokemonData.stats.forEach((i) => {
        secondPokemonData.stats.forEach((j) => {
          if (i.stat.name === j.stat.name) {
            console.log(i.base_stat > j.base_stat)
            if (i.base_stat > j.base_stat) {
              console.log('first', i.stat.name)
              setFirstPokemonPoint(firstPokemonPoint++)
            } else if (i.base_stat < j.base_stat) {
              console.log('second', i.stat.name)
              setSecondPokemonPoint(secondPokemonPoint++)
            } else if(i.base_stat === j.base_stat) {
              console.log('both', i.stat.name)
              setFirstPokemonPoint(firstPokemonPoint++)
              setSecondPokemonPoint(secondPokemonPoint++)
            }
          }
        })
      })
    } catch (e) {
      console.log(e)
    } finally {
      setIsLoading(false)
    }
  }

  const onClose = () => {
    setShow(!show)
  }

  const padLeadingZeros = (num, size) => {
    var s = num + ""
    while (s.length < size) s = "0" + s
    return s
  }

  const convertToNameCase = (name = "") => {
    return name.split("-").join(" ")
  }

  return (
    <>
      <CompareButton className={show ? "active" : ""}>
        <InnerCompareButton onClick={onClose} className="inner-Compare">
          {!show ? (
            <CompareIcon className="compare-icon" icon={faBalanceScale} />
          ) : (
            <CompareIcon className="compare-icon" icon={faTimes} />
          )}
        </InnerCompareButton>
      </CompareButton>
      <CompareCanvas className={show ? "active" : ""}>
        <div className="content">
          <CompareTitle className="title">Compare</CompareTitle>
          {firstPokemon && secondPokemon && (
            <CompareVersus className="title">VS</CompareVersus>
          )}
          <Divider />
          <Row className="row">
            <div className="col-5">
              <input
                type="text"
                className="form-control"
                id="first_pokemon"
                placeholder="Name or Number Pokemon 1"
                onChange={(e) => setFirstPokemonController(e.target.value)}
              />
            </div>
            <BtnExecute
              onClick={onExecute}
              className="col-2 d-flex justify-content-center align-items-center"
            >
              Execute
            </BtnExecute>
            <div className="col-5">
              <input
                type="text"
                className="form-control"
                id="second_pokemon"
                placeholder="Name or Number Pokemon 2"
                onChange={(e) => setSecondPokemonController(e.target.value)}
              />
            </div>
          </Row>
          {isLoading && (
            <LoadingWrapper>
              <SyncLoader size={10} color="#2f3542" />
            </LoadingWrapper>
          )}
          {firstPokemon && secondPokemon ? (
            <>
              <Divider />
              <Row className="row">
                <div className="col-6">
                  <ImageLeftCanvas>
                    <img
                      src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${padLeadingZeros(
                        firstPokemon.id,
                        3
                      )}.png`}
                      alt={firstPokemon && firstPokemon.name}
                      width="100%"
                      height="100%"
                      style={{ minHeight: "15rem" }}
                    />
                  </ImageLeftCanvas>
                  <HeaderStyled>
                    <TitleLeftStyled>
                      {firstPokemon && firstPokemon.name}
                    </TitleLeftStyled>
                    <NumberLeftStyled>
                      {firstPokemon &&
                        "#" + padLeadingZeros(firstPokemon.id, 3)}
                    </NumberLeftStyled>
                  </HeaderStyled>
                </div>
                <div className="col-6">
                  <ImageRightCanvas>
                    <img
                      src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${padLeadingZeros(
                        secondPokemon.id,
                        3
                      )}.png`}
                      alt={secondPokemon && secondPokemon.name}
                      width="100%"
                      height="100%"
                      style={{ minHeight: "15rem" }}
                    />
                  </ImageRightCanvas>
                  <HeaderStyled>
                    <TitleRightStyled>
                      {secondPokemon && secondPokemon.name}
                    </TitleRightStyled>
                    <NumberRightStyled>
                      {secondPokemon &&
                        "#" + padLeadingZeros(secondPokemon.id, 3)}
                    </NumberRightStyled>
                  </HeaderStyled>
                </div>
              </Row>
              <Divider />
              <Divider />
              <Row className="row">
                <div className="col-12 d-flex justify-content-center align-items-center">
                  {(firstPokemonPoint / 6) * 100 >
                  (secondPokemonPoint / 6) * 100 ? (
                    <>
                      <WinValueCompare
                        style={{ color: "#ffa502", fontSize: "4vw" }}
                      >
                        {Math.round((firstPokemonPoint / 6) * 100)}%
                      </WinValueCompare>
                      <LabelCompare>Win Rate</LabelCompare>
                      <LoseValueCompare style={{ fontSize: "3.5vw" }}>
                        {Math.round((secondPokemonPoint / 6) * 100)}%
                      </LoseValueCompare>
                    </>
                  ) : (
                    <>
                      <LoseValueCompare
                        style={{ color: "#ffa502", fontSize: "4vw" }}
                      >
                        {Math.round((firstPokemonPoint / 6) * 100)}%
                      </LoseValueCompare>
                      <LabelCompare>Win Rate</LabelCompare>
                      <WinValueCompare style={{ fontSize: "3.5vw" }}>
                        {Math.round((secondPokemonPoint / 6) * 100)}%
                      </WinValueCompare>
                    </>
                  )}
                </div>
              </Row>
              <Divider />
              <Divider />
              <Row className="row">
                <div className="col-12 d-flex justify-content-center align-items-center">
                  <CompareTypeStyled
                    className="row d-flex justify-content-end"
                    style={{
                      width: "90%",
                    }}
                  >
                    {firstPokemon.types.map((node, i) => (
                      <span key={i} className={`${node.type.name}`}>
                        {node.type.name}
                      </span>
                    ))}
                  </CompareTypeStyled>
                  <LabelCompare>Type</LabelCompare>
                  <CompareTypeStyled
                    className="row d-flex justify-content-start"
                    style={{
                      width: "90%",
                    }}
                  >
                    {secondPokemon.types.map((node, i) => (
                      <span key={i} className={`${node.type.name}`}>
                        {node.type.name}
                      </span>
                    ))}
                  </CompareTypeStyled>
                </div>
                <div className="col-12 d-flex justify-content-center align-items-center">
                  <WinValueCompare>
                    {convertToNameCase(firstPokemon.abilities[0].ability.name)}
                  </WinValueCompare>
                  <LabelCompare>Abilities</LabelCompare>
                  <WinValueCompare>
                    {convertToNameCase(secondPokemon.abilities[0].ability.name)}
                  </WinValueCompare>
                </div>
                <div className="col-12 d-flex justify-content-center align-items-center">
                  {firstPokemon.abilities.map((item, i) => {
                    if (item.is_hidden) {
                      return (
                        <WinValueCompare key={i}>
                          {item.ability.name}
                        </WinValueCompare>
                      )
                    }
                  }) || <LoseValueCompare>-</LoseValueCompare>}

                  <LabelCompare>Hidden Ability</LabelCompare>
                  {secondPokemon.abilities.map((item, i) => {
                    if (item.is_hidden) {
                      return (
                        <WinValueCompare key={i}>
                          {item.ability.name}
                        </WinValueCompare>
                      )
                    }
                  }) || <LoseValueCompare>-</LoseValueCompare>}
                </div>
                <div className="col-12 d-flex justify-content-center align-items-center">
                  {firstPokemon.weight / 10 > secondPokemon.weight / 10 ? (
                    <>
                      <WinValueCompare>
                        {firstPokemon.weight / 10}kg
                      </WinValueCompare>
                      <LabelCompare>Weight</LabelCompare>
                      <LoseValueCompare>
                        {secondPokemon.weight / 10}kg
                      </LoseValueCompare>
                    </>
                  ) : firstPokemon.weight / 10 === secondPokemon.weight / 10 ? (
                    <>
                      <WinValueCompare>
                        {firstPokemon.weight / 10}kg
                      </WinValueCompare>
                      <LabelCompare>Weight</LabelCompare>
                      <WinValueCompare>
                        {secondPokemon.weight / 10}kg
                      </WinValueCompare>
                    </>
                  ) : (
                    <>
                      <LoseValueCompare>
                        {firstPokemon.weight / 10}kg
                      </LoseValueCompare>
                      <LabelCompare>Weight</LabelCompare>
                      <WinValueCompare>
                        {secondPokemon.weight / 10}kg
                      </WinValueCompare>
                    </>
                  )}
                </div>
                <div className="col-12 d-flex justify-content-center align-items-center">
                  {firstPokemon.height / 10 > secondPokemon.height / 10 ? (
                    <>
                      <WinValueCompare>
                        {firstPokemon.height / 10}m
                      </WinValueCompare>
                      <LabelCompare>Height</LabelCompare>
                      <LoseValueCompare>
                        {secondPokemon.height / 10}m
                      </LoseValueCompare>
                    </>
                  ) : firstPokemon.height / 10 === secondPokemon.height / 10 ? (
                    <>
                      <WinValueCompare>
                        {firstPokemon.height / 10}kg
                      </WinValueCompare>
                      <LabelCompare>Height</LabelCompare>
                      <WinValueCompare>
                        {secondPokemon.height / 10}kg
                      </WinValueCompare>
                    </>
                  ) : (
                    <>
                      <LoseValueCompare>
                        {firstPokemon.height / 10}m
                      </LoseValueCompare>
                      <LabelCompare>Height</LabelCompare>
                      <WinValueCompare>
                        {secondPokemon.height / 10}m
                      </WinValueCompare>
                    </>
                  )}
                </div>
                <Divider className="col-12" />
                <div className="col-12 d-flex justify-content-center align-items-center">
                  {firstPokemon.stats.map((i) => {
                    return secondPokemon.stats.map((j) => {
                      if (j.stat.name === "hp" && i.stat.name === "hp") {
                        return (
                          <>
                            {i.base_stat >= j.base_stat ? (
                              <WinValueCompare key={i}>
                                {i.base_stat}
                              </WinValueCompare>
                            ) : (
                              <LoseValueCompare key={i}>
                                {i.base_stat}
                              </LoseValueCompare>
                            )}
                            <LabelCompare>HP</LabelCompare>
                            {i.base_stat <= j.base_stat ? (
                              <WinValueCompare key={j}>
                                {j.base_stat}
                              </WinValueCompare>
                            ) : (
                              <LoseValueCompare key={j}>
                                {j.base_stat}
                              </LoseValueCompare>
                            )}
                          </>
                        )
                      }
                    })
                  })}
                </div>
                <div className="col-12 d-flex justify-content-center align-items-center">
                  {firstPokemon.stats.map((i) => {
                    return secondPokemon.stats.map((j) => {
                      if (
                        j.stat.name === "attack" &&
                        i.stat.name === "attack"
                      ) {
                        return (
                          <>
                            {i.base_stat >= j.base_stat ? (
                              <WinValueCompare key={i}>
                                {i.base_stat}
                              </WinValueCompare>
                            ) : (
                              <LoseValueCompare key={i}>
                                {i.base_stat}
                              </LoseValueCompare>
                            )}
                            <LabelCompare>Attack</LabelCompare>
                            {i.base_stat <= j.base_stat ? (
                              <WinValueCompare key={j}>
                                {j.base_stat}
                              </WinValueCompare>
                            ) : (
                              <LoseValueCompare key={j}>
                                {j.base_stat}
                              </LoseValueCompare>
                            )}
                          </>
                        )
                      }
                    })
                  })}
                </div>
                <div className="col-12 d-flex justify-content-center align-items-center">
                  {firstPokemon.stats.map((i) => {
                    return secondPokemon.stats.map((j) => {
                      if (
                        j.stat.name === "defense" &&
                        i.stat.name === "defense"
                      ) {
                        return (
                          <>
                            {i.base_stat >= j.base_stat ? (
                              <WinValueCompare key={i}>
                                {i.base_stat}
                              </WinValueCompare>
                            ) : (
                              <LoseValueCompare key={i}>
                                {i.base_stat}
                              </LoseValueCompare>
                            )}
                            <LabelCompare>Defense</LabelCompare>
                            {i.base_stat <= j.base_stat ? (
                              <WinValueCompare key={j}>
                                {j.base_stat}
                              </WinValueCompare>
                            ) : (
                              <LoseValueCompare key={j}>
                                {j.base_stat}
                              </LoseValueCompare>
                            )}
                          </>
                        )
                      }
                    })
                  })}
                </div>
                <div className="col-12 d-flex justify-content-center align-items-center">
                  {firstPokemon.stats.map((i) => {
                    return secondPokemon.stats.map((j) => {
                      if (
                        j.stat.name === "special-attack" &&
                        i.stat.name === "special-attack"
                      ) {
                        return (
                          <>
                            {i.base_stat >= j.base_stat ? (
                              <WinValueCompare key={i}>
                                {i.base_stat}
                              </WinValueCompare>
                            ) : (
                              <LoseValueCompare key={i}>
                                {i.base_stat}
                              </LoseValueCompare>
                            )}
                            <LabelCompare>Special Attack</LabelCompare>
                            {i.base_stat <= j.base_stat ? (
                              <WinValueCompare key={j}>
                                {j.base_stat}
                              </WinValueCompare>
                            ) : (
                              <LoseValueCompare key={j}>
                                {j.base_stat}
                              </LoseValueCompare>
                            )}
                          </>
                        )
                      }
                    })
                  })}
                </div>
                <div className="col-12 d-flex justify-content-center align-items-center">
                  {firstPokemon.stats.map((i) => {
                    return secondPokemon.stats.map((j) => {
                      if (
                        j.stat.name === "special-defense" &&
                        i.stat.name === "special-defense"
                      ) {
                        return (
                          <>
                            {i.base_stat >= j.base_stat ? (
                              <WinValueCompare key={i}>
                                {i.base_stat}
                              </WinValueCompare>
                            ) : (
                              <LoseValueCompare key={i}>
                                {i.base_stat}
                              </LoseValueCompare>
                            )}
                            <LabelCompare>Special Defense</LabelCompare>
                            {i.base_stat <= j.base_stat ? (
                              <WinValueCompare key={j}>
                                {j.base_stat}
                              </WinValueCompare>
                            ) : (
                              <LoseValueCompare key={j}>
                                {j.base_stat}
                              </LoseValueCompare>
                            )}
                          </>
                        )
                      }
                    })
                  })}
                </div>
                <div className="col-12 d-flex justify-content-center align-items-center">
                  {firstPokemon.stats.map((i) => {
                    return secondPokemon.stats.map((j) => {
                      if (j.stat.name === "speed" && i.stat.name === "speed") {
                        return (
                          <>
                            {i.base_stat >= j.base_stat ? (
                              <WinValueCompare key={i}>
                                {i.base_stat}
                              </WinValueCompare>
                            ) : (
                              <LoseValueCompare key={i}>
                                {i.base_stat}
                              </LoseValueCompare>
                            )}
                            <LabelCompare>Speed</LabelCompare>
                            {i.base_stat <= j.base_stat ? (
                              <WinValueCompare key={j}>
                                {j.base_stat}
                              </WinValueCompare>
                            ) : (
                              <LoseValueCompare key={j}>
                                {j.base_stat}
                              </LoseValueCompare>
                            )}
                          </>
                        )
                      }
                    })
                  })}
                </div>
              </Row>
            </>
          ) : (
            <>
              <Divider />
              <Divider />
              <Divider />
              <Divider />
              <Divider />
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src="https://pngimg.com/uploads/pokeball/pokeball_PNG21.png"
                  alt=""
                  width="30%"
                  height="30%"
                  style={{ opacity: 0.3 }}
                />
              </div>
            </>
          )}
        </div>
      </CompareCanvas>
    </>
  )
}
