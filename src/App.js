import React from 'react';

import Header from './Header.js'
import Search from './Search.js'

class App extends React.Component  {
    render()  {
        return(
            <div>
                <Header />
                <br /><br /><br /><br />
                <Search />
            </div>
        
        )
    }
}

export default App;
