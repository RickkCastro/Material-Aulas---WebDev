function executarPush() {
    //Adiciona um item no final do array
    const frutas = ["🍎", "🍌"];
    frutas.push("🍇");
    const resultado = frutas;
    document.getElementById("resultado-push").textContent = resultado;
}

function executarPop() {
    //Remove um item do final do array
    const array = ["🍎", "🍌", "🍇"];
    array.pop();
    const resultado = array;
    document.getElementById("resultado-pop").textContent = resultado;
}

function executarShift() {
    //Remove o primeiro elemento do array
    const array = ["🍎", "🍌", "🍇"];
    array.shift();
    const resultado = array;
    document.getElementById("resultado-shift").textContent = resultado;
}

function executarUnshift() {
    //Adiciona um item no começo do array
    const array = ["🍌", "🍇"];
    array.unshift("🍎");
    const resultado = array;
    document.getElementById("resultado-unshift").textContent = resultado;
}

function executarIncludes() {
    const array = ["🍎", "🍌", "🍇🥝"];
    const resultado = array.includes("🥝");
    document.getElementById("resultado-includes").textContent = resultado;
}

function executarReverse() {
    const array = ["🍎", "🍌", "🍇"];
    array.reverse();
    const resultado = array;
    document.getElementById("resultado-reverse").textContent = resultado;
}

function executarSort() {
    const array = [3, 1, 4, 2, 11];
    const array2 = ["Brasil", "Argentina", "Noruega", "Italia"];

    const resultado = array.sort((a, b) => a - b);
    document.getElementById("resultado-sort").textContent = resultado;
    const resultado2 = array2.sort();
    document.getElementById("resultado-sort2").textContent = resultado2;
}

function executarSlice() {
    const array = ["🍎", "🍌", "🍇", "🍓"];
    const resultado = array;
    document.getElementById("resultado-slice").textContent = resultado;
}

function executarSplice() {
    const array = ["🍎", "🍌", "🍇"];
    const resultado = array;
    document.getElementById("resultado-splice").textContent = resultado;
}

function executarIndexOf() {
    const array = ["🍎", "🍌", "🍇"];
    const resultado = array;
    document.getElementById("resultado-indexof").textContent = resultado;
}

function executarJoin() {
    const array = ["🍎", "🍌", "🍇"];
    const resultado = array;
    document.getElementById("resultado-join").textContent = resultado;
}

/* Loops de array */

function executarForEach() {
    const array = ["🍎", "🍌", "🍇"];
    const resultado = array.forEach((item, index) => console.log(item, index));
    document.getElementById("resultado-foreach").textContent = resultado;
}

function executarMap() {
    const array = ["🍎", "🍌", "🍇"];
    const resultado = array.map((item) => `😂 ${item}`);
    document.getElementById("resultado-map").textContent = resultado;
}

function executarMapHTML() {
    const dispositivos = ["🎮", "🕹️", "💻"];
    const resultado = "Resultado da operação map inserindo HTML";
    document.getElementById("resultado-map-html").innerHTML =
        resultado.join("<br>");
}

function executarFilter() {
    const array = ["l", "la", "lau", "laur", "laura"];
    const resultado = array.filter(function (item) {
        return item.includes("laur");
    });
    document.getElementById("resultado-filter").textContent = resultado;
}

function executarFind() {
    const array = ["l", "la", "lau", "laur", "laura"];
    const resultado = array.find(function (item) {
        return item.includes("laur");
    });
    document.getElementById("resultado-find").textContent = resultado;
}

function executarFindIndex() {
    const array = ["🍎", "🍌", "🍇"];
    const resultado = array.findIndex((item) => item === "🍇");
    document.getElementById("resultado-findIndex").textContent = resultado;
}

function executarReduce() {
    const array = [1, 2, 3, 4];
    const resultado = array.reduce((total, valorAtual) => total + valorAtual);
    document.getElementById("resultado-reduce").textContent = resultado;
}

function executarEvery() {
    const array = [10, 20, 30, 40];
    const resultado = "Resultado da operação every";
    document.getElementById("resultado-every").textContent = resultado;
}

function executarSome() {
    const array = ["🍎", "🍌", "🥝"];
    const resultado = "Resultado da operação some";
    document.getElementById("resultado-some").textContent = resultado;
}

/* Encadeamento */

function executarEncadeamento() {
    const jogos = ["Zelda", "Mario", "Elden Ring", "Fortnite", "Minecraft"];
    const resultado = "Resultado da operação encadeada";
    document.getElementById("resultado-encadeamento").textContent =
        resultado.join(", ") || "Nenhum jogo encontrado";
}
