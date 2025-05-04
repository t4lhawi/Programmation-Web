// Nom : Mohamed Talhaoui
// Filière : Informatique et IA (S4) | 2024/2025

// Exercice 1 :
class Quiz {
    constructor(){
    }

    verifierQuiz() {
        const bonnesReponses = {
            q1: "let",
            q2: "boolean",
            q3: "55",
            q4: "/",
            q5: "object"
        };

        // Recupere les reponses selectionnées par l'utilisateur avec jQuery
        const questions = $(".question");
        const resultat = $("#resultat");

        // Verifie les reponses de l'utilisateur
        let score = this.calculerScore(questions, bonnesReponses);

        // Verifie si toutes les questions ont ete répondues
        if (!this.toutesRepondues(questions)){
            return alert("Vous n'avez pas repondu a toutes les questions !");
        }

        // Affiche le resultat du quiz avec jQuery
        resultat.text(this.afficherResultat(score, questions.length));
    }

    toutesRepondues(question){
        for (let i = 0; i < question.length; i++) {
            let reponse = question[i].querySelector("input:checked");
            if (!reponse){
                return false;
            }
        }
        return true;
    }

    calculerScore(question, bonnesReponses){
        let score = 0;
        for (let i = 0; i < question.length; i++) {
            const reponses = question[i].querySelectorAll("input");
            reponses.forEach(reponse => {
                if (reponse.checked){
                    if(reponse.value == bonnesReponses[reponse.name]) score++;
                }
            });
        }
        return score;
    }

    afficherResultat(score, total){
        return "Votre score est : " + score + "/" + total;
    }
}

// Cree un objet par class Quiz
const quiz = new Quiz();

// Evenement Click avec jQuery
$("button").click(function () { 
    quiz.verifierQuiz();
});