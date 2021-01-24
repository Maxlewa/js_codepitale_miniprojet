// PATIENTS

class Patient {
    constructor (nom, maladie, argent, poche, etat) {
        this.nom = nom
        this.maladie = maladie
        this.argent = argent
        this.poche = poche
        this.etat = etat
        this.seDeplacer = (x) => {
            this.lieu = x.nom
            console.log(personne.nom + " est actuellement à la " + personne.lieu)
        }
        prendreMedoc()
        payer()
    }
}

let Marcus = new Patient ("Marcus", "mal indenté", 100, "vide", "malade")
let Optimus = new Patient ("Optimus", "unsave", 200, "vide", "malade")
let Sangoku = new Patient ("Sangoku", 404, 80, "vide", "malade")
let DarthVader = new Patient ("DarthVader", "azmatique", 110, "vide", "malade")
let Semicolon = new Patient ("Semicolon", "synthaxError", 60, "vide", "malade")

// DOCTOR

let doctor = {
    salleAttente : [],
    cabinet : {
        room : [],
        chat : {
            nom : "chat",
            race : "sphynx",
        }
    },
}

// etat du patien change en "traitement" quand il va chez le doc
// argent du patient diminue de 50 euros

// PHARMACIE

let pharmacie = {

}

let cimetière = []