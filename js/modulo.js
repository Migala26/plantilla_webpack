function saludar(nombre) {
    return "Hola qué tal, " + nombre
}

//Esto es un export con nombre, donde queramos importarlo hay que hacerlo con el mismo nombre: import {saludar}
//Para hacerlo sin nombre -> export default saludar, luego se puede importar con import nombre_arbitrario
export {saludar}
