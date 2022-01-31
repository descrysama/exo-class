class Promo {
    constructor(nom, prenom, age, email, numero, note) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.email = email;
        this.numero = numero;
        this.note = note;
    }
 
 addNotePoint(){
     return this.note += 6
 }
}

let Erwin = new Promo('gossin', 'erwin', '19', 'erwin@gmail.com', '0674859384', 6);
let Esteban = new Promo('girard', 'esteban', '18', 'esteban@gmail.com', '0674958424', 13);

console.log('La note de ' + Esteban.prenom + ' est de ' + Esteban.note);

console.log('Apres la reverification de son devoir la note de ' + Esteban.prenom + ' est de ' + Esteban.addNotePoint());

console.log('La note de ' + Erwin.prenom + ' est de ' + Erwin.note);

console.log('Apres la reverification de son devoir la note de ' + Erwin.prenom + ' est de ' + Erwin.addNotePoint());