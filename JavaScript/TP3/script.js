// Nom : Mohamed Talhaoui
// Filière : Informatique et IA (S4) | 2024/2025

// Exercice 1 :
function verifierQuiz() {
    const bonnesReponses = {
        q1: "let",
        q2: "boolean",
        q3: "55",
        q4: "/",
        q5: "object"
    };

    // Recupere les reponses selectionnées par l'utilisateur
    const questions = document.querySelectorAll('.question');
    const resultat = document.getElementById("resultat");

    // Verifie les reponses de l'utilisateur
    let score = calculerScore(questions, bonnesReponses);

    // Verifie si toutes les questions ont ete répondues
    if (!toutesRepondues(questions)){
        return alert("Vous n'avez pas repondu a toutes les questions !");
    }

    // Affiche le resultat du quiz
    resultat.innerText = afficherResultat(score, questions.length)
}

function toutesRepondues(question){
    for (let i = 0; i < question.length; i++) {
        reponse = question[i].querySelector('input:checked');
        if (!reponse){
            return false;
        }
    }
    return true;
}

function calculerScore(question, bonnesReponses){
    let score = 0;
    for (let i = 0; i < question.length; i++) {
        const reponses = question[i].querySelectorAll('input');
        reponses.forEach(reponse => {
            if (reponse.checked){
                if(reponse.value == bonnesReponses[reponse.name]) score++;
            }
        });
    }
    return score;
}

function afficherResultat(score, total){
    return "Votre score est : " + score + "/" + total;
}
