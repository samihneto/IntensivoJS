import gerarDiaDaSemana from "./gerarDiaDaSemana.js";

const inputItem = document.getElementById("input-item")
let contador = 0;

export default function criarItemDaLista() {

    if (inputItem.value === "") {
        alert("Por favor, insira um item!");
        return
    }

    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div"); // cria o elemento html
    containerItemDaLista.classList.add("lista-item-container"); // adiciona a classe ao elemento
    const inputCheckbox = document.createElement("input"); // cria o elemento html
    inputCheckbox.type = "checkbox"; // define um tipo para o input
    inputCheckbox.id = "checkbox-" + contador++; // incrementa o contador
    const nomeItem = document.createElement("p"); // cria o elemento html
    nomeItem.innerText = inputItem.value; // atribui o valor do input (string) ao texto interno do elemento html p

    inputCheckbox.addEventListener("click", function () {
        if (inputCheckbox.checked) {
            nomeItem.style.textDecoration = "line-through"
        } else {
            nomeItem.style.textDecoration = "none"
        }
    }) // esse add

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);
    itemDaLista.appendChild(containerItemDaLista);

    const dataCompleta = gerarDiaDaSemana();

    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta;
    itemData.classList.add("texto-data");

    itemDaLista.appendChild(itemData);

    return itemDaLista;
}