// 03-DOM : MODIFIEZ LA STRUCTURE DE LA PAGE
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/
/*
DOM - PREPA 5 : « Journaux » : construire une liste de journaux
1. Stocker les urls de ces trois journaux français dans un tableau :
	- "http://lemonde.fr",
	- "http://lefigaro.fr",
	- "http://liberation.fr"
2. Ajouter la liste des journaux sur la page, dans la div d'id "contenu"
*/
/* ATTENTION : Le balisage HTML proposé dans la solution est incorrect.
Il a sans doute été simplifié à outrance dans un souci 
de rendre la génération la plus simple possible en JS.
TODO : améliorer le balisage HTML généré !!! */

const journaux = ["http://lemonde.fr",
    "http://lefigaro.fr",
    "http://liberation.fr"];

const divContenu = document.getElementById('contenu');

/*

const li1 = document.createElement("li");
li1.setAttribute("id", "monde");
divContenu.appendChild(li1);

const liContenu = document.body.querySelector("#monde");
const anchor = document.createElement("a");
anchor.textContent = "Le monde";
anchor.setAttribute("href", journaux[0]);
liContenu.appendChild(anchor);

*/
journaux.forEach(function(url){
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.textContent = url;
    //anchor.setAttribute(url, url);

    const li1 = document.createElement("li");
    li1.appendChild(anchor);

    divContenu.appendChild(li1);
});