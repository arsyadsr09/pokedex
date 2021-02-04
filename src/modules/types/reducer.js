import {
  GET_POKEMON_TYPE,
  GET_POKEMON_TYPE_SUCCESS,
  GET_POKEMON_TYPE_FAILED,
} from "../constants"

const initialState = {
  isLoading: false,
  hasError: false,
  errorMessage: "",
  data: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON_TYPE:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      }
    case GET_POKEMON_TYPE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
      }
    case GET_POKEMON_TYPE_FAILED:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        errorMessage: action.payload.errorMessage,
      }
    default:
      return state
  }
}
