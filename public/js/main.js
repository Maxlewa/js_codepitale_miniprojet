// PATIENTS

class Patient {
    constructor (nom, maladie, argent, poche, etat) {
        this.nom = nom
        this.maladie = maladie
        this.argent = argent
        this.poche = poche
        this.etat = etat
        this.seDeplacer = (x) => {
            x.personnes.push(this);
            console.log(`${this.nom} est allé à ${x.nom}`);
        }
        this.prendreMedoc = () => {
        };
        this.traitement = () => {
        };
    }
}

let Marcus = new Patient ("Marcus", "mal indenté", 100, "vide", "malade")
let Optimus = new Patient ("Optimus", "unsave", 200, "vide", "malade")
let Sangoku = new Patient ("Sangoku", 404, 80, "vide", "malade")
let DarthVader = new Patient ("DarthVader", "azmatique", 110, "vide", "malade")
let Semicolon = new Patient ("Semicolon", "synthaxError", 60, "vide", "malade")

// etat du patien change en "traitement" quand il va chez le doc
// argent du patient diminue de 50 euros

// PHARMACIE

let pharmacie = {
    nom: "pharmacie",
    personnes: [],
    ctrl_maj_f: 60,
    saveOnFocusChange: 100,
    checkLinkRelation: 35,
    ventoline: 40,
    f12_doc: 20,
}

let cimetiere = []
let ksaara = []

// DOCTOR

