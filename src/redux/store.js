import { createStore, applyMiddleware } from "redux";
// import { logger } from "redux-logger";
import {rootReducer} from "./root.reducer";
import { composeWithDevTools } from "redux-devtools-extension";


import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

// sagaMiddleware.run(authSagas);
// sagaMiddleware.run(userSagas);
// sagaMiddleware.run(fundSagas);
// sagaMiddleware.run(familySagas);
// sagaMiddleware.run(championSagas);
// sagaMiddleware.run(advisorSagas);
// sagaMiddleware.run(plaidSagas);
// sagaMiddleware.run(uploadsSagas);

export default store;
