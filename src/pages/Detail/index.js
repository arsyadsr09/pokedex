import React, { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { SyncLoader } from "react-spinners"

import {
  faChevronLeft,
  faChevronRight,
  faMars,
  faVenus,
} from "@fortawesome/free-solid-svg-icons"

import Evolution from "../../components/Evolution"
import Stats from "../../components/Stats"
import Navbar from "../../layouts/Navbar"
import BgContainer from "../../assets/images/container_bg.png"
import { BgStyled } from "../../layouts/styled"
import {
  PathLeftStyled,
  PathRightStyled,
  PathWrapper,
  ContentWrapper,
  ContainerWrapper,
  PathContent,
  ChevronLeft,
  ChevronRight,
  TitleStyled,
  NumberStyled,
  ImageCanvas,
  Divider,
  Row,
  FlavorText,
  GeneralCard,
  LabelGeneralInfo,
  ValueGeneralInfo,
  FormGeneralInfo,
  GenderDivider,
  GenderIcon,
  LabelType,
  TypeWrap,
  TypeStyled,
} from "./styled"

import { LoadingWrapper } from "../Home/styled"
import { getPokemonDetailPage } from "../../modules/detail/action"
import { getPokemonList } from "../../modules/pokemon/action"

export default () => {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const { name } = useParams()

  useEffect(() => {
    dispatch(getPokemonDetailPage(name))
  }, [name])

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
      <Navbar />
      <ContainerWrapper>
        {state.detail.isLoading || state.detail.data.name === undefined ? (
          <LoadingWrapper>
            <SyncLoader size={5} color="#ff416c" />
          </LoadingWrapper>
        ) : (
          <>
            <PathWrapper>
              <PathLeftStyled
                className={state.detail.data.id - 1 <= 0 ? "disabled" : ""}
                to={
                  state.detail.data.id - 1 > 0
                    ? `/Detail/${
                        state.pokemon.data[state.detail.data.id - 2].name
                      }`
                    : ""
                }
              >
                <ChevronLeft icon={faChevronLeft} />
                <PathContent>
                  <span className="number">
                    {state.detail.data.id - 1 <= 0
                      ? "-"
                      : "#" + padLeadingZeros(state.detail.data.id - 1, 3)}
                  </span>
                  <span className="name">
                    {state.detail.data.id - 1 <= 0
                      ? "-"
                      : state.pokemon.data[state.detail.data.id - 2].name}
                  </span>
                </PathContent>
              </PathLeftStyled>
              <PathRightStyled
                className={
                  state.detail.data.id + 1 >= state.pokemon.pagination.total
                    ? "disabled"
                    : ""
                }
                to={
                  state.detail.data.id + 1 >= state.pokemon.pagination.total
                    ? ""
                    : `/Detail/${state.pokemon.data[state.detail.data.id].name}`
                }
              >
                <ChevronRight icon={faChevronRight} />
                <PathContent>
                  <span className="number">
                    #
                    {state.detail.data.id + 1 >= state.pokemon.pagination.total
                      ? padLeadingZeros(1, 3)
                      : padLeadingZeros(state.detail.data.id + 1, 3)}
                  </span>
                  <span className="name">
                    {state.pokemon.data[state.detail.data.id].name}
                  </span>
                </PathContent>
              </PathRightStyled>
            </PathWrapper>
            <BgStyled img={BgContainer}>
              <ContentWrapper>
                <div className="row">
                  <TitleStyled>{name}</TitleStyled>
                  <NumberStyled>
                    #{padLeadingZeros(state.detail.data.id, 3)}
                  </NumberStyled>
                </div>
                <Divider />
                <Row className="row">
                  <div className="col-6">
                    <ImageCanvas>
                      <img
                        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${padLeadingZeros(
                          state.detail.data.id,
                          3
                        )}.png`}
                        alt=""
                        width="100%"
                        height="100%"
                      />
                    </ImageCanvas>
                    <Stats />
                  </div>
                  <div className="col-6">
                    <FlavorText>
                      {state.detail.specie.flavor_text_entries &&
                        state.detail.specie.flavor_text_entries.filter(
                          (item) => item.language.name === "en"
                        )[0].flavor_text}
                    </FlavorText>
                    <Divider />
                    <GeneralCard>
                      <Row className="row">
                        <div className="col-6">
                          <FormGeneralInfo>
                            <LabelGeneralInfo>Height</LabelGeneralInfo>
                            <ValueGeneralInfo>
                              {state.detail.data.height / 10}m
                            </ValueGeneralInfo>
                          </FormGeneralInfo>
                          <FormGeneralInfo>
                            <LabelGeneralInfo>Weight</LabelGeneralInfo>
                            <ValueGeneralInfo>
                              {state.detail.data.weight / 10}kg
                            </ValueGeneralInfo>
                          </FormGeneralInfo>
                          <FormGeneralInfo>
                            <LabelGeneralInfo>Gender</LabelGeneralInfo>
                            <ValueGeneralInfo>
                              {state.detail.specie.gender_rate < 0 ? (
                                "Unknown"
                              ) : (
                                <>
                                  <GenderIcon icon={faMars} />
                                  <GenderDivider />
                                  <GenderIcon icon={faVenus} />
                                </>
                              )}
                            </ValueGeneralInfo>
                          </FormGeneralInfo>
                        </div>
                        <div className="col-6">
                          <FormGeneralInfo>
                            <LabelGeneralInfo>Category</LabelGeneralInfo>
                            <ValueGeneralInfo>
                              {state.detail.specie.genera[0].genus}
                            </ValueGeneralInfo>
                          </FormGeneralInfo>
                          <FormGeneralInfo>
                            <LabelGeneralInfo>Abilities</LabelGeneralInfo>

                            {state.detail.data.abilities.map((item, i) => {
                              return (
                                <ValueGeneralInfo
                                  key={i}
                                  className={item.is_hidden && "hidden"}
                                >
                                  {convertToNameCase(item.ability.name)}
                                </ValueGeneralInfo>
                              )
                            })}
                          </FormGeneralInfo>
                        </div>
                      </Row>
                    </GeneralCard>
                    <Divider />
                    <LabelType>Type</LabelType>
                    <TypeWrap>
                      {state.detail.data.types && (
                        <TypeStyled>
                          {state.detail.data.types.map((node, i) => (
                            <span key={i} className={`${node.type.name}`}>
                              {node.type.name}
                            </span>
                          ))}
                        </TypeStyled>
                      )}
                    </TypeWrap>
                  </div>
                </Row>
                <Row className="row">
                  <div className="col-12">
                    <Evolution />
                  </div>
                </Row>
                <Divider />
              </ContentWrapper>
            </BgStyled>
          </>
        )}
      </ContainerWrapper>
    </>
  )
}
