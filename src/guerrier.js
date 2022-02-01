class Guerrier {
    constructor(strength, health, weapon, niveau) {
        this.strength = strength;
        this.health = health;
        this.weapon = weapon;
        this.niveau = niveau;
    }

    Regen() {
        this.health += 20;
    }

    AttackMagicien(enemy) {
        if (enemy.constructor.name != Gandalf.constructor.name) {
            console.log('Nous sommes Alliés');
        }else {
            this.niveau = this.niveau + 2;
            this.strength = this.strength - 5;
            enemy.health = enemy.health - 30;
            console.log('nice Attack');
        }
    }

}

export default Guerrier;