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

const btnAdd = document.querySelector("#btn-add");
const btnFilter = document.querySelector("#btn-filter");

const formAddTask = document.querySelector("#addTask");
const formFilterTask = document.querySelector("#filterTask");

const toastEl = document.querySelector(".toast");
const toast = bootstrap.Toast.getOrCreateInstance(toastEl);

const mensaje = document.querySelector("#mensaje");
mensaje.innerHTML = "";
const p = document.createElement("p");



//AÑADIR UNA TAREA)
function saveTask(pList, pTask) {
  let tareaDuplicada = pList.findIndex(
    (task) => pTask.titulo.toLowerCase() === task.titulo.toLowerCase()
  );
  if (tareaDuplicada === -1) {
    pTask.id = listaTareas.length + 2;
    pList.push(pTask);
    return "Tarea añadida";
  }
  return "Tarea duplicada";
}

//PINTAR UNA TAREA
function printOneTask(pTask, pDom) {

    const article = document.createElement("article");
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    const btnDel = document.createElement("button");

    article.className = "rounded mb-2  col-12 col-md-6 col-lg-4";
    article.classList.add(pTask.prioridad);

  btnDel.classList.add("btn");
  btnDel.className = "btn btn-outline-warning";
  btnDel.textContent = "Eliminar tarea";
  btnDel.dataset.titulo = pTask.titulo;
  btnDel.dataset.id = pTask.id;
  btnDel.addEventListener("click", deleteTask);

  li.className = "list-group-item d-flex justify-content-space-between";
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

//COMPROBAR TAREA (INPUTS)
function comprobarForm(pForm) {
    return pForm.titulo.value && pForm.prioridad.value ? true : false;
    //   const titulo = pForm.titulo.value;
    //   const prioridad = pForm.prioridad.value;
       //verifica campos vacios
    //   if (titulo === "" && prioridad === "") {
        //     return false;
        //   } //falta comprobar si esta repetida
    }
//EVENT HANDLER
    function getDataForm(event) {
        event.preventDefault();

        const tieneValores = comprobarForm(formAddTask);
        if (!tieneValores) {
            p.innerText = "Tienes que poner el titulo y prioridad";
            mensaje.appendChild(p);
            toast.show();
            return;
        }

        const newTask = {
            id: listaTareas.length + 1,
            titulo: event.target.titulo.value,
            prioridad: event.target.prioridad.value,
        };

        const existe = listaTareas.find((tarea) => newTask.titulo === tarea.titulo);
        // falsy => undefined, null, 0, ''

        // comprobar si existe en la lista de tareas
        if (!existe) {
            listaTareas.push(newTask);
            printOneTask(newTask, sectionTareas);
            // console.log("Tarea añadida");
            // alert("Tarea añadida");
            toast.show();
            p.innerText = "Tarea añadida";
            mensaje.appendChild(p);
        } else {
            // console.log("La tarea ya existe");
            // alert("La tarea ya existe");
    toast.show();
    p.innerText = "La tarea ya existe";
    mensaje.appendChild(p);
}
    }
//ELIMINAR TAREA
function deleteTask(event) {
    const taskId = +event.target.dataset.id;
                    listaTareas = listaTareas.filter((tarea) => tarea.id !== taskId);
                    sectionTareas.innerHTML = "";
                    toast.show();
                    p.innerText = "Tarea eliminada";
                    mensaje.appendChild(p);
                    printAllTask(listaTareas, sectionTareas);
}


//FILTRAR TAREAS
// function filterByPriority(pList, pPriority){
//     let listaFiltrada = []
//     for(let task of pList){
//         if(task.prioridad.toLowerCase().includes(pPriority.toLowerCase())){
//             listaFiltrada[listaFiltrada.length] = task;
//         }
//     }
//     return listaFiltrada
// }
// filterByPriority (listaTareas, 'prioridad')

const selectFilter = document.querySelector("#filter-tareas");
selectFilter.addEventListener('change',filterByPriority)

const inputFilter = document.querySelector('#find-tarea')
inputFilter.addEventListener('input', getTitulo);



function filterByPriority(pList, pPriority) {
    return listaTareas.filter(tarea => tarea.prioridad.toLowerCase() === pPriority.toLowerCase());
}

function getPrioridades(event){
    let listaFiltrada = filterByPriority(listaTareas, event.target.value)
    printAllTask(listaFiltrada, sectionTareas);
}

function filterByWord(pList, pWord) {
    return listaTareas.filter(tarea => tarea.titulo.toLowerCase() === pWord.toLowerCase())
}

function getTitulo(event) {
    let palabraBuscar = event.target.value;
    let listaFiltrada2 = filterByWord(listaTareas, palabraBuscar);
    printAllTask(listaFiltrada2, sectionTareas);
    }


function getSearch(event) {
    let word = "";
    if (event.target.id === "btnAdd") {
        word = inputSearch.value;
    } else if (event.target.id === "inputFilter")
    if (event.key === "Enter") {
    //aqui quiero saber qué tecla toco
    word = event.target.value;
    }
}
