import axios from "axios"
import { API_URL } from "../../configs"
import {
  GET_POKELIST,
  GET_POKELIST_FAILED,
  GET_POKELIST_SUCCESS,
  GET_POKEMON_DETAIL,
  GET_POKEMON_DETAIL_SUCCESS,
  GET_POKEMON_DETAIL_FAILED,
} from "../constants"

export const getPokemonList = (page = 1) => async (dispatch) => {
  dispatch({
    type: GET_POKELIST,
  })

  try {
    const offset = (page - 1) * 20

    const response = await axios.get(`${API_URL}/pokemon`, {
      params: {
        offset,
        limit: 20,
      },
    })

    const { data } = response
    const count = data.count == 1118 ? 899 : data.count

    dispatch({
      type: GET_POKELIST_SUCCESS,
      payload: {
        total: count,
        hasNext: !!data.next,
        data: data.results,
        page,
      },
    })
  } catch (e) {
    dispatch({
      type: GET_POKELIST_FAILED,
      payload: {
        errorMessage: e,
      },
    })
  }
}

export const getPokemon = (id, name) => async (dispatch) => {
  dispatch({
    type: GET_POKEMON_DETAIL,
    payload: {
      id,
    },
  })

  try {
    const response = await axios.get(`${API_URL}/pokemon/${name}`)

    dispatch({
      type: GET_POKEMON_DETAIL_SUCCESS,
      payload: {
        id,
        data: response.data,
      },
    })
  } catch (e) {
    dispatch({
      type: GET_POKEMON_DETAIL_FAILED,
      payload: {
        errorMessage: e,
      },
    })
  }
}