import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {Provider} from "react-redux";
import {store} from "./helpers/store";
import AppRoute from './components/appRoute/AppRoute'

function App() {
    return (
        <Provider store={store}>
            <AppRoute/>
        </Provider>
    );
}

export default App;
