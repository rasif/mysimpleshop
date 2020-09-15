import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './style/css/style.css';
    
import App from './components/App';

import store from './store';

render(<Provider store={store}>
            <App/>
        </Provider>, document.querySelector('.page'));