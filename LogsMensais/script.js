const dados = [
    {
        mes: "Janeiro",
        total: 9,
        ideal: 7,
        fora: 2,
        dias: [
            ["02/01/2025", 3, "ideal", 0, "N/A"],
            ["05/01/2025", 2, "ideal", 0, "N/A"],
            ["07/01/2025", 12, "acima", 6, "43m"],
            ["09/01/2025", 7, "ideal", 0, "N/A"],
            ["11/01/2025", 6, "ideal", 0, "N/A"],
            ["13/01/2025", 4, "ideal", 0, "N/A"],
            ["15/01/2025", 3, "ideal", 0, "N/A"],
            ["16/01/2025", 7, "ideal", 0, "N/A"],
            ["17/01/2025", -2, "abaixo", 9, "50m"]
        ]
    },

    {
        mes: "Fevereiro",
        total: 2,
        ideal: 1,
        fora: 1,
        dias: [
            ["03/02/2025", 5, "ideal", 0, "N/A"],
            ["18/02/2025", 14, "acima", 4, "35m"]
        ]
    },

    {
        mes: "Março",
        total: 1,
        ideal: 1,
        fora: 0,
        dias: [
            ["07/03/2025", 1, "ideal", 0, "N/A"]
        ]
    },

    {
        mes: "Abril",
        total: 3,
        ideal: 1,
        fora: 2,
        dias: [
            ["04/04/2025", 9, "ideal", 0, "N/A"],
            ["11/04/2025", 15, "acima", 3, "27m"],
            ["23/04/2025", -1, "abaixo", 5, "40m"]
        ]
    }
];

let registros = document.getElementById("LogsRegistros");

for (let i = 0; i < dados.length; i++) {
    let mes = dados[i];

    registros.innerHTML += `
        <div class="mesTitulo">${mes.mes}</div>

        <div class="logLinha">
            <div class="logInfo">
                <span class="total">${mes.total} registros</span>
                <span class="ideal">${mes.ideal} registros ideais</span>
                <span class="fora">${mes.fora} fora da média</span>
            </div>

            <div class="botao">+</div>
        </div>
    `;
}