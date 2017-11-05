import React from 'react'
import ReactDOM from 'react-dom'  

import {saludar} from './modulo'

class ComponenteSaludo extends React.Component {
    render() {
        return <div>
            {saludar(this.props.nombre)}
        </div> 
    }
}

ReactDOM.render(<ComponenteSaludo nombre="Pepe"/>
            , document.getElementById('componente'));  


