import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/main.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
const middleware = [thunk];

let store = createStore(reducer, applyMiddleware(...middleware));


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
