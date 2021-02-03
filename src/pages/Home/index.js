import React, { useEffect } from "react"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { getPokemonList } from "../../modules/actions"
import PokeCard from "../../components/PokeCard"

const CardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export default () => {
  const pokemon = useSelector((state) => state.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPokemonList())
    console.log(pokemon)
  }, [])

  return (
    <>
      <CardWrap>
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
      </CardWrap>
    </>
  )
}
