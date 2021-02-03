import React, { useEffect, useCallback, useState } from "react"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { getPokemonList } from "../../modules/actions"
import PokeCard from "../../components/PokeCard"
import { HashLoader } from "react-spinners"

import debounce from "lodash.debounce"

const CardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const LoadingWrapper = styled.div`
  margin: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

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
          return <PokeCard key={i} name={item.name} id={i} />
        })}
      </CardWrap>
      <LoadingWrapper>
        <HashLoader loading={statePokemon.isLoading} color="#ff416c" />
      </LoadingWrapper>
    </>
  )
}
