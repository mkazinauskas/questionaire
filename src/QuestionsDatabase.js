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
        new Question(
            'Ar galima naudoti darbo įrenginius, jeigu nėra visų gamintojo numatytų naudojimo dokumentų?',
            [
                new Answer(
                    'Galima, jeigu tai nėra potencialiai pavojingi įrenginiai.',
                    false
                ),
                new Answer(
                    'Negalima, darbdavys privalo turėti visus gamintojo numatytus darbo įrenginio naudojimo dokumentus.',
                    true
                ),
                new Answer(
                    'Galima, jeigu yra parengta darbo įrenginio naudojimo instrukcija.',
                    false
                ),
            ]
        ),
        new Question(
            'Kasmetinės atostogos suteikiamos:',
            [
                new Answer(
                    'už darbo stažą toje darbovietėje.',
                    false
                ),
                new Answer(
                    'už darbo metus.',
                    true
                ),
                new Answer(
                    'už kalendorinius metus.',
                    false
                ),
            ]
        ),
        new Question(
            'Kokių priemonių darbuotojų saugai ir sveikatai užtikrinti pirmiausiai turi imtis darbdaviui atstovaujantis asmuo ar jo pavedimu darbdavio įgaliotas asmuo, organizuodamas darbuotojų saugos ir sveikatos būklės vidinę kontrolę?',
            [
                new Answer(
                    'Organizuoti rizikos darbuotojų saugai ir sveikatai vertinimą.',
                    true
                ),
                new Answer(
                    'Įpareigoti padalinių vadovus įgyvendinti darbuotojų saugos ir sveikatos gerinimo priemones.',
                    false
                ),
                new Answer(
                    'Organizuoti įmonės darbuotojų saugos ir sveikatos būklės paso parengimą ir jo pildymą.',
                    false
                ),
            ]
        ),
        new Question(
            'Ką reiškia šis saugos ir sveikatos apsaugos ženklas? (skritulio forma; balta piktograma mėlyname fone)',
            [
                new Answer(
                    'Draudžiama dirbti be apsauginių priemonių.',
                    false
                ),
                new Answer(
                    'Būtina naudoti apsauginį pririšimą.',
                    true
                ),
                new Answer(
                    'Įspėjimas apie vykdomus darbus aukštyje.',
                    false
                ),
            ]
        ),  
        new Question(
            'Ar įmonėje, įstaigoje ar organizacijoje (toliau - įmonė), sudarant įmonės kolektyvinę sutartį, įmonės darbuotojų kolektyvą ir darbdavį, atstovauja įmonėje veikianti profesinė sąjunga ir įmonės vadovas arba įgalioti administracijos pareigūnai?',
            [
                new Answer(
                    'Taip',
                    true
                ),
                new Answer(
                    'Sprendžia darbdavys.',
                    false
                ),
                new Answer(
                    'Ne',
                    false
                ),
            ]
        ),   
        new Question(
            'Kokiais atvejais taikomi Darbuotojų, dirbančių potencialiai sprogioje aplinkoje, saugos nuostatai?',
            [
                new Answer(
                    'Dujas deginančių prietaisų, kuriems taikomi reikalavimai, nustatyti dujinį kurą deginančių prietaisų techniniame reglamente, naudojimui.',
                    false
                ),
                new Answer(
                    'Degių, labai degių skysčių gamybai, jų tvarkymui, naudojimui, saugojimui ir gabenimui.',
                    true
                ),
                new Answer(
                    'Sprogmenų arba chemiškai nepatvarių medžiagų gamybai, jų tvarkymui, naudojimui, saugojimui ir gabenimui.',
                    false
                ),
            ]
        ),       
        new Question(
            'Ką reiškia sąvoka „lengvas ir saugus darbas vaikui"?',
            [
                new Answer(
                    'Tai darbas, nepriskiriamas pavojingiems darbams.',
                    false
                ),
                new Answer(
                    'Tai darbas, kurio aplinkoje nėra rizikos veiksnių.',
                    false
                ),
                new Answer(
                    'Tai saugus darbas, kuris dėl atitinkamų užduočių pobūdžio ir atlikimo sąlygų nekenkia vaikų saugai, sveikatai, vystymuisi, netrukdo lankyti mokyklos.',
                    true
                ),
            ]
        ), 
        new Question(
            'Įmonėje, įstaigoje ar organizacijoje darbuotojų saugos ir sveikatos norminių teisės aktų nustatyta tvarka įrengiamos:',
            [
                new Answer(
                    'poilsio, persirengimo, sanitarinės bei asmens higienos patalpos su prausyklomis, dušais, tualetais.',
                    false
                ),
                new Answer(
                    'poilsio, persirengimo, drabužių, avalynės, asmeninių apsaugos priemonių laikymo patalpos arba vietos, sanitarinės bei asmens higienos patalpos su prausyklomis, dušais, tualetais.',
                    true
                ),
                new Answer(
                    'poilsio, persirengimo, avalynės, asmeninių apsaugos priemonių laikymo patalpos arba vietos, asmens higienos patalpos.',
                    false
                ),
            ]
        ), 
        new Question(
            'Kurią iš šių sąlygų privalo atitikti naudojamas savaeigis darbo įrenginys, kuris judėdamas gali kelti pavojų dirbantiesiems?',
            [
                new Answer(
                    'Įrenginys privalo turėti priemones, kurios apsaugotų nuo neleistino jo paleidimo, taip pat priemones, neleidžiančias įrenginiui savaime pajudėti iš vietos.',
                    true
                ),
                new Answer(
                    'Įrenginys privalo būti naudojamas tik tokiose zonose, į kurias nepatenka darbuotojai.',
                    false
                ),
                new Answer(
                    'Įrenginys privalo turėti aiškius atpažinimo ženklus.',
                    false
                ),
            ]
        ), 
        new Question(
            'Kas organizuoja pirmosios pagalbos suteikimą darbuotojams?',
            [
                new Answer(
                    'Asmens sveikatos priežiūros darbuotojas.',
                    false
                ),
                new Answer(
                    'Padalinio vadovas, o kai jo nėra - darbdavio įgaliotas asmuo ar darbdaviui atstovaujantis asmuo.',
                    true
                ),
                new Answer(
                    'Teisės aktai nereglamentuoja.',
                    false
                ),
            ]
        ), 
        new Question(
            'Profesinio poveikio ribinis dydis, pagal Darbuotojų apsaugos nuo cheminių veiksnių darbe nuostatus, tai:',
            [
                new Answer(
                    'darbuotojo įkvepiamame ore esančių neaiškios kilmės cheminių medžiagų kiekis.',
                    false
                ),
                new Answer(
                    'cheminio veiksnio darbuotojo kvėpavimo zonos ore vidutinės koncentracijos, išmatuotos per standartizuotą tyrimo laikotarpį, vidutinis leistinas dydis.',
                    false
                ),
                new Answer(
                    'cheminio veiksnio darbuotojo kvėpavimo zonos ore vidutinės koncentracijos, išmatuotos per standartizuotą tyrimo laikotarpį, didžiausias leistinas dydis.',
                    true
                ),
            ]
        ), 
    ]
    )
];

export default QuestionsDatabase;
