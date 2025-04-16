const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o nome do heroi: ", (nomeHeroi) => {
    rl.question("Digite o XP do heroi: ", (inputXp) => {
        const Xp = parseInt(inputXp);
        let nivel = "";

        if (Xp < 1000) {
            nivel = "Ferro";
        } else if (Xp < 2000) {
            nivel = "Bronze";
        } else if (Xp < 5000) {
            nivel = "Prata";
        } else if (Xp < 6000) {
            nivel = "Ouro";
        } else if (Xp < 7000) {
            nivel = "Platina";
        } else if (Xp < 8000) {
            nivel = "Ascendente";
        } else if (Xp < 9000) {
            nivel = "Lendario";
        } else if (Xp < 10000) {
            nivel = "Divino";
        } else if (Xp > 10000) {
            nivel = "Imortal";
        } else {
            nivel = "XP invalido";
        }

        console.log("O heroi " + nomeHeroi + " tem o nivel " + nivel + " e " + Xp + " de XP.");
        rl.close();
    });
});