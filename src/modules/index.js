import { combineReducers } from "redux"

import pokemon from "./pokemon/reducer"
import detail from "./detail/reducer"

export const rootReducer = combineReducers({ pokemon, detail })
