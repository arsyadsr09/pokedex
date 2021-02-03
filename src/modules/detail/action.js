import axios from "axios"
import { API_URL } from "../../configs"
import {
  GET_POKEMON_DETAIL_PAGE,
  GET_POKEMON_DETAIL_PAGE_SUCCESS,
  GET_POKEMON_DETAIL_PAGE_FAILED,
} from "../constants"
import { getPokemonList } from "../pokemon/action"

export const getPokemonDetailPage = (name) => async (dispatch, getState) => {
  dispatch({
    type: GET_POKEMON_DETAIL_PAGE,
  })

  try {
    const pokemon = await axios.get(`${API_URL}/pokemon/${name}`)
    const pokemonData = pokemon.data

    const specie = await axios.get(pokemonData.species.url)
    const specieData = specie.data

    const evolution = await axios.get(specieData.evolution_chain.url)
    const evolutionData = evolution.data

    let evoDetail = []

    if (!!evolutionData.chain.species.name) {
      const res = await axios.get(
        `${API_URL}/pokemon/${evolutionData.chain.species.name}`
      )
      evoDetail.push(res.data)
    }

    if (!!evolutionData.chain.evolves_to.length > 0) {
      const res = await axios.get(
        `${API_URL}/pokemon/${evolutionData.chain.evolves_to[0].species.name}`
      )
      evoDetail.push(res.data)
    }

    if (!!evolutionData.chain.evolves_to[0].evolves_to.length > 0) {
      const res = await axios.get(
        `${API_URL}/pokemon/${evolutionData.chain.evolves_to[0].evolves_to[0].species.name}`
      )
      evoDetail.push(res.data)
    }

    console.log(evoDetail)

    dispatch({
      type: GET_POKEMON_DETAIL_PAGE_SUCCESS,
      payload: {
        data: pokemonData,
        specie: specieData,
        evolution: evolutionData,
        evoDetail,
      },
    })
    if (pokemonData.id >= getState().pokemon.pagination.currentPage * 20 - 1) {
      dispatch(getPokemonList(getState().pokemon.pagination.currentPage + 1))
    }
  } catch (e) {
    dispatch({
      type: GET_POKEMON_DETAIL_PAGE_FAILED,
      payload: {
        errorMessage: e,
      },
    })
  }
}
