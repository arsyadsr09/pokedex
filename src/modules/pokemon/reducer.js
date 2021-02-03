import {
  GET_POKELIST,
  GET_POKELIST_SUCCESS,
  GET_POKELIST_FAILED,
  GET_POKEMON_DETAIL,
  GET_POKEMON_DETAIL_SUCCESS,
  GET_POKEMON_DETAIL_FAILED,
} from "../constants"

const initialState = {
  isLoading: false,
  hasError: false,
  errorMessage: "",
  data: [],
  pagination: {
    currentPage: 1,
    hasNext: false,
    total: 0,
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POKELIST:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      }
    case GET_POKELIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data:
          state.data.length <= 0 ||
          state.pagination.currentPage < action.payload.page
            ? state.data.concat(action.payload.data)
            : state.data,
        pagination: {
          ...state.pagination,
          hasNext: action.payload.hasNext,
          currentPage: action.payload.page,
          total: action.payload.total,
        },
      }
    case GET_POKELIST_FAILED:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        errorMessage: action.payload.errorMessage,
      }
    case GET_POKEMON_DETAIL:
      return {
        ...state,
        data: state.data.map((item, index) => {
          if (index === action.payload.id) {
            return {
              ...item,
              isLoading: true,
            }
          }

          return item
        }),
      }
    case GET_POKEMON_DETAIL_SUCCESS:
      return {
        ...state,
        data: state.data.map((item, index) => {
          if (index === action.payload.id) {
            return {
              ...item,
              ...action.payload.data,
              isLoading: false,
            }
          }

          return item
        }),
      }
    case GET_POKEMON_DETAIL_FAILED:
      return {
        ...state,
        data: state.data.map((item, index) => {
          if (index === action.payload.id) {
            return {
              ...item,
              ...action.payload.data,
              isLoading: false,
              hasError: true,
              errorMessage: action.payload.errorMessage,
            }
          }

          return item
        }),
      }
    default:
      return state
  }
}
