import axios from "axios"
import { API_URL } from "../../configs"
import {
  GET_POKEMON_DETAIL_PAGE,
  GET_POKEMON_DETAIL_PAGE_SUCCESS,
  GET_POKEMON_DETAIL_PAGE_FAILED,
} from "../constants"

export const getPokemonDetailPage = (name) => async (dispatch) => {
  dispatch({
    type: GET_POKEMON_DETAIL_PAGE,
  })
  try {
    const pokemon = await axios.get(`${API_URL}/pokemon/${name}`)
    const specie = await axios.get(`${API_URL}/pokemon-species/${name}`)

    const pokemonData = pokemon.data
    const specieData = specie.data

    const evolution = await axios.get(specieData.evolution_chain.url)

    const evolutionData = evolution.data

    dispatch({
      type: GET_POKEMON_DETAIL_PAGE_SUCCESS,
      payload: {
        data: pokemonData,
        specie: specieData,
        evolution: evolutionData,
      },
    })
  } catch (e) {
    dispatch({
      type: GET_POKEMON_DETAIL_PAGE_FAILED,
      payload: {
        errorMessage: e,
      },
    })
  }
}
