// 03-DOM : MODIFIEZ LA STRUCTURE DE LA PAGE
/*
DOM - PREPA 6 : « Tutos » : construire une liste de tutos JavaScript
Vous disposez d’un fichier HTML qui contient une nav.
1. Créer un objet tutos qui contient les tutoriels JavaScript suivants :
	- Openclassrooms : Apprenez à coder avec JavaScript : https://openclassrooms.com/fr/courses/2984401-apprenez-a-coder-avec-javascript
	- Openclassrooms : Créez des pages web interactives avec JavaScript : https://openclassrooms.com/fr/courses/3306901-creez-des-pages-web-interactives-avec-javascript/
	- Udemy : The Complete JavaScript Course 2019 : Build Real Projects! sur UDEMY : https://www.udemy.com/course/the-complete-javascript-course/
2. Parcourir cet objet pour récupérer ces infos afin d’afficher un menu créé dynamiquement dans la page Web :
	- Le titre du menu (créé dynamiquement avec JS) est « Mes tutos JavaScript »
	- Le libellé du lien est à chaque fois le texte qui précède le lien dans l’objet tutos
	- Pour chaque item, le lien mène vers l’adresse mentionnée dans l'objet tutos
	- Pour chaque lien, prévoyez un title (« Vers le site de … »,
		avec le texte qui précède le lien dans l’énoncé ci-dessus)
AIDE : Utilisez une boucle for/in pour parcourir l'objet tutos
*/

const tutos = {
    Openclassrooms1: "https://openclassrooms.com/fr/courses/2984401-apprenez-a-coder-avec-javascript",
    Openclassrooms2: "https://openclassrooms.com/fr/courses/3306901-creez-des-pages-web-interactives-avec-javascript/",
    Udemy: "https://www.udemy.com/course/the-complete-javascript-course/"
};

const nav = document.querySelector("nav");
const menu = document.createElement("h2");
menu.textContent = "Mes tutos Javascript";
nav.appendChild(menu);
const liste = document.createElement("ul");

for (const tutosKey in tutos) {
    const tutosTitle = tutosKey;
    const tutosLink = tutos[tutosKey];

    const listItem = document.createElement("li");
    const link = document.createElement("a");

    link.textContent = tutosTitle;
    link.href = tutosLink;
    link.title = `Vers le site de ${tutosTitle}`;

    listItem.appendChild(link);

    liste.appendChild(listItem);
}
nav.appendChild(liste);