import Answer from "./Answer";
import Question from "./Question";
import TestGroup from "./TestGroup";

const QUESTIONS_15_1 = new TestGroup(
    '15-1', [
        new Question(
            'Kuris atsakymas tiksliausiai apibrėžia sąvoką "darbo vieta"?',
            [
                new Answer(
                    'Darbuotoją tiesiogiai supančios erdvės dalis, kurioje jį gali veikti pavojingi, kenksmingi veiksniai.',
                    false
                ),
                new Answer(
                    'Vieta, kurioje asmuo dirba darbo sutartyje sulygtą darbą arba atlieka viešojo administravimo funkcijas.',
                    true
                ),
                new Answer(
                    'Vieta, kurioje, atliekant darbus, išdėstomi darbams reikalingi mechanizmai, įrenginiai, medžiagos, įrankiai, būtinos saugos priemonės.',
                    false
                ),
            ]
        ),
        new Question(
            'Darbuotojas ar darbdavys (-iai), kurio (-ių) įmonėje (-ėse) buvo atliekamas darbuotojo darbo sąlygų tyrimas, nesutinkantys su profesinės ligos patvirtinimo aktu, ne vėliau kaip per 2 mėnesius nuo profesinės ligos patvirtinimo akto gavimo gali jį skųsti:',
            [
                new Answer(
                    'teismui Lietuvos Respublikos administracinių bylų teisenos įstatymo nustatyta tvarka.',
                    false
                ),
                new Answer(
                    'Lietuvos Respublikos vyriausiajam valstybiniam darbo inspektoriui.',
                    false
                ),
                new Answer(
                    'Centrinei darbo medicinos ekspertų komisijai.',
                    true
                ),
            ]
        ),
        new Question(
            'Ar, vertinant profesinę riziką, iš darbuotojų renkama ir apibendrinama informacija apie pavojingus įvykius ir profesinės rizikos veiksnius, esamus ar galinčius atsirasti jų darbo vietose?',
            [
                new Answer(
                    'Taip.',
                    true
                ),
                new Answer(
                    'Teisės aktai nereglamentuoja.',
                    false
                ),
                new Answer(
                    'Ne.',
                    false
                ),
            ]
        ),
        new Question(
            'Triukšmo keliamos rizikos vertinimą įmonėje organizuoja:',
            [
                new Answer(
                    'darbdaviui atstovaujantis asmuo ar jo pavedimu darbdavio įgaliotas asmuo darbuotojų saugai ir sveikatai.',
                    true
                ),
                new Answer(
                    'darbuotojų atstovas saugai ir sveikatai.',
                    false
                ),
                new Answer(
                    'kompetencijos reikalavimus rizikos veiksnių tyrimo įstaigoms atitinkančios arba Akredituotosios įstaigos.',
                    false
                ),
            ]
        ),
        new Question(
            'Ar darbdaviui atstovaujantis asmuo, organizuodamas darbą įmonėje, įstaigoje. organizacijoje ar kitoje organizacinėje struktūroje nustato darbuotojų saugos ir sveikatos būklės vidinę kontrolę, darbo ir poilsio režimą, darbo apmokėjimą taip, kad būtų sudarytos sąlygos, skatinančios darbuotojus laikytis darbuotojų saugos ir sveikatos reikalavimų?',
            [
                new Answer(
                    'Ne.',
                    false
                ),
                new Answer(
                    'Taip.',
                    true
                ),
                new Answer(
                    'Teisės aktai nereglamentuoja.',
                    false
                ),
            ]
        ),
        new Question(
            'N-1 formos aktas surašomas asmeniui, kai įvykis darbe įvyksta:',
            [
                new Answer(
                    'susižalojus ar mirus darant nusikalstamą veiką.',
                    false
                ),
                new Answer(
                    'vykdant veiklą, už kurią įstatymų nustatyta tvarka mokamas vidutinis darbo užmokestis.',
                    true
                ),
                new Answer(
                    'dėl smurto, jeigu smurto aplinkybės ir motyvai nesusiję su darbu.',
                    false
                ),
            ]
        ),
        new Question(
            'Ar reikia darbuotojus, kuriems darbe kyla profesinė rizika dėl triukšmo, apmokyti ir informuoti apie triukšmo keliamą riziką?',
            [
                new Answer(
                    'Taip.',
                    true
                ),
                new Answer(
                    'Teisės aktai nereglamentuoja.',
                    false
                ),
                new Answer(
                    'Ne.',
                    false
                ),
            ]
        ),
        new Question(
            'Ką privalo išduoti darbdaviui atstovaujantis ar jo įgaliotas asmuo, siųsdamas įsidarbinantį asmenį tikrintis sveikatą?',
            [
                new Answer(
                    'Privalomo sveikatos patikrinimo medicininės pažymos formą F Nr. 047/a.',
                    true
                ),
                new Answer(
                    'Asmens medicininę knygelę (sveikatos pasą) F Nr. 048/a.',
                    false
                ),
                new Answer(
                    'Išrašą iš ambulatorinės kortelės F Nr. 027/a.',
                    false
                ),
            ]
        ),
        new Question(
            'Maisto produktų gamybos įmonėje dirba 20 darbuotojų. Ar darbuotojų saugos ir sveikatos tarnybos funkcijas gali vykdyti pats darbdavys?',
            [
                new Answer(
                    'Gali, jeigu turi aukštąjį išsilavinimą ir darbuotojų saugos ir sveikatos specialisto pažymėjimą.',
                    false
                ),
                new Answer(
                    'Pats darbdavys negali, tačiau gali pavesti darbdavio įgaliotam asmeniui.',
                    false
                ),
                new Answer(
                    'Negali.',
                    true
                ),
            ]
        ),
        new Question(
            'Kas suteikia darbuotojų atstovams saugai ir sveikatai reikalingą informaciją, aprūpina juos reikiamomis priemonėmis ir skiria pakankamai laiko jų darbo laiku jiems pavestoms funkcijoms atlikti?',
            [
                new Answer(
                    'Padalinio vadovas.',
                    false
                ),
                new Answer(
                    'Profesinė sąjunga.',
                    false
                ),
                new Answer(
                    'Darbdavys ar darbdaviui atstovaujantis asmuo.',
                    false
                ),
            ]
        ),
        new Question(
            'Kuri darbo poza yra ypač nepatogi?',
            [
                new Answer(
                    'Atsitūpus.',
                    true
                ),
                new Answer(
                    'Stovint be atramos.',
                    false
                ),
                new Answer(
                    'Stovint su atrama.',
                    false
                ),
            ]
        ),
        new Question(
            'Darbdavys privalo taip pat sustabdyti darbus, kai:',
            [
                new Answer(
                    'pareikalauja Civilinės saugos, gaisrinės saugos, sveikatos priežiūros, policijos tarnybos.',
                    false
                ),
                new Answer(
                    'neįvertinta profesinė rizika darbo vietose.',
                    false
                ),
                new Answer(
                    'gamtinės sąlygos kliudo saugiai juos atlikti.',
                    true
                ),
            ]
        ),
        new Question(
            'Ar reikia profesinę riziką vertinti keičiant įmonės struktūrą ar restruktūrizuojant įmonę?',
            [
                new Answer(
                    'Taip.',
                    true
                ),
                new Answer(
                    'Ne.',
                    false
                ),
                new Answer(
                    'Teisės aktai nereglamentuoja.',
                    false
                ),
            ]
        ),
        new Question(
            'Kiek laiko turi būti saugomi potencialiai pavojingo darbo įrenginio tikrinimo rezultatai?',
            [
                new Answer(
                    '5 metus.',
                    false
                ),
                new Answer(
                    'Turi būti saugomi visą įrenginio naudojimo (eksploatacijos) laikotarpį.',
                    true
                ),
                new Answer(
                    '10 metų.',
                    false
                ),
            ]
        ),
        new Question(
            'Į darbo užmokestį įskaitoma:',
            [
                new Answer(
                    'dienpinigiai, išmokami tarnybinių komandiruočių metu.',
                    false
                ),
                new Answer(
                    'priedai ir priemokos, darbuotojui išmokamos už jo atliktą darbą.',
                    false
                ),
                new Answer(
                    'išmokos už darbuotojo asmeninio turto naudojimą darbo reikmėms.',
                    false
                ),
            ]
        ),
        new Question(
            'Ar įmonėje, įstaigoje, organizacijoje ar kitoje organizacinėje struktūroje turi būti vykdoma profesinės rizikos prevencijos priemonių įgyvendinimo kontrolė ir užtikrinamas jų veiksmingumas?',
            [
                new Answer(
                    'Jei tai yra nustatyta įmonės vadovo patvirtintoje tvarkoje.',
                    false
                ),
                new Answer(
                    'Taip.',
                    true
                ),
                new Answer(
                    'Ne.',
                    false
                ),
            ]
        ),
        new Question(
            'Kokia darbo laiko trukmė nustatoma darbuotojams, dirbantiems darbo aplinkoje, kurioje kenksmingų veiksnių dydžiai viršija leistinas ribines vertes (dydžius) ir nėra galimybės techninėmis ar kitomis priemonėmis sumažinti jų iki darbuotojų saugos ir sveikatos norminiuose teisės aktuose nustatytų leistinų ribinių verčių (dydžių)?',
            [
                new Answer(
                    'Darbo laiko trukmė neturi viršyti 48 valandų per savaitę.',
                    false
                ),
                new Answer(
                    'Darbo laiko trukmė neturi viršyti 38 valandų per savaitę.',
                    false
                ),
                new Answer(
                    'Sutrumpinta darbo laiko norma.',
                    true
                ),
            ]
        ),
        new Question(
            'Vadovaujantis Profesinės rizikos vertinimo bendraisiais nuostatais, veiksnys, kuris kelia pavojų dėl keliamo krovinio, priskiriamas:',
            [
                new Answer(
                    'cheminiam veiksniui.',
                    false
                ),
                new Answer(
                    'fizikiniam veiksniui.',
                    false
                ),
                new Answer(
                    'fiziniam veiksniui.',
                    true
                ),
            ]
        ),
        new Question(
            'Ką nustato privalomo sveikatos tikrinimo tvarkos aprašas?',
            [
                new Answer(
                    'Geležinkelio transporto darbuotojų neeilinio sveikatos tikrinimo tikslą, vietą ir tvarką.',
                    false
                ),
                new Answer(
                    'Įsidarbinančiųjų ir darbuotojų, kurie siekia dirbti ar dirba darbus, įrašytus į Pavojingų darbų sąrašą arba darbo aplinkoje, kurioje nustatyti rizikos veiksniai, išankstinio, periodinio bei neeilinio privalomo profilaktinio sveikatos tikrinimo tikslą, vietą, tvarką.',
                    true
                ),
                new Answer(
                    'Asmenų, kurie turi pasitikrinti ar neserga užkrečiamosiomis ligomis, sveikatos tikrinimų periodiškumą, sveikatos tikrintojus, privalomus tyrimus, kontraindikacijas, dokumentų įforminimą ir kontrolę.',
                    false
                ),
            ]
        ),
        new Question(
            'Kas kiek laiko ir kokios trukmės specialias pertraukas darbdavys, darbdaviui atstovaujantis asmuo privalo suteikti darbuotojams, kurie dirba lauke arba nešildomose patalpose, kai aplinkos temperatūra žemesnė kaip minus 10 laipsnių Celsijaus?',
            [
                new Answer(
                    'Ne rečiau kaip kas pusantros valandos ne trumpesnes kaip 10 minučių pertraukas.',
                    true
                ),
                new Answer(
                    'Ne rečiau kaip kas dvi valandos ne trumpesnes kaip 10 minučių pertraukas.',
                    false
                ),
                new Answer(
                    'Ne rečiau kaip kas dvi valandos ne trumpesnes kaip 15 minučių pertraukas.',
                    false
                ),
            ]
        ),
        new Question(
            'Apsauginių pirštinių paskirtis:',
            [
                new Answer(
                    'apsaugoti rankas tik nuo šalčio arba karščio.',
                    false
                ),
                new Answer(
                    'apsaugoti plaštakas nuo besisukančių dalių.',
                    false
                ),
                new Answer(
                    'apsaugoti nuo cheminio poveikio.',
                    true
                ),
            ]
        ),
        new Question(
            'Kas yra darbo įrenginio „pavojinga zona"?',
            [
                new Answer(
                    'Kiekviena zona darbo vietoje, kurioje esantis darbuotojas rizikuoja sauga ir sveikata.',
                    false
                ),
                new Answer(
                    'Kiekviena zona darbo įrenginyje ir (arba) aplink jį, kurioje esantis darbuotojas rizikuoja sauga ir sveikata.',
                    true
                ),
                new Answer(
                    'Kiekviena zona, kurioje yra naudojamas potencialiai pavojingas įrenginys.',
                    false
                ),
            ]
        ),
        new Question(
            'Kurią iš šių sąlygų privalo atitikti naudojami savaeigiai darbo įrenginiai, kurie judėdami gali kelti pavojų dirbantiesiems?',
            [
                new Answer(
                    'Įrenginiai gali būti naudojami tik tokiose zonose į kurias nepatenka darbuotojai ir kiti pašaliniai asmenys.',
                    false
                ),
                new Answer(
                    'Įrenginiai privalo turėti aiškius atpažinimo ženklus, garsinį signalą.',
                    false
                ),
                new Answer(
                    'Turi turėti tinkamus įtaisus, kurie palengvintų galimo susidūrimo padarinius, tuo pačiu metu judant daugiau negu vienam darbo įrenginiui, taip pat ir judantiems tais pačiais bėgiais.',
                    true
                ),
            ]
        ),
        new Question(
            'Įrengiant darbo vietas, darbo patalpų šiluminės aplinkos ribinės vertės nustatomos vadovaujantis:',
            [
                new Answer(
                    'įmonės vadovo potvarkiu.',
                    false
                ),
                new Answer(
                    'profesinės rizikos vertinimo kortele.',
                    false
                ),
                new Answer(
                    'higienos norma.',
                    true
                ),
            ]
        ),
        new Question(
            'Kas užtikrina, kad įmonėje būtų parengtos reikiamos instrukcijos, kad darbuotojai įsidarbindami ir darbo metu įmonėje gautų išsamią informaciją apie darbuotojų saugos ir sveikatos organizavimą?',
            [
                new Answer(
                    'Darbuotojų saugos ir sveikatos specialistas.',
                    false
                ),
                new Answer(
                    'Darbdaviui atstovaujantis asmuo.',
                    true
                ),
                new Answer(
                    'Darbdaviui atstovaujantis asmuo ar jo pavedimu įgaliotas asmuo.',
                    false
                ),
            ]
        ),
        new Question(
            'Dirbti viršvalandinius darbus per metus galima:',
            [
                new Answer(
                    '180 val.',
                    false
                ),
                new Answer(
                    '250 val.',
                    false
                ),
                new Answer(
                    '200 val.',
                    false
                ),
            ]
        ),
        new Question(
            'Darbuotojas dirba miesto savivaldybės įmonėje parkų priežiūros specialistu. Vertinant profesinę riziką darbo vietoje yra nustatyta rizika darbuotojui užsikrėsti užkrečiamąja liga - erkiniu encefalitu. Kokių priemonių turi imtis darbdavys siekdamas apsaugoti darbuotojus nuo užkrečiamos ligos?',
            [
                new Answer(
                    'Išduoda asmenines apsaugos priemones.',
                    false
                ),
                new Answer(
                    'Imasi visų reikiamų priemonių darbuotojų apsaugai nuo biologinių medžiagų poveikio, tame tarpe ir darbuotojo skiepijimo darbdavio lėšomis.',
                    true
                ),
                new Answer(
                    'Imasi visų reikiamų priemonių darbuotojų apsaugai nuo pavojingų medžiagų poveikio ir rekomenduoja darbuotojams skiepytis savo lėšomis.',
                    false
                ),
            ]
        ),
        new Question(
            'Kokie asmenys turi teisę laisvai jungtis į profesines sąjungas ir dalyvauti jų veikloje?',
            [
                new Answer(
                    'Asmenys, teisėtai dirbantys pagal darbo sutartį ar kitais įstatymų nustatytais pagrindais Lietuvos Respublikos teritorijoje.',
                    true
                ),
                new Answer(
                    'Asmenys, teisėtai dirbantys Lietuvos Respublikos teritorijoje.',
                    false
                ),
                new Answer(
                    'Asmenys, teisėtai dirbantys.',
                    false
                ),
            ]
        ),
        new Question(
            'Ar padalinio vadovas, o kai jo nėra - darbdavio įgaliotas asmuo ar darbdaviui atstovaujantis asmuo privalo organizuoti pirmosios pagalbos suteikimą darbuotojams ir, jeigu reikia, iškviesti greitąją medicinos pagalbą nelaimingų atsitikimų darbe, ūmių susirgimų darbe atvejais?',
            [
                new Answer(
                    'Teisės aktai nereglamentuoja.',
                    false
                ),
                new Answer(
                    'Taip.',
                    true
                ),
                new Answer(
                    'Ne.',
                    false
                ),
            ]
        ),
        new Question(
            'Ar darbdavys turi nedelsdamas suteikti dėl įvykio darbe nukentėjusiam darbuotojui pirmąją pagalbą?',
            [
                new Answer(
                    'Ne.',
                    false
                ),
                new Answer(
                    'Taip.',
                    true
                ),
                new Answer(
                    'Teisės aktai nereglamentuoja.',
                    false
                ),
            ]
        ),
        new Question(
            'Darbdavys privalo aprūpinti darbuotojus asmeninėmis apsaugos priemonėmis:',
            [
                new Answer(
                    'paženklintomis CE ženklu ir turinčiomis EB atitikties deklaraciją, įrodančią, kad asmeninė apsaugos priemonė atitinka techninio reglamento „Asmeninės apsauginės priemonės" II priede nustatytus saugos ir sveikatos reikalavimus.',
                    true
                ),
                new Answer(
                    'paženklintomis CE ženklu ir įrodančiomis, kad asmeninė apsaugos priemonė atitinka techninio reglamento reikalavimus.',
                    false
                ),
                new Answer(
                    'turinčiomis atitikties deklaraciją, įrodančią, kad asmeninė apsaugos priemonė atitinka techninio reglamento nustatytus saugos ir sveikatos reikalavimus.',
                    false
                ),
            ]
        ),
        new Question(
            'Ar galima chemines medžiagas fasuoti jų sandėliavimo patalpose?',
            [
                new Answer(
                    'Negali, turi būti fasuojamos atskirose patalpose.',
                    true
                ),
                new Answer(
                    'Gali būti fasuojamos sandėliavimo patalpose tik nedegios cheminės medžiagos.',
                    false
                ),
                new Answer(
                    'Gali būti fasuojamos sandėliavimo patalpose, jeigu užtikrinama tinkama darbuotojų sauga ir sveikata bei priešgaisrinė sauga.',
                    false
                ),
            ]
        ),
        new Question(
            'Darbdavys turi užtikrinti:',
            [
                new Answer(
                    'normalias darbo sąlygas, kad darbuotojai galėtų įvykdyti darbo normas.',
                    false
                ),
                new Answer(
                    'nekenksmingas darbo sąlygas, kad darbuotojai galėtų dirbti.',
                    true
                ),
                new Answer(
                    'darbo sąlygas, kad darbuotojai galėtų dirbti.',
                    false
                ),
            ]
        ),
        new Question(
            'Ar Valstybinės darbo inspekcijos inspektoriui, tiriant Įvykį darbe, dėl kurio sunkiai pakenkiama darbuotojo sveikatai arba darbuotojas miršta, turi dalyvauti darbdavio atstovas ir darbuotojų atstovas saugai ir sveikatai?',
            [
                new Answer(
                    'Taip.',
                    true
                ),
                new Answer(
                    'Teisės aktai nereglamentuoja.',
                    false
                ),
                new Answer(
                    'Ne.',
                    false
                ),
            ]
        ),
        new Question(
            'Kam atstovauja profesinės sąjungos sudarydamos su darbdaviu kolektyvinę ir kitokias sutartis?',
            [
                new Answer(
                    'Atstovauja darbuotojams.',
                    false
                ),
                new Answer(
                    'Atstovauja visiems profesinių sąjungų nariams.',
                    false
                ),
                new Answer(
                    'Atstovauja savo nariams (taip pat gali būti darbuotojų kolektyvo atstovais).',
                    true
                ),
            ]
        ),
        new Question(
            'Kelio darbininkas darbo vietoje buvo sumuštas smurtaujančio praeivio taip, kad nukentėjusiajam buvo išduotas nedarbingumo pažymėjimas 5 dienoms. Ar šis įvykis darbe gali būti priskiriamas prie nelaimingų atsitikimų darbe?',
            [
                new Answer(
                    'Ne, tai tik incidentas, nes darbuotojas nukentėjo ne nuo darbo aplinkos veiksnio ar darbo priemonių ir gydymui nereikalingas stacionarinis gydymas.',
                    false
                ),
                new Answer(
                    'Taip, jeigu ištyrus įvykį bus nustatyta, kad darbuotojas nukentėjo, kai prieš jį buvo panaudotas smurtas, o smurto aplinkybės ir motyvai susiję su darbu.',
                    true
                ),
                new Answer(
                    'Ne, šis įvykis nepriskiriamas prie nelaimingų įvykių darbe atsitikimų ir įforminamas aktu N-2.',
                    false
                ),
            ]
        ),
        new Question(
            'Darbdaviui atstovaujantis asmuo, nustatydamas darbuotojų saugos ir sveikatos vidinės kontrolės tvarką įmonėje, ją svarsto:',
            [
                new Answer(
                    'su darbuotojų saugos ir sveikatos tarnyba.',
                    false
                ),
                new Answer(
                    'su darbuotojų saugos ir sveikatos komitetu.',
                    false
                ),
                new Answer(
                    'su darbuotojais, darbuotojų atstovais saugai ir sveikatai, darbuotojų saugos ir sveikatos komitetu.',
                    true
                ),
            ]
        ),
        new Question(
            'Būtinosios darbo sutarties sąlygos gali būti keičiamos:',
            [
                new Answer(
                    'darbdavio sprendimu, esant iš anksto nenumatytoms aplinkybėms.',
                    false
                ),
                new Answer(
                    'tam įgaliotų pareigūnų reikalavimu.',
                    false
                ),
                new Answer(
                    'esant išankstiniam raštiškam darbuotojo sutikimui.',
                    true
                ),
            ]
        ),
        new Question(
            'Kas yra įpareigojimas?',
            [
                new Answer(
                    'Įmonės vietinis dokumentas, skirtas įforminti tikslinį instruktavimą.',
                    false
                ),
                new Answer(
                    'Įmonės dokumentas, surašomas darbuotojų saugos ir sveikatos specialisto kitiems darbdavio įgaliotiems asmenims, struktūrinių padalinių vadovams pašalinti darbuotojų saugos ir sveikatos teisės aktų reikalavimų pažeidimus.',
                    true
                ),
                new Answer(
                    'Valstybinės darbo inspekcijos darbo inspektoriaus nurodymas pašalinti darbuotojų saugos ir sveikatos teisės aktų reikalavimų pažeidimus.',
                    false
                ),
            ]
        ),
        new Question(
            'Darbuotojų saugos ir sveikatos instrukcijos laikomos:',
            [
                new Answer(
                    'padalinio vedėjo kabinete.',
                    false
                ),
                new Answer(
                    'darbuotojams žinomoje ir prieinamoje vietoje.',
                    true
                ),
                new Answer(
                    'pas darbdavį.',
                    false
                ),
            ]
        ),
        
]
);

export default QUESTIONS_15_1;