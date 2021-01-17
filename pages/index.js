import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import 'semantic-ui-css/semantic.min.css'
import rootReducer from './modules/reducers';
import rootSaga from './modules/sagas';
import createSagaMiddleware from 'redux-saga';

import Header from "./components/organisms/header/header";
import { Home } from './components/pages/home';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default function App() {
  return (
    <React.StrictMode>
        <Provider store={store}>
            <div className="container">
                <Header />
                <Home />

                <style jsx global>{`
                body {
                margin: 0;
                font-family: 'lilita_oneregular', sans-serif;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                }
                
                @font-face {
                font-family: 'lilita_oneregular';
                src: url('./public/fonts/lilitaone-regular-webfont.woff2') format('woff2'),
                url('./public/fonts/lilitaone-regular-webfont.woff') format('woff'),
                url('./public/fonts/lilitaone-regular-webfont.ttf') format("truetype");
                font-weight: normal;
                font-style: normal;
                }        
                `}</style>
            </div>
        </Provider>
    </React.StrictMode>
  )
}
