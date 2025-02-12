// <p class "ce que je veux "> = plusieurs nom de paragraphe

// on recupère le h1 de la page
const pageTitle = document.querySelector('h1');
// on recupère l'élément avec l'id newsletter (# est utilisé pour les ids)
const subscribeButton = document.querySelector('#newsletter'); 

const hasSubscribed = true;

// si on a souscrit, on change le texte du bouton :
if (hasSubscribed) {
	pageTitle.innerText = 'Mes recette de tarte au citron 🍋';
}


function hello () {
    alert('HELOOOO!!');
}
subscribeButton.addEventListener('click' , hello); 