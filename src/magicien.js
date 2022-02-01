class Magicien {
    constructor(strength, health, magic, weapon, niveau) {
        this.strength = strength;
        this.health = health;
        this.magic = magic;
        this.weapon = weapon;
        this.niveau = niveau;
    }

    Regen() {
        this.health += 20;
    }

    AttackGuerrier(enemy) {
        if (enemy.constructor.name != Thor.constructor.name) {
            console.log('Nous sommes Alliés');
        }else {
            this.niveau = this.niveau + 2;
            this.strength = this.strength - 5;
            enemy.health = enemy.health - 30;
            console.log('nice Attack');
        }
    }


}

export default Magicien