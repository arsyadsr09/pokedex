import {
  GET_POKELIST,
  GET_POKELIST_SUCCESS,
  GET_POKELIST_FAILED,
} from "./constants"

const initialState = {
  isLoading: false,
  hasError: false,
  errorMessage: "",
  data: [],
  pagination: {
    currentPage: 0,
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
        data: action.payload.data,
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
    default:
      return state
  }
}
