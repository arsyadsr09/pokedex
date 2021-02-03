import React, { useEffect, useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemonList } from "../../modules/actions"
import PokeCard from "../../components/PokeCard"
import { HashLoader } from "react-spinners"

import debounce from "lodash.debounce"

import { CardWrap, LoadingWrapper } from "./styled"

export default () => {
  const statePokemon = useSelector((state) => state)
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
      <CardWrap>
        {statePokemon.data.map((item, i) => {
          return <PokeCard key={i} data={item} name={item.name} id={i} />
        })}
      </CardWrap>
      <LoadingWrapper>
        <HashLoader loading={statePokemon.isLoading} color="#2f3542" />
      </LoadingWrapper>
    </>
  )
}
