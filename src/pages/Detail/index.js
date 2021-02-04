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

export default () => {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const { name } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
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
            <SyncLoader size={10} color="#ff416c" />
          </LoadingWrapper>
        ) : (
          <>
            <PathWrapper>
              <PathLeftStyled
                className={!state.detail.before && "disabled"}
                to={
                  state.detail.before
                    ? `/Detail/${state.detail.before.name}`
                    : ""
                }
              >
                <ChevronLeft icon={faChevronLeft} />
                <PathContent>
                  <span className="number">
                    {state.detail.before
                      ? "#" + padLeadingZeros(state.detail.before.id, 3)
                      : "-"}
                  </span>
                  {state.detail.before && (
                    <span className="name">
                      {!state.detail.before ? "-" : state.detail.before.name}
                    </span>
                  )}
                </PathContent>
              </PathLeftStyled>
              <PathRightStyled
                className={!state.detail.after && "disabled"}
                to={
                  state.detail.after
                    ? `/Detail/${state.detail.after.name}`
                    : "-"
                }
              >
                <ChevronRight icon={faChevronRight} />
                <PathContent>
                  <span className="number">
                    {state.detail.after
                      ? "#" + padLeadingZeros(state.detail.after.id, 3)
                      : "-"}
                  </span>
                  {state.detail.after && (
                    <span className="name">{state.detail.after.name}</span>
                  )}
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
