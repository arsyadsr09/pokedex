import React, { useEffect } from "react"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { getPokemonList } from "../../modules/actions"
import PokeCard from "../../components/PokeCard"
import { HashLoader } from "react-spinners"

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

  useEffect(() => {
    dispatch(getPokemonList())
  }, [])

  return (
    <>
      <CardWrap>
        {statePokemon.data.map((item, i) => {
          console.log(item.name)
          return <PokeCard key={i} name={item.name} id={i} />
        })}
      </CardWrap>
      <LoadingWrapper>
        <HashLoader loading={statePokemon.isLoading} color="#ff416c" />
      </LoadingWrapper>
    </>
  )
}