let doctor = {
    nom: "Dupont",
    argent: 1000,
    cabinet : [chat = {
        nom : "lechat",
        race : "sphynx",
        miauler() {
            setInterval(() => {
                console.log(`${this.nom} miaule`);
            }, 2000);
        },
    },],
    diagnostic() {
        if (this.cabinet.length == 2) {
            switch (this.cabinet[1].maladie) {
                case "mal indenté":
                    console.log(`La maladie de ${this.cabinet[1].nom} est ${this.cabinet[1].maladie}`);
                    console.log(`Le traitement de ${this.cabinet[1].nom} est ctrl+maj+f`);
                    this.cabinet[1].traitement = () => {
                        if (pharmacie.ctrl_maj_f <= this.cabinet[1].argent) {
                            this.cabinet[1].argent -= pharmacie.ctrl_maj_f
                            console.log(`${this.cabinet[1].nom} a acheté son médicament`)
                            this.cabinet[1].poche = "ctrl+maj+f";
                        } else if (pharmacie.ctrl_maj_f > this.cabinet[1].argent) {
                            console.log(`${this.cabinet[1].nom} est trop pauvre`);
                        }
                    }
                    this.cabinet[1].prendreMedoc = () => {
                        if (this.cabinet[1].poche == "vide") {
                            this.etat = "mort";
                            console.log(`${this.cabinet[1].nom} meurt`);
                            cimetiere.push(this.cabinet[1]);
                        } else {
                            this.etat = "gueri";
                            console.log(`${this.cabinet[1].nom} prend son ${this.cabinet[1].poche} et est désormais guérit! Il fait la fête.`);
                            ksaara.push(this.cabinet[1]);
                        }
                    };
                    this.cabinet[1].argent -= 50;
                    console.log(`${this.cabinet[1].nom} à payé le docteur`);
                    console.log(`${this.cabinet[1].nom} à ${this.cabinet[1].argent} euros actuellement`);
                    console.log(`${this.cabinet[1].nom} à quitté le cabinet`);
                    this.cabinet[1].seDeplacer(pharmacie);
                    this.cabinet[1].traitement();
                    this.cabinet[1].prendreMedoc();
                    this.cabinet.splice(1, 1);
                    this.diagnostic();
                    break;
                case "unsave":
                    console.log(`La maladie de ${this.cabinet[1].nom} est ${this.cabinet[1].maladie}`);
                    console.log(`Le traitement de ${this.cabinet[1].nom} est saveOnFocusChange`);
                    this.cabinet[1].traitement = () => {
                        if (pharmacie.saveOnFocusChange <= this.cabinet[1].argent) {
                            this.cabinet[1].argent -= pharmacie.saveOnFocusChange
                            console.log(`${this.cabinet[1].nom} à acheté son médoc`)
                            this.cabinet[1].poche = "saveOnFocusChange";
                        } else if (pharmacie.saveOnFocusChange > this.cabinet[1].argent) {
                            console.log(`${this.cabinet[1].nom} est trop pauvre`);
                        }
                    };
                    this.cabinet[1].prendreMedoc = () => {
                        if (this.cabinet[1].poche == "vide") {
                            this.etat = "mort";
                            console.log(`${this.cabinet[1].nom} meurt`);
                            cimetiere.push(this.cabinet[1]);
                        } else {
                            this.etat = "gueri";
                            console.log(`${this.cabinet[1].nom} prend son ${this.cabinet[1].poche} et est désormais guérit! Il fait la fête.`);
                            ksaara.push(this.cabinet[1]);
                        }
                    };
                    this.cabinet[1].argent -= 50;
                    console.log(`${this.cabinet[1].nom} a payé le docteur`);
                    console.log(`${this.cabinet[1].nom} a ${this.cabinet[1].argent} euros actuellement`);
                    console.log(`${this.cabinet[1].nom} a quitté le cabinet`);
                    this.cabinet[1].seDeplacer(pharmacie);
                    this.cabinet[1].traitement();
                    this.cabinet[1].prendreMedoc();
                    this.cabinet.splice(1, 1);
                    this.diagnostic();
                    break;
                case "404":
                    console.log(`La maladie de ${this.cabinet[1].nom} est ${this.cabinet[1].maladie}`);
                    console.log(`Le traitement de ${this.cabinet[1].nom} est checkLinkRelation`);
                    this.cabinet[1].traitement = () => {
                        if (pharmacie.saveOnFocusChange <= this.cabinet[1].argent) {
                            this.cabinet[1].argent -= pharmacie.checkLinkRelation
                            console.log(`${this.cabinet[1].nom} a acheté son médoc`)
                            this.cabinet[1].poche = "checkLinkRelation";
                        } else if (pharmacie.saveOnFocusChange > this.cabinet[1].argent) {
                            console.log(`${this.cabinet[1].nom} est trop pauvre`);
                        }
                    };
                    this.cabinet[1].prendreMedoc = () => {
                        if (this.cabinet[1].poche == "vide") {
                            this.etat = "mort";
                            console.log(`${this.cabinet[1].nom} meurt`);
                            cimetiere.push(this.cabinet[1]);
                        } else {
                            this.etat = "gueri";
                            console.log(`${this.cabinet[1].nom} prend son ${this.cabinet[1].poche} et est désormais guérit! Il fait la fête.`);
                            ksaara.push(this.cabinet[1]);
                        }
                    };
                    this.cabinet[1].argent -= 50;
                    console.log(`${this.cabinet[1].nom} a payé le docteur`);
                    console.log(`${this.cabinet[1].nom} a ${this.cabinet[1].argent} euros actuellement`);
                    console.log(`${this.cabinet[1].nom} a quitté le cabinet`);
                    this.cabinet[1].seDeplacer(pharmacie);
                    this.cabinet[1].traitement();
                    this.cabinet[1].prendreMedoc();
                    this.cabinet.splice(1, 1);
                    this.diagnostique();
                    break;
                case "azmatique":
                    console.log(`La maladie de ${this.cabinet[1].nom} est ${this.cabinet[1].maladie}`);
                    console.log(`Le traitement de ${this.cabinet[1].nom} est ventoline`);
                    this.cabinet[1].traitement = () => {
                        if (pharmacie.ventoline <= this.cabinet[1].argent) {
                            this.cabinet[1].argent -= pharmacie.ventoline
                            console.log(`${this.cabinet[1].nom} a acheté son médoc`)
                            this.cabinet[1].poche = "ventoline";
                        } else if (pharmacie.ventoline > this.cabinet[1].argent) {
                            console.log(`${this.cabinet[1].nom} est trop pauvre`);
                        }
                    };
                    this.cabinet[1].prendreMedoc = () => {
                        if (this.cabinet[1].poche == "vide") {
                            this.etat = "mort";
                            console.log(`${this.cabinet[1].nom} meurt`);
                            cimetiere.push(this.cabinet[1]);
                        } else {
                            this.etat = "gueri";
                            console.log(`${this.cabinet[1].nom} prend son ${this.cabinet[1].poche} et est désormais guérit ! Youhou`);
                            ksaara.push(this.cabinet[1]);
                        }
                    };
                    this.cabinet[1].argent -= 50;
                    console.log(`${this.cabinet[1].nom} a payé le docteur`);
                    console.log(`${this.cabinet[1].nom} a ${this.cabinet[1].argent} euros actuellement`);
                    console.log(`${this.cabinet[1].nom} a quitté le cabinet`);
                    this.cabinet[1].seDeplacer(pharmacie);
                    this.cabinet[1].traitement();
                    this.cabinet[1].prendreMedoc();
                    this.cabinet.splice(1, 1);
                    this.diagnostic();
                    break;
                case "synthaxError":
                    console.log(`La maladie de ${this.cabinet[1].nom} est ${this.cabinet[1].maladie}`);
                    console.log(`Le traitement de ${this.cabinet[1].nom} est f12+doc`);
                    this.cabinet[1].traitement = () => {
                        if (pharmacie.f12_doc <= this.cabinet[1].argent) {
                            this.cabinet[1].argent -= pharmacie.f12_doc
                            console.log(`${this.cabinet[1].nom} à acheté son médoc`)
                            this.cabinet[1].poche = "f12+doc";
                        } else if (pharmacie.f12_doc > this.cabinet[1].argent) {
                            console.log(`${this.cabinet[1].nom} est trop pauvre`);
                        }
                    };
                    this.cabinet[1].prendreMedoc = () => {
                        if (this.cabinet[1].poche == "vide") {
                            this.etat = "mort";
                            console.log(`${this.cabinet[1].nom} meurt`);
                            cimetiere.push(this.cabinet[1]);
                        } else {
                            this.etat = "gueri";
                            console.log(`${this.cabinet[1].nom} prend son ${this.cabinet[1].poche} et est désormais guérit! Il fait la fête.`);
                            ksaara.push(this.cabinet[1]);
                        }
                    };
                    this.cabinet[1].argent -= 50;
                    console.log(`${this.cabinet[1].nom} a payé le docteur`);
                    console.log(`${this.cabinet[1].nom} a ${this.cabinet[1].argent} euros actuellement`);
                    console.log(`${this.cabinet[1].nom} a quitté le cabinet`);
                    this.cabinet[1].seDeplacer(pharmacie);
                    this.cabinet[1].traitement();
                    this.cabinet[1].prendreMedoc();
                    this.cabinet.splice(1, 1);
                    this.diagnostic();
                    break;  
                default: 
                    break;
            }
        } else if (this.cabinet.length < 2) {
            if (this.patientIn.length > 0) {
                console.log(`Dans la salle d'attente il y a ${this.patientIn.length} personnes`);
                this.cabinet.push(this.patientIn[0]);
                console.log(`${this.cabinet[1].nom} est rentré dans le cabinet`);
                this.patientIn.splice(0, 1);
                this.diagnostic();
            } else {
                console.log("Le cabinet est fermé");
            }
        }
    },
    patientIn: [Marcus, Optimus, Sangoku, DarthVader, Semicolon],
    patientOut: [],
}

doctor.diagnostic();
doctor.cabinet[0].miauler();
console.log(ksaara);
console.log(cimetiere);