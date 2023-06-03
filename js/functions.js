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



function saveTask(pList, pTask){
    let tareaDuplicada = pList.findIndex(task => listaTareas.mail === listaTareas.mail)
    if (tareaDuplicada === -1){
        pList.push(pTask);
        return 'Tarea añadida'
    }
    return 'Tarea duplicada'
}



function deleteTask(){

}


function printTask(){


}
// function printOneEmployee(pEmployee, pDom) {
//     const article = document.createElement('article');
//     const h3 = document.createElement('h3');
//     const ul = document.createElement('ul');

//     h3.textContent = pEmployee.name;
//     ul.innerHTML = `<li>Edad:${pEmployee.age}</li>
//                   <li>Email: ${pEmployee.mail}</li>
//                   <li>Puesto: ${pEmployee.job}</li>
//                   <li>Salario: ${pEmployee.salary}</li>`;
//     article.append(h3, ul);
//     pDom.appendChild(article);
//   }





// si event viene del inputSearch solo quiero que sea por la tecla intro
async function getSearch(event) {

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




// esta funcion es un manejador de eventos (eventhandler)
    //  function getDataForm(event) {

    //para prevenir la accion por defecto tanto form como de enlaces, debo hacerlos lo primero de todo.
    //     event.preventDefault();

    //para capturar los campos de un formulario nos valemos de su name para recoger value.
    //     if (comprobarForm(event.target)){
    //       const newEmployee = {
    //         id: id,
    //         name: event.target.name.value,
    //         age: parseInt(event.target.age.value),
    //         mail: event.target.mail.value,
    //         job: event.target.job.value,
    //         salary: Number(event.target.salary.value),
    //       }


    //guardar el empleado en el array
    //       let guardado = saveEmployee(employees, newEmployee)

    //imprimirlo
    //       if (guardado === 'usuario guardado') {
    //         printOneEmployee(newEmployee, sectionEmployees);
    //         id++;
            //reset de formulario
    //         event.target.reset(); // reset solo funciona para los formularios, para reiniciar los campos
    //       } else {
    //         alert(guardado);
    //         event.target.mail.style.border = '3px solid red';
    //       }
    //     } else {
    //       alert('Los campos no pueden ser vacios');
    //     }
    //   }



// PINTAR TODAS LAS TAREAS
    //   function printAllEmployee(pList, pDom) {
    //     pList.forEach((employee) => printOneEmployee(employee, pDom));
    //   }
    //   printAllEmployee(employees, sectionEmployees);
