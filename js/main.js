import React from 'react'
import ReactDOM from 'react-dom'  

import {saludar} from './modulo'

class HelloMessage extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            saludar(this.props.name)
        );
    }
}

ReactDOM.render(React.createElement(HelloMessage, { name: "John" })
            , document.getElementById('componente'));  


