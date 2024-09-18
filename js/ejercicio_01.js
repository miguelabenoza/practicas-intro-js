/*  Ejercicio 1:

Crea un archivo ejercicio1.js que tenga un objeto llamado usuario con los siguientes
campos:
    - Nombre (el tuyo o inventado)
    - Apellidos (el tuyo o inventado)
    - Una lista con los temas del bootcamp Node.js, Git y react con sus nombres y fechas
      de inicio de cada módulo. Fecha en formato “YYYY-MM-DD”
    - Si estás en búsqueda activa con un valor de verdadero o false

En este archivo queremos mostrar por pantalla la fecha de inicio del módulo de react del
objeto que hemos creado anteriormente.
 */

const usuario = {
    nombre: 'Miguel',
    apellidos: 'Abenoza Robles',
    temario: [
        {
            nombre: 'Node.js',
            fechaInicio: '2024-10-21'
        },
        {
            nombre: 'Git',
            fechaInicio: '2024-11-11'
        },
        {
            nombre: 'React',
            fechaInicio: '2024-12-16'
        }
    ],
    
    busquedaActiva: true
};

console.log(usuario.temario[2].fechaInicio);