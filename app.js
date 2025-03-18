let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome !== "") {
        amigos.push(nome);
        atualizarLista();
        input.value = ""; 
        input.focus(); 
    } else {
        alert("Por favor, digite um nome");
    }
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
