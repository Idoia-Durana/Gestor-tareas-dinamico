  // accedemos a los elementos del DOM y los almacenamos en una variable

  const inputTarea = document.getElementById('input-tarea');
  const agregarTarea = document.getElementById('agregar-tarea');
  const listaTareas = document.getElementById('lista-tareas');
  const infoInput = document.querySelector('#infoinput small')

  agregarTarea.addEventListener('click', agregarLista);

  function agregarLista() {

    let tarea = inputTarea.value.trim()

    if (tarea == "") {
        infoInput.textContent = 'Escribe algo primero'
        return;
    }
    const itemTarea = document.createElement('li');
    itemTarea.classList = "list-group-item ";
    itemTarea.innerHTML = `${tarea} 
    <button class="eliminar-tarea btn"> Eliminar </button>`;
    itemTarea.tabIndex = 0;
    const btnClose = itemTarea.querySelector('button');
    btnClose.addEventListener('click', removeItemTarea);
    function removeItemTarea() {
        listaTareas.removeChild(itemTarea);
    }
    listaTareas.appendChild(itemTarea);
    inputTarea.value = "";
    infoInput.textContent = '';
    inputTarea.focus();
}
