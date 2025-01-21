// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim(); // Obtenemos el valor del input y lo limpiamos

    if (nombre !== "") {
        amigos.push(nombre); // Agregamos el nombre a la lista
        mostrarListaAmigos(); // Actualizamos la lista visual
    }

    input.value = ''; // Limpiamos el campo de texto
}

// Función para mostrar la lista de amigos en la interfaz
function mostrarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiamos la lista existente

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear los amigos secretos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("¡Necesitas al menos dos personas para sortear!");
        return;
    }

    // Creamos una copia de la lista de amigos y la mezclamos
    const amigosSorteados = [...amigos];
    const resultados = [];

    // Mientras haya amigos disponibles para sortear
    while (amigosSorteados.length > 0) {
        const amigo = amigosSorteados.pop(); // Sacamos un amigo de la lista
        let amigoSecreto;

        // Aseguramos que no se sortee a sí mismo
        do {
            amigoSecreto = amigosSorteados[Math.floor(Math.random() * amigosSorteados.length)];
        } while (amigoSecreto === amigo);

        // Guardamos el resultado
        resultados.push(`${amigo} --> ${amigoSecreto}`);

        // Eliminamos al amigo secreto de la lista
        amigosSorteados.splice(amigosSorteados.indexOf(amigoSecreto), 1);
    }

    mostrarResultado(resultados); // Mostramos el resultado
}

// Función para mostrar el resultado del sorteo
function mostrarResultado(resultados) {
    const resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = ''; // Limpiamos el resultado previo

    resultados.forEach(resultado => {
        const li = document.createElement('li');
        li.textContent = resultado;
        resultadoLista.appendChild(li);
    });
}
