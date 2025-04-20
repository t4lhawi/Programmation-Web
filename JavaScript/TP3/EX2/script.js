let bouuton = document.querySelector("#ajouterTache");
let liste = document.querySelector(".taches");


bouuton.addEventListener("click", () => {
    let nouvelleTache = document.querySelector("li");
    nouvelleTache.textContent = "Nouvelle tache automatique";
    liste.appendChild(nouvelleTache);
});