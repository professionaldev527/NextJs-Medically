import { createStore, compose, applyMiddleware } from "redux";

import { persistStore, persistReducer } from "redux-persist";

import createWebStorage from "redux-persist/lib/storage/createWebStorage";

// middlewares
import thunk from "redux-thunk";

// Import custom components
import rootReducer from "./reducers/rootReducers";

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const middleware = [thunk];

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(...middleware),
    //For working redux dev tools in chrome (https://github.com/zalmoxisus/redux-devtools-extension)
    typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f,
  ),
);

let persistor = persistStore(store);

export { store, persistor };
