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
      }
    case GET_POKEMON_DETAIL_PAGE_FAILED:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        errorMessage: action.payload.errorMessage,
      }

    // case GET_POKEMON_EVOLUTION:
    //   return {
    //     ...state,
    //     evolution: {
    //       ...state.evolution,
    //       isLoading: true,
    //       hasError: false,
    //     },
    //   }
    // case GET_POKEMON_EVOLUTION_SUCCESS:
    //   return {
    //     ...state,
    //     evolution: {
    //       ...state.evolution,
    //       evo_detail: [...evo_detail, action.payload.data],
    //     },
    //   }
    // case GET_POKEMON_EVOLUTION_FAILED:
    //   return {
    //     ...state,
    //     evolution: {
    //       ...state.evolution,
    //       isLoading: true,
    //       hasError: false,
    //     },
    //   }
    default:
      return state
  }
}
