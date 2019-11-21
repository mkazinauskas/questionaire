class Answer {
    constructor(text, isCorrect) {
        this.text = text;
        this.isCorrect = isCorrect;
    }
}

class Question {
    constructor(title, answers) {
        this.title = title;
        this.answers = answers;
    }
}

class TestGroup {
    constructor(name, questions) {
        this.name = name;
        this.questions = questions
    }
}

const QuestionsDatabase = [
    new TestGroup(
        '14-1', [
        new Question(
            'Nelaimingų atsitikimų darbe tyrimo ir apskaitos nuostatai nustato',
            [
                new Answer(
                    'nelaimingų atsitikimų darbe tyrimo, tyrimo dokumentų saugojimo, skundų ir pareiškimų nagrinėjimo tvarką',
                    false
                ),
                new Answer(
                    'lengvų, sunkių ir mirtinų nelaimingų atsitikimų darbe bei nelaimingų atsitikimų pakeliui į darbą ar iš darbo nagrinėjimo tvarką.',
                    false
                ),
                new Answer(
                    'pranešimų apie įvykius darbe, dėl kurių darbuotojai patiria žalą sveikatai (toliau - įvykis darbe), nelaimingus atsitikimus pakeliui į darbą ar iš darbo, įvykių darbe ir nelaimingų atsitikimų pakeliui į darbą ar iš darbo tyrimo, apskaitos, tyrimo dokumentų saugojimo, skundų, susijusių su tyrimu, nagrinėjimo tvarką.',
                    true
                ),
            ]
        ),
    ]
    )
];

export default QuestionsDatabase;
