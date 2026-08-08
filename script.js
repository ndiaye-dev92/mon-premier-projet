const bouton = document.querySelector('.btn');
const paragraphe = document.querySelector('p');

// Variable pour suivre l'état
let estModifie = false;

bouton.addEventListener('click', function() {
    if (!estModifie) {
        paragraphe.textContent = "Texte modifié avec succès !";
        paragraphe.style.color = "#2563eb";
        bouton.textContent = "Réinitialiser";
        estModifie = true;
    } else {
        paragraphe.textContent = "Je maîtrise désormais les bases du HTML, du CSS, de Git et de GitHub !";
        paragraphe.style.color = "#64748b";
        bouton.textContent = "En savoir plus";
        estModifie = false;
    }
});