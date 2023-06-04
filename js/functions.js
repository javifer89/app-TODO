//FUNCIONES A CREAR

// añadir TAREAS

// borrar TAREAS

//filtrar la prioridad de las tareas en URGENTE, DIARIA, SEMANAL Y MENSUAL (CADA UNA CON UN COLOR DIFERENTE, ASIGNADO EN EL MOMENTO DE LA CREACIÓN)

//SELECT CON EVENTO AL CAMBIO, BÚSQUEDA(filtrar) CON EVENTO AL PULSAR EL INTRO

//guardar listado de tareas en el array disponible en el modelo

//MAQUETAR EN BOOTSTRAP

const sectionTareas = document.querySelector('#appTODO')
const newTask = document.querySelector('#addTask')
const filterTask = document.quertySelector('#filterTask')

const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')


function addTask(){

}

function saveTask(pList, pTask){
    let tareaDuplicada = pList.findIndex(task => listaTareas.titulo.toLowerCase() === listaTareas.titulo.toLowerCase());
    if (tareaDuplicada === -1){
        pTask.id = listaTareas.length +2
        pList.push(pTask);
        return 'Tarea añadida'
    }
    return 'Tarea duplicada'
}

function filterTaskByPriority(pList, pPriority){
return.pList.filter((item) => item.prioridad === pPriority)
}
filterTaskByPriority(listaTareas, 'urgente')


function printTask(){}

function printOneTask(pTask, pDom) {
        const article = document.createElement('article');
        const h4 = document.createElement('h4');
        const ul = document.createElement('ul');

        h4.textContent = pTask.titulo;
        ul.innerHTML = `<li>Prioridad:${pTask.prioridad}</li>
        <button type="button" class="btn btn-outline-warning">ELIMINAR TAREA</button>`;
        pTask.append(h4, ul);  //revisar
        pDom.appendChild(article);
    }

    // PINTAR TODAS LAS TAREAS
          function printAllTask(pList, pDom) {
            pList.forEach((task) => printOneTask(task, pDom));
           }
           printAllTask(listaTareas, sectionTareas);


// esta funcion es un manejador de eventos (eventhandler)
    //  function getDataForm(event) {

    //para prevenir la accion por defecto tanto form como de enlaces.
    //     event.preventDefault();

    //guardar tarea en el array
    //       let guardado = saveTask(listaTareas, newTask)

    //imprimirlo
    //       if (guardado === 'tarea guardada') {
    //         printOneTask(newTask, sectionTareas);
    //         id++;
            //reset de formulario
    //         event.target.reset(); // reset solo funciona para los formularios, para reiniciar los campos
    //       } else {
    //         alert(guardado);
    //         event.target.titulo.style.border = '3px solid red';
    //       }
    //     } else {
    //       alert('¡Introduce una tarea!');
    //     }
    //   }



//borrar del array - saber el id del elemento
function deleteTask(){
    function deleteItemArray(pId, pList) {
        //splice borrar por posición, tenemos una ID para saber su posición //findIndex devuelve la posición si se cumplela condición y -1 si no se cumple.
       let posicionBorrar = pList.findIndex((item) => item.id === pId);
        if (posicionBorrar !== -1) {
          pList.splice(posicionBorrar, 1);
        }
    }
}


// identifica el ID
    function deleteItem(event) {
     event.preventDefault();
     let id = parseInt(event.target.dataset.id);
     console.log(id, typeof id)
   }
    //  borrar fisicamente del DOM  //haremos tantos parentNode como nodos tengamos que subir
      const articleDelete = event.target.parentNode.parentNode; // REVISAR
      articleDelete.parentNode.removeChild(articleDelete);









// si event viene del inputSearch solo quiero que sea por la tecla intro
function getSearch(event) {

    let word = ""
    if(event.target.id === 'btn1'){
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
