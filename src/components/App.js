import React, { Fragment } from 'react';

import Header from './Header';
import Main from './Main';

const App = () => {
    console.log('App');
    return (
        <Fragment>
            <Header/>
            <Main/>
        </Fragment>
    );
}
    
export default App;