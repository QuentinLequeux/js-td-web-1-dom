// 04-DOM : DONNEZ DU STYLE À VOS ÉLÉMENTS
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/

/*
DOM - PREPA 8 : « Couleurs » :
1. Demandez à l'utilisateur de choisir la couleur de texte et la couleur de fond qu'il souhaite appliquer aux titres
   (indiquez-lui qu'il doit vous fournir la couleur souhaitée sous son nom anglais ou bien en utilisant le format hexadécimal ou RGB).
   Le message pourrait être celui-ci : 'Entrez la couleur de texte que vous souhaitez appliquer aux titres
   (utilisez soit le nom anglais de la couleur, soit le format hexadécimal, soit le format RGB) :' ;
2. Utilisez ces couleurs pour satisfaire les préférences de votre utilisateur
*/

const couleur1 = prompt("Entrez la couleur de texte que vous souhaitez appliquer aux titres (utilisez soit le nom anglais de la couleur, soit le format hexadécimal, soit le format RGB) :");
const couleur2 = prompt("Entrez la couleur de fond que vous souhaitez appliquer (utilisez soit le nom anglais de la couleur, soit le format hexadécimal, soit le format RGB) :");

const textColor = document.body
textColor.style.color = couleur1;
const backgroundColor = document.body;
backgroundColor.style.backgroundColor = couleur2;