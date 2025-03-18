let amigos = [];

function agregarAmigo() {
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
