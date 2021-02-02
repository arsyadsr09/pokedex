import axios from "axios"
import { API_URL } from "../configs"
import {
  GET_POKELIST,
  GET_POKELIST_FAILED,
  GET_POKELIST_SUCCESS,
} from "./constants"

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

    dispatch({
      type: GET_POKELIST_SUCCESS,
      payload: {
        total: data.count,
        hasNext: !!data.next,
        data: data.results,
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
