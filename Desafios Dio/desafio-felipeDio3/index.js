class Hero {
    constructor(name, type, power, health, mana) {
        this.name = name;
        this.type = type;
        this.power = power;
        this.health = health;
        this.mana = mana;
    }

    attack(manaCost = 0) {
        if (this.mana >= manaCost) {
            this.mana -= manaCost;
            console.log(
                `${this.name} (${this.type}) ataca com ${this.power} de poder usando ${manaCost} de mana. Mana restante: ${this.mana}`
            );
        } else {
            console.log(`${this.name} (${this.type}) não tem mana suficiente para atacar.`);
        }
    }

    heal(healAmount = 0, manaCost = 0) {
        if (this.mana >= manaCost) {
            this.health += healAmount;
            this.mana -= manaCost;
            console.log(
                `${this.name} (${this.type}) se cura em ${healAmount} de vida, utilizando ${manaCost} de mana. Mana restante: ${this.mana}, Vida restante: ${this.health}`
            );
        } else {
            console.log(`${this.name} (${this.type}) não tem mana suficiente para se curar.`);
        }
    }
}

class Mage extends Hero {
    constructor(name) {
        super(name, "Mage", 30, 100, 150);
    }

    attack() {
        super.attack(50);
    }

    heal() {
        super.heal(50, 30);
    }
}

class Assasin extends Hero {
    constructor(name) {
        super(name, "Assasin", 40, 120, 60);
    }

    attack() {
        super.attack();
    }

    heal() {
        super.heal(20, 30);
    }
}

class Archer extends Hero {
    constructor(name) {
        super(name, "Archer", 50, 80, 20);
    }

    attack() {
        super.attack();
    }
}

class Warrior extends Hero {
    constructor(name) {
        super(name, "Warrior", 100, 180, 0);
    }

    attack() {
        super.attack();
    }
}

console.log("Criando os heróis e testando suas habilidades:");
console.log("-------------------------------------------------");

const mage = new Mage("Gandalf");
mage.attack();
mage.heal();

const assasin = new Assasin("Ezio");
assasin.attack();
assasin.heal();

const archer = new Archer("Legolas");
archer.attack();

const warrior = new Warrior("Thor");
warrior.attack();

console.log("-------------------------------------------------");

console.log(`mage.attack() O mago ataca com ${mage.power} de poder usando o seu cajado e usa 50 de mana.`);
console.log(`assasin.attack() O assassino ataca com ${assasin.power} de poder com sua adaga.`);
console.log(`archer.attack() O arqueiro ataca com ${archer.power} de poder com seu arco e flecha.`);
console.log(`warrior.attack() O guerreiro ataca com ${warrior.power} de poder usando sua Espada.`);