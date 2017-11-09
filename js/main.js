//Este es el "archivo inicial" tal y como está configurado en webpack
//La ejecución de js comenzaría por aquí.
//importamos los componentes y los pintamos en el HTML con ReactDOM.render

//Al ser un export default, al importarlo podemos cambiarle el nombre
import React from 'react'
import ReactDOM from 'react-dom'  
import Saludo from './ComponenteSaludo'

ReactDOM.render(<Saludo nombre="Pepe"/>
            , document.getElementById('componente'));  


