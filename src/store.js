import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import app from "./modules/app";
import badges from "./modules/badges";

const rootReducer = combineReducers({
  form: formReducer,
  app,
  badges
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

export default store;
