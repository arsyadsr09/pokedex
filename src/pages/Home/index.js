import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemonList } from "../../modules/actions"

export default function Home() {
  const pokemon = useSelector((state) => state.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPokemonList())
    console.log(pokemon)
  }, [])

  return (
    <>
      <span>Lalala</span>
    </>
  )
}
