const bouton = document.querySelector('.btn');
const paragraphe = document.querySelector('p');

bouton.addEventListener('click', function() {
    paragraphe.textContent = "Bravo ! Vous venez de modifier le contenu HTML avec JavaScript !";
    paragraphe.style.color = "#2563eb";
    paragraphe.style.fontWeight = "bold";
});