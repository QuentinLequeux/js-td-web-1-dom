// 03-DOM : MODIFIEZ LA STRUCTURE DE LA PAGE
/*
SOURCE :
- https://openclassrooms.com/fr/courses/3306901-creez-des-pages-web-interactives-avec-javascript/3501891-modifiez-la-structure-de-la-page
- https://github.com/oc-courses/javascript-web
*/

/* EXERCICE RÉCAPITULATIF : 
Vous disposez d'un document HTML contenant juste un body
et un titre "Mes jeux". Écrire le code JS qui
- place dans un objet "mesJeux" les 3 jeux suivants avec leur catégorie
	* League of Legends	: jeu de stratégie/action
	* World of Warcraft : MMORPG (jeu de rôle en ligne massivement multijoueur)
	* Call of Duty - Modern Warfare : FPS (jeu de tir)
	* Fifa 2020 : jeu de simulation
- parcourt le tableau avec une boucle pour récupérer ces infos
  et afficher dans le HTML, au chargement de la page, une liste
  d'id "jeux" créée dynamiquement qui reprend les jeux suivis de
  leur catégorie entre parenthèses  
  */

const divMesJeux = document.createElement("div");
divMesJeux.textContent = "";
const ulMesJeux = document.createElement("ul");
ulMesJeux.textContent = "";

/*

const listeJeux = ["League of Legends : jeu de stratégie/action",
    "World of Warcraft : MMORPG (jeu de rôle en ligne massivement multijoueur)",
    "Call of Duty - Modern Warfare : FPS (jeu de tir)",
    "Fifa 2020 : jeu de simulation"];

*/

const li1 = document.createElement("li");
li1.textContent = "League of Legends : jeu de stratégie/action";
const li2 = document.createElement("li");
li2.textContent = "World of Warcraft : MMORPG (jeu de rôle en ligne massivement multijoueur)";
const li3 = document.createElement("li");
li3.textContent = "Call of Duty - Modern Warfare : FPS (jeu de tir)";
const li4 = document.createElement("li");
li4.textContent = "Fifa 2020 : jeu de simulation";

const jeux = document.body;

jeux.insertAdjacentElement("beforeend", divMesJeux);
divMesJeux.setAttribute("id", "jeux");

const jeux1 = document.body.querySelector("#jeux");

jeux1.appendChild(ulMesJeux);
ulMesJeux.setAttribute("id", "jeux1");

const jeux2 = document.querySelector("#jeux1");

//jeux2.appendChild(listeJeux[0]);
jeux2.appendChild(li1);
jeux2.appendChild(li2);
jeux2.appendChild(li3);
jeux2.appendChild(li4);