import Guerrier from '/dist/guerrier.js';
import Magicien from '/dist/magicien.js';

let forms = document.getElementById('forms');
let enemyThor = document.getElementsByName('enemyThor');
let enemyGandalf = document.getElementsByName('enemyGandalf');
let enemyOdin = document.getElementsByName('enemyOdin');
let enemyMerlin = document.getElementsByName('enemyMerlin');

let Gandalf = new Magicien(50, 80, 90, 'Plume du phénix', 1);
let Merlin = new Magicien(60, 90, 110, 'Magie du Belialiun', 1);
let Thor = new Guerrier(90, 100, 'Mjonlir', 1);
let Odin = new Guerrier(90, 100, 'Mjonlir', 1);


function ShowStatus() {
    document.getElementById('status-Gandalf').textContent = 
    'Force : ' + Gandalf.strength + 
    ' Vie : ' + Gandalf.health + 
    ' Magie : ' + Gandalf.magic + 
    " Avec l'arme : " + Gandalf.weapon + 
    '. Il est maintenant Niveau ' + Gandalf.niveau;

    document.getElementById('status-Merlin').textContent = 
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
                Gandalf.AttackGuerrier(Thor)
            } else if (enemyGandalf[i].value == 'Odin') {
                Gandalf.AttackGuerrier(Odin)
            } else if (enemyGandalf[i].value == 'Merlin') {
                Merlin.AttackGuerrier(Merlin)
            }
        }
    }
    // Boucle radio Merlin
    for (let i = 0; i < enemyMerlin.length; i++) {
        if (enemyMerlin[i].checked) {
            if (enemyMerlin[i].value == 'Thor') {
                Merlin.AttackGuerrier(Thor)
            } else if (enemyMerlin[i].value == 'Odin') {
                Merlin.AttackGuerrier(Odin)
            } else if (enemyMerlin[i].value == 'Gandalf') {
                Merlin.AttackGuerrier(Gandalf)
            }
        }
    }
    // Boucle radio Thor
    for (let i = 0; i < enemyThor.length; i++) {
        if (enemyThor[i].checked) {
            if (enemyThor[i].value == 'Gandalf') {
                Thor.AttackMagicien(Gandalf)
            } else if (enemyThor[i].value == 'Odin') {
                Thor.AttackMagicien(Odin)
            } else if (enemyThor[i].value == 'Merlin') {
                Thor.AttackMagicien(Merlin)
            }
        }
    }
    // Boucle radio Odin
    for (let i = 0; i < enemyOdin.length; i++) {
        if (enemyOdin[i].checked) {
            if (enemyOdin[i].value == 'Thor') {
                Odin.AttackMagicien(Thor)
            } else if (enemyOdin[i].value == 'Gandalf') {
                Odin.AttackMagicien(Gandalf)
            } else if (enemyOdin[i].value == 'Merlin') {
                Thor.AttackMagicien(Merlin)
            }
        }
    }
    tour++
    document.getElementById('Tour').textContent = " " + tour;
    ShowStatus()
})
