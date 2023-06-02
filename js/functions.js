//FUNCIONES A CREAR

// añadir TAREAS  ---- generar una tarea, se pintará con un div que tenga un p y un botón de eliminar.

// borrar TAREAS

//filtrar la prioridad de las tareas en URGENTE, DIARIA, SEMANAL Y MENSUAL (CADA UNA CON UN COLOR DIFERENTE, ASIGNADO EN EL MOMENTO DE LA CREACIÓN)

//SELECT CON EVENTO AL CAMBIO, BÚSQUEDA CON EVENTO AL PULSAR EL INTRO

//guardar listado de tareas en el array disponible en el modelo

//MAQUETAR EN BOOTSTRAP

function addTask(){

}

function filterTask(){

}

function saveTask(){
}


function deleteTask(){

}

function printTask(){


}

async function getSearch(event) {
    // si event viene del inputSearch solo quiero que sea por la tecla intro

    let word = ""
    if(event.target.id === 'btn'){
      word = inputSearch.value;
     }else if(event.target.id === 'search')
      //aqui quiero saber qué tecla toco
     if (event.key === 'Enter'){
      word = event.target.value
     }
     }
     let urlBusqueda = `${url}/?name=${word}`
     let data = Await getApi(urlBusqueda);
    if (!data.error) {
     printCharactes(data.results, sectionPersonajes)
     } else {
     alert (data.error)
     }
