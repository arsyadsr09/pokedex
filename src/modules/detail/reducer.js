import {
  GET_POKEMON_DETAIL_PAGE,
  GET_POKEMON_DETAIL_PAGE_SUCCESS,
  GET_POKEMON_DETAIL_PAGE_FAILED,
} from "../constants"

const initialState = {
  isLoading: false,
  hasError: false,
  errorMessage: "",
  data: {},
  specie: {},
  evolution: {},
  evo_detail: {},
  before: {},
  after: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON_DETAIL_PAGE:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      }
    case GET_POKEMON_DETAIL_PAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
        specie: action.payload.specie,
        evolution: action.payload.evolution,
        evoDetail: action.payload.evoDetail,
        before: action.payload.before,
        after: action.payload.after,
      }
    case GET_POKEMON_DETAIL_PAGE_FAILED:
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
