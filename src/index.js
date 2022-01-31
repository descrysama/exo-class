class Magicien {
    constructor(strength, health, magic, weapon, niveau) {
        this.strength = strength;
        this.health = health;
        this.magic = magic;
        this.weapon = weapon;
        this.niveau = niveau;
    }
    Attack(e) {
        this.niveau = this.niveau+1;
        this.magic = this.magic-5;
        e.health = e.health - 20;
    }

}

class Guerrier {
    constructor(strength, health, weapon, niveau) {
        this.strength = strength;
        this.health = health;
        this.weapon = weapon;
        this.niveau = niveau;
    }

    Attack(e) {
        this.niveau = this.niveau + 2;
        this.strength = this.strength - 5;
        e.health = e.health - 30;
    }

}

let forms = document.getElementById('forms');
let enemyThor = document.getElementsByName('enemyThor');
let enemyGandalf = document.getElementsByName('enemyGandalf');
let enemyOdin = document.getElementsByName('enemyOdin');

let Gandalf = new Magicien(50, 80, 90, 'Plume du phénix', 1);
let Thor = new Guerrier(90, 100, 'Mjonlir', 1);
let Odin = new Guerrier(90, 100, 'Mjonlir', 1);


function ShowStatus() {
    document.getElementById('status-Gandalf').textContent = 
    'Force : ' + Gandalf.strength + 
    ' Vie : ' + Gandalf.health + 
    ' Magie : ' + Gandalf.magic + 
    " Avec l'arme : " + Gandalf.weapon + 
    '. Il est maintenant Niveau ' + Gandalf.niveau;

    document.getElementById('status-Thor').textContent = 
    'Force : ' + Thor.strength + 
    ' Vie : ' + Thor.health + 
    " Avec l'arme : " + Thor.weapon + 
    '. Il est maintenant Niveau ' + Thor.niveau;
    document.getElementById('status-Odin').textContent = 
    'Force : ' + Odin.strength + 
    ' Vie : ' + Odin.health + 
    " Avec l'arme : " + Odin.weapon + 
    '. Il est maintenant Niveau ' + Odin.niveau;
}



let tour = 1;
document.getElementById('Tour').textContent += " " + tour;
forms.addEventListener('submit', function(e) {
    e.preventDefault();
    // Boucle radio Gandalf
    for (let i = 0; i < enemyGandalf.length; i++) {
        if (enemyGandalf[i].checked) {
            if (enemyGandalf[i].value == 'Thor') {
                Gandalf.Attack(Thor)
            } else if (enemyGandalf[i].value == 'Odin') {
                Gandalf.Attack(Odin)
            }
        }
    }
    // Boucle radio Thor
    for (let i = 0; i < enemyThor.length; i++) {
        if (enemyThor[i].checked) {
            if (enemyThor[i].value == 'Gandalf') {
                Thor.Attack(Gandalf)
            } else if (enemyThor[i].value == 'Odin') {
                Thor.Attack(Odin)
            }
        }
    }
    // Boucle radio Odin
    for (let i = 0; i < enemyOdin.length; i++) {
        if (enemyOdin[i].checked) {
            if (enemyOdin[i].value == 'Thor') {
                Odin.Attack(Thor)
            } else if (enemyOdin[i].value == 'Gandalf') {
                Odin.Attack(Gandalf)
            }
        }
    }
    tour++
    document.getElementById('Tour').textContent = " " + tour;
    ShowStatus()
})


