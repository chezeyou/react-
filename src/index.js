import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/antd/dist/antd.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import './style/main.less';
import './style/reset.less';
import store from './store/store'
import {Provider} from 'react-redux'
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
