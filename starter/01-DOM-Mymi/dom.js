/*
Exercices qui accompagnent le tuto en anglais de Christian Heilmann :
« The essentials of DOM scripting in 10 minutes »,
http://icant.co.uk/articles/domessentials/
=> voir traduction française sur transparents (js-cours-DOM.pdf)
*/

/* 1. Cibler l'élément d'id nav */

console.log(document.getElementById("nav"));

/* 2. Récupérer tous les li */

console.log(document.querySelectorAll("li"));

/* 3. Cibler le 4e li */

console.log(document.getElementById("nav").children[3]);
console.log(document.querySelector("li:nth-child(4)"));

/* 4. Compter le nombre de li dans la page */

console.log(document.getElementById("nav").children.length);

/* 5. Cibler le premier li pair */

console.log(document.querySelector("li:nth-child(odd)"));

/* 6. Récupérer tous les li de classe impair */

/* a) afficher ce qu'on obtient */

const impairs = document.querySelectorAll(".impair");

for (const impair of impairs) {
    console.log(impair);
}

console.log(document.getElementById('nav').childNodes)

/* b) afficher le 2e li de classe impair */

console.log(impairs[1]);

/* c) afficher chacun des li impair */

console.log(document.querySelectorAll("li:nth-child(even)"));

/* d) compter le nombre de li de classe impair dans la page */

console.log(document.querySelectorAll(".impair").length);

/* 7. Cibler le 4e li puis, à partir de là, cibler son frère juste avant lui */

console.log(document.getElementById("nav").children[3].previousElementSibling);

/* 8. Cibler le 4e li puis, à partir de là, cibler le suivant */

console.log(document.getElementById("nav").children[3].nextElementSibling);

/* 9. Cibler le parent du 4e li */

console.log(document.getElementById("nav").children[3].parentElement);

/* 10. Récupérer tous les enfants de l'ul */

console.log(document.getElementById("nav").children);

/* a) afficher ce qu'on obtient */

/* b) cibler le 1er enfant de l'ul */

console.log(document.getElementById("nav").firstChild);

/* c) cibler le dernier enfant de l'ul */

console.log(document.getElementById("nav").lastChild);

/* c) cibler le 4e enfant de l'ul */

console.log(document.getElementById("nav").children[3]);

/* 11. Chaînage de méthodes - que retournent les expressions suivantes ? */
/* a) document.getElementById("nav"). getElementsByTagName("li")[3].firstChild */

console.log(document.getElementById("nav").getElementsByTagName("li")[3].firstChild);

//href du troisième li

/* b) document. getElementsByTagName("li")[2].childNodes[3].firstChild */

//console.log(document.getElementsByTagName("li")[2].childNodes[3].firstChild);

//noeud du troisième li

/* c) document. getElementsByTagName("li")[2].firstChild.firstChild */

console.log(document.getElementsByTagName("li")[2].firstChild.firstChild);

//Troisième li, premier enfant du premier enfant (texte)

/* 12. Afficher les propriétés (nom du nœud, type de nœud, valeur du nœud) d'un nœud
*/
/* a) du noeud document.getElementById("nav").getElementsByTagName("li")[3].firstChild */

console.log(document.getElementById("nav").getElementsByTagName("li")[3].firstChild);

//A, 1, null

/*

let node = document.getElementById("nav").getElementsByTagName("li")[3].firstChild;

console.log("Nom du nœud:", node.nodeName);
console.log("Type de nœud:", node.nodeType);
console.log("Valeur du nœud:", node.nodeValue);

*/

/* b) du noeud document.getElementById("nav").getElementsByTagName("a")[2].firstChild */

console.log(document.getElementById("nav").getElementsByTagName("a")[2].firstChild);

//troisième a, preimier enfant: Text, 3, photos

/*

let node = document.getElementById("nav").getElementsByTagName("a")[2].firstChild;

console.log("Nom du nœud:", node.nodeName);
console.log("Type de nœud:", node.nodeType);
console.log("Valeur du nœud:", node.nodeValue);

*/

/* 13. Changer le texte "Photos" en "Visuals" */

const visuals = document.getElementById("nav").getElementsByTagName("li")[3].firstChild;

console.log(visuals.innerHTML);

visuals.innerHTML = "Visuals";

/* 14. Modifier les attributs d'un élément */
/* a) Changer la valeur de l'attribut href du lien "Photos" en "photos.php" */

const href = document.getElementById("nav").getElementsByTagName("li")[3].firstChild;

console.log(href);

href.setAttribute("href", "photos.php");

/* a) Lui ajouter un attribut title avec la valeur "voir mes photos" */

href.setAttribute("title", "voir mes photos");

/* 15. Supprimer le dernier li du menu
       (faites-le en utilisant la méthode querySelector pour cibler l'ul
        et querySelectorAll pour cibler les li)
*/

const remove = document.getElementById("nav").getElementsByTagName("li")[5];

console.log(remove);

remove.remove();

/* 16. Ajouter un li à la fin de la liste */

const nouveau = document.createElement("li");

nouveau.textContent = "Quentin";

const liste = document.getElementById("nav");

liste.appendChild(nouveau);

/* 17. Ajouter un lien dans le menu. Ce lien doit
	- venir avant "photos",
	- afficher le texte "Bibliographie",
	- pointer vers la page "biblio.html" et
	- afficher au survol la boîte de dialogue avec le texte "consulter ma bibliographie"  */

const menu = document.createElement("li");
const menu2 = document.createElement("a");

menu2.textContent = "Bibliographie";

liste.insertBefore(menu, liste.childNodes[1]);
menu.appendChild(menu2);

menu2.setAttribute("href","biblio.html" );
menu2.setAttribute("title","consulter ma bibliographie");

/* 18. Modifier le lien "Photos"
	  - changer son libellé en "Visuals" 
	  - ajouter une boîte de dialogue au survol avec le texte "voir la galerie" 
	  - changer la cible du lien en "visuals.html " */



/* 19. Dupliquer le li "Photos" et s'en servir pour ajouter un lien
	   - juste après le lien "Photos"
	   - dont le libellé est "Visuals" 
	   - avec une boîte de dialogue au survol qui affiche le texte "voir la galerie" 
	   - qui pointe vers la page "visuals.html " */

function duplicate() {
    let origin = document.getElementById("nav").getElementsByTagName("li")[4];
    let clone = origin.cloneNode(true);
    var conteneur = document.getElementById("nav").getElementsByTagName("li")[4];
    conteneur.insertAdjacentElement("afterend", clone);
}

duplicate();

/* 20. Remplacer le dernier lien par le texte (non cliquable) "Contact : monmail@gmail.com"*/

const last = document.getElementById("nav").getElementsByTagName("li")[7];

last.innerHTML = "Contact : monmail@gmail.com";