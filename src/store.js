import { createStore, applyMiddleware, compose } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import thunk from "redux-thunk"

import reducers from "./modules/reducers"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["pokemon"],
}

const persistedReducer = persistReducer(persistConfig, reducers)

const middleware = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(persistedReducer, middleware)
const persistor = persistStore(store)

export { store, persistor }
