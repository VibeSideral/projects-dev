const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function determinarNivel(vitorias, derrotas) {
    if (vitorias < 5 && derrotas < 5) {
        return "Ferro";
    } else if (vitorias > 10 && derrotas < 10) {
        return "Bronze";
    } else if (vitorias > 25 && derrotas < 25) {
        return "Prata";
    } else if (vitorias > 50 && derrotas < 50) {
        return "Ouro";
    } else if (vitorias > 100 && derrotas < 100) {
        return "Platina";
    } else if (vitorias > 101 && derrotas <= 200) {
        return "Ascendente";
    } else if (vitorias > 201 && derrotas <= 300) {
        return "Lendario";
    } else if (vitorias > 301 && derrotas <= 400) {
        return "Divino";
    } else if (vitorias > 401 && derrotas <= 500) {
        return "Imortal";
    } else {
        return "Dados invalidos.";
    }
}

function iniciarPrograma() {
    rl.question("Digite o número de vitorias: ", (vit) => {
        const vitorias = parseInt(vit);

        rl.question("Digite o número de derrotas: ", (der) => {
            const derrotas = parseInt(der);

            const nivel = determinarNivel(vitorias, derrotas);
            console.log("O Herói tem saldo de " + vitorias +" Vitorias e possui nivel: " + nivel);

            rl.close();
        });
    });
}

iniciarPrograma();