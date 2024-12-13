const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");

modalTriggers.forEach(trigger => trigger.
addEventListener("click", toggleModal))

function toggleModal(){
    modalContainer.classList.toggle("active");
}

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche l'envoi par défaut

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const responseMessage = document.getElementById('responseMessage');

    // Validation simple
    if (!name || !email || !message) {
        responseMessage.style.color = 'red';
        responseMessage.textContent = 'Tous les champs sont obligatoires.';
        return;
    }

    if (!validateEmail(email)) {
        responseMessage.style.color = 'red';
        responseMessage.textContent = 'Veuillez entrer une adresse email valide.';
        return;
    }
    responseMessage.style.color = '#5cb85c';
    responseMessage.textContent = 'Votre message a été envoyé avec succès !';

    // Réinitialiser le formulaire
    document.getElementById('contactForm').reset();
});

// Fonction de validation de l'email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}