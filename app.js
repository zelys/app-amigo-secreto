// ----- Lógica de la aplicación -----
// 1. Leer el texto ingresado en el input (class="input-name").
// 2. Capturar el evento click del botón (class="button-add").
// 3. Agregar la cadena de texto a una lista.
// 4. Mostrar los elementos de la lista en el DOM (class="name-list").
// 5. Limpiar el input después de agregar el texto.
// 6. Capturar el evento click del botón sorteo (class="button-draw").
// 7. Mostar el elemento aleatorio de la lista en el DOM (class="name-draw").

// Lista para almacenar los nombres
let nameList = [];

// Obtener referencias a los elementos del DOM
const inputName = document.querySelector('.input-name');
const buttonAdd = document.querySelector('.button-add');
const buttonDraw = document.querySelector('.button-draw');
const nameListElement = document.querySelector('.name-list');
const nameDrawElement = document.querySelector('.result-list');

// Evento keypress del input
inputName.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addName();
    }
});

// Evento click del botón agregar
buttonAdd.addEventListener('click', addName);

// Evento click del botón sorteo
buttonDraw.addEventListener('click', () => {
    if (nameList.length > 0) {
        const randomIndex = Math.floor(Math.random() * nameList.length);
        const randomName = nameList[randomIndex];
        
        nameDrawElement.textContent = randomName;
    } else {
        showError('No hay nombres en la lista');
    }
});

// Función para agregar nombre
function addName() {
    const name = inputName.value.trim();
    
    if (validateName(name)) {
        // Agregar el nombre en minúsculas para comparaciones
        nameList.push(name.toLowerCase());
        displayNameList();
        inputName.value = '';
    }
}

// Función para mostrar la lista en el DOM
function displayNameList() {
    nameListElement.innerHTML = '';
    
    nameList.forEach(name => {
        const li = document.createElement('li');
        // Mostrar el nombre con la primera letra en mayúscula
        li.textContent = name.charAt(0).toUpperCase() + name.slice(1);
        nameListElement.appendChild(li);
    });
}

// 6. Evento click del botón sorteo
buttonDraw.addEventListener('click', () => {
    if (nameList.length > 0) {
        // Obtener un elemento aleatorio de la lista
        const randomIndex = Math.floor(Math.random() * nameList.length);
        const randomName = nameList[randomIndex];
        
        // 7. Mostrar el nombre seleccionado en el DOM
        nameDrawElement.textContent = randomName.charAt(0).toUpperCase() + randomName.slice(1);
    } 
});

// Función para mostrar la lista en el DOM
function displayNameList() {
    // Limpiar la lista actual
    nameListElement.innerHTML = '';
    
    // Crear y agregar elementos para cada nombre
    nameList.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name.charAt(0).toUpperCase() + name.slice(1);
        nameListElement.appendChild(li);
    });
}

// ----- Funcionalidades extra -----
// 1. Capturar el evento keypress del input para agregar el nombre con la tecla Enter.
// 2. Validar que el nombre no esté repetido en la lista.
// 3. Validar que no se ingresen número o caracteres especiales en el input.
// 4. Mostrar pop-up al usuario para mensajes de error.

// Función para validar el nombre
function validateName(name) {
    // Verificar si está vacío
    if (name === '') {
        showError('Ingresa un nombre válido');
        return false;
    }

    // Validar que solo contenga letras y espacios
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(name)) {
        showError('El nombre solo puede contener letras');
        return false;
    }

    // Validar que no esté repetido
    if (nameList.includes(name.toLowerCase())) {
        showError('Este nombre ya existe en la lista');
        return false;
    }

    return true;
}

// 4. Función para mostrar mensajes de error
function showError(message) {
    const popup = document.createElement('div');
    popup.className = 'error-popup';
    popup.textContent = message;
    
    document.body.appendChild(popup);
    
    // Estilos para el popup
    popup.style.position = 'fixed';
    popup.style.top = '20px';
    popup.style.alignContent = 'center';
    popup.style.padding = '15px';
    popup.style.backgroundColor = '#ff4444';
    popup.style.color = 'white';
    popup.style.fontFamily = 'Inter, sans-serif'
    popup.style.borderRadius = '5px';
    popup.style.zIndex = '1000';
    
    // Eliminar el popup después de 3 segundos
    setTimeout(() => {
        popup.remove();
    }, 3000);
}

