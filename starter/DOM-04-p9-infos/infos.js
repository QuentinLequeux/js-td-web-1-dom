// 04-DOM : DONNEZ DU STYLE À VOS ÉLÉMENTS
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/

/*
DOM - PREPA 9 : « Infos » : informations sur un élément
Récupérez la largeur et la hauteur de la section d'id "contenu"
et affichez les deux informations dans une liste
(un item pour la largeur et un item pour la hauteur)
que vous insérez dans la section d'id "infos" après le titre
*/

const contenu = document.getElementById("contenu");
const infos = document.getElementById("infos");
const height = contenu.offsetHeight;
const width = contenu.offsetWidth;

const liste1 = document.createElement("li");
const liste2 = document.createElement("li");
liste1.textContent = `Height = ${height} px`;
liste2.textContent = `Width = ${width} px`;
infos.appendChild(liste1);
infos.appendChild(liste2);