//FUNCIONES A CREAR

// añadir TAREAS

// borrar TAREAS

//filtrar la prioridad de las tareas en URGENTE, DIARIA, SEMANAL Y MENSUAL (CADA UNA CON UN COLOR DIFERENTE, ASIGNADO EN EL MOMENTO DE LA CREACIÓN)

//SELECT CON EVENTO AL CAMBIO, BÚSQUEDA(filtrar) CON EVENTO AL PULSAR EL INTRO

//guardar listado de tareas en el array disponible en el modelo

//MAQUETAR EN BOOTSTRAP

const sectionTareas = document.querySelector(".row");
const newTask = document.querySelector("#addTask");
const filterTask = document.querySelector("#filterTask");

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");

const inputTitulo = document.querySelector('#titulo');
const mensajeTarea = document.querySelector('#mensajeTarea');
const inputPrioridad = document.querySelector('#prioridad');
function addTask() {}

function saveTask(pList, pTask) {
  let tareaDuplicada = pList.findIndex(
    (task) =>
      listaTareas.titulo.toLowerCase() === listaTareas.titulo.toLowerCase()
  );
  if (tareaDuplicada === -1) {
    pTask.id = listaTareas.length + 2;
    pList.push(pTask);
    return "Tarea añadida";
  }
  return "Tarea duplicada";
}

// function filterTaskByPriority(pList, pPriority){
// return.pList.filter((item) => item.prioridad === pPriority)
// }
// console.log(listaTareas, semanal)
//filterTaskByPriority(listaTareas,   )

// function printTask(){}

function printOneTask(pTask, pDom) {
  const article = document.createElement("article");
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  const btnDel = document.createElement("button");

  article.className = "rounded mb-2"
  article.classList.add(pTask.prioridad)

  btnDel.classList.add('btn')
  btnDel.className = "btn btn-outline-warning";
  btnDel.textContent = "Eliminar tarea";
  btnDel.dataset.titulo = pTask.titulo;
  btnDel.addEventListener("click", deleteTask);

  li.className = "list-group-item d-flex justify-content-between"
  li.textContent = pTask.titulo;

  ul.append(li, btnDel);
  article.append(ul);
  pDom.appendChild(article);
}

// PINTAR TODAS LAS TAREAS
function printAllTask(pList, pDom) {
  pList.forEach((task) => printOneTask(task, pDom));
}
printAllTask(listaTareas, sectionTareas);




function comprobarForm(pForm, ){
    const titulo = pForm.titulo.value;
    const prioridad = pForm.prioridad.value;
    //verifica campos vacios
    if (titulo === '' || prioridad === ''){
        return false;
    } //falta comprobar si esta repetida

}



   function getDataForm(event) {
    event.preventDefault();

      const mensajeErrorVacio = 'Los campos no pueden estar vacios'
      const mensajeErrorRepetido= 'Tarea repetida'


 //guardar tarea en el array
 if (comprobarForm (event.target, tareas)) {
    const newTask = {
        titulo: event.target.titulo.value,
        prioridad: event.target.prioridad.value
    }

    let guardado = saveTask(listaTareas, newTask)
 }

 //imprimirlo
        if (guardado === 'tarea guardada') {
          printOneTask(newTask, sectionTareas);
//          id++;

//reset de formulario
          event.target.reset();
          inputTitulo.classList = 'form-control';
          inputPrioridad.classList = 'form-control';
          mensajeTarea.textContent= '';
        } else {
            mensajeTarea.textContent= mensajeErrorRepetido;
                event.target.reset();
      }else {
        mensajeTarea.textContent = mensajeErrorVacio;
        inputTitulo.classList = 'form-control is-invalid';
        inputPrioridad.classList = 'form-control is-invalid'
        event.target.reset()
      }
}

//borrar del array - saber el id del elemento
 function deleteTask() {
   function deleteItemArray(pId, pList) {
     let posicionBorrar = pList.findIndex((item) => item.id === pId);
     if (posicionBorrar !== -1) {
       pList.splice(posicionBorrar, 1);
     }
   }
 }

//  identifica el ID
// function deleteItem(event) {
//   event.preventDefault();
//   let id = parseInt(event.target.dataset.id);
//   console.log(id, typeof id);
// }
//   borrar fisicamente del DOM  //haremos tantos parentNode como nodos tengamos que subir
// const articleDelete = event.target.parentNode.parentNode; // REVISAR
// articleDelete.parentNode.removeChild(articleDelete);

//  si event viene del inputSearch solo quiero que sea por la tecla intro
// function getSearch(event) {
//   let word = "";
//   if (event.target.id === "btn1") {
//     word = inputSearch.value;
//   } else if (event.target.id === "search")
//     if (event.key === "Enter") {
//   aqui quiero saber qué tecla toco
//       word = event.target.value;
//     }
// }
