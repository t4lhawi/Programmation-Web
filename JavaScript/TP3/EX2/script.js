let bouuton = document.querySelector("#ajouterTache");
let liste = document.querySelector(".taches");


bouuton.addEventListener("click", () => {
    let nouvelleTache = document.createElement("li");
    nouvelleTache.textContent = "Nouvelle tache automatique";
    liste.appendChild(nouvelleTache);
});