let bouton = document.getElementById("btnAfficher");
let paragraphe = document.getElementById("zoneMessage");

bouton.addEventListener("click", () => {
    paragraphe.textContent = "Bonjour, vous aves clique sur le bouton !";
})