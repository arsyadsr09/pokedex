import React, { useEffect, useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemonList } from "../../modules/pokemon/action"
import { getPokemonTypes } from "../../modules/types/action"
import PokeCard from "../../components/PokeCard"
import Filter from "../../components/Filter"
import Navbar from "../../layouts/Navbar"
import { HashLoader } from "react-spinners"

import debounce from "lodash.debounce"

import { CardWrap, LoadingWrapper, ContentWrapper, NoOverflow } from "./styled"
import BgGrey from "../../assets/images/container_bg.png"
import { BgStyled } from "../../layouts/styled"

export default () => {
  const statePokemon = useSelector((state) => state.pokemon)
  const dispatch = useDispatch()
  const [isBottom, setIsBottom] = useState(false)

  const handleScroll = () => {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop
    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight
    if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
      setIsBottom(true)
    }
  }

  const onScroll = useCallback(
    debounce(() => {
      dispatch(getPokemonList(statePokemon.pagination.currentPage + 1))
      setIsBottom(false)
    }, 400),
    [isBottom]
  )

  useEffect(() => {
    dispatch(getPokemonList())
    dispatch(getPokemonTypes())
  }, [])

  useEffect(() => {
    if (isBottom) {
      onScroll()
    }
  }, [isBottom])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <NoOverflow>
        <Filter />
        <BgStyled img={BgGrey}>
          <ContentWrapper>
            <Navbar />
            <CardWrap>
              {statePokemon.data.map((item, i) => {
                if (i < statePokemon.pagination.total - 1) {
                  return (
                    <PokeCard key={i} data={item} name={item.name} id={i} />
                  )
                }
              })}
            </CardWrap>
            {statePokemon.data.length < statePokemon.pagination.total && (
              <LoadingWrapper>
                <HashLoader loading={statePokemon.isLoading} color="#2f3542" />
              </LoadingWrapper>
            )}
          </ContentWrapper>
        </BgStyled>
      </NoOverflow>
    </>
  )
}
