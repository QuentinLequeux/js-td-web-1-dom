// 02-DOM : PARCOUREZ LE DOM
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/

/*
 DOM - PREPA 3 : « Instruments » : attributs et classes
- Créez une fonction getInfosLiens qui doit afficher :
    - le nombre total de liens dans la page web ;
    - la cible du premier et du dernier lien.
    N.B. Cette fonction doit afficher un résultat correct, quel que soit le nombre de liens présents dans la page.
- Ajoutez un nouvel instrument à la page web, puis vérifiez le nouveau résultat de votre programme.
    <li id="clavecin" class="cordes pincees">
        Le <a href="https://fr.wikipedia.org/wiki/Clavecin">clavecin</a>
    </li>
- Écrivez la fonction possede qui vérifie qu'un élément avec un certain id possède une classe
- Testez grâce à cette foncion 
    - si l'élément d'id "saxophone" possède la classe "bois" (doit afficher true)
    - si l'élément d'id "saxophone" possède la classe "cuivre" (doit afficher false)
    - si l'élément d'id "trompette" possède la classe "cuivre" (doit afficher true)
    - si l'élément d'id "contrebasse" possède la classe "cordes" (doit afficher "Aucun élément ne possède l'id contrebasse")
*/

function getInfosLiens() {
    const liens = document.body.querySelectorAll("a");
    console.log(liens.length);
    console.log(liens[0]);
    console.log(liens[4]);
}

const liste1 = document.body.querySelector("ul");
const harpe = document.createElement("li");
harpe.textContent = "La ";
liste1.appendChild(harpe);
harpe.id = "harpe";
const liste2 = document.body.querySelector("#harpe")
const lien = document.createElement("a");
lien.textContent = "harpe";
liste2.appendChild(lien);
lien.setAttribute("href", "https://fr.wikipedia.org/wiki/Harpe");

getInfosLiens();

function possede(id, classe) {
    const element = document.getElementById(id);
    if (element && element.classList.contains(classe)) {
        return true;
    } else {
        return false;
    }
}

console.log(possede("saxophone", "bois"));
console.log(possede("saxophone", "cuivre"));
console.log(possede("trompette", "cuivre"));
console.log(possede("contrebasse", "cordes"));