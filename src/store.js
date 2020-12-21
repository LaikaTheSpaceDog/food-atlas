import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./data/reducer";
import initial from "./data/initial";
import thunk from "redux-thunk";
import persistState from "redux-localstorage";

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer, 
    initial,
    composeEnhancers(
        applyMiddleware(thunk),
        persistState()
    )
);

export default store;