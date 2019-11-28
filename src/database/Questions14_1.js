import Answer from "./Answer";
import Question from "./Question";
import TestGroup from "./TestGroup";

const QUESTIONS_14_1 = new TestGroup(
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
    new Question(
        'Bendrosios gaisrinės saugos taisyklės nurodo, kad automatiniai įvažiavimo į teritoriją vartai, užkardai ir kiti įrenginiai:',
        [
            new Answer(
                'turi turėti rankinį valdymą, leidžiantį juos atidaryti bet kuriuo paros metu.',
                true
            ),
            new Answer(
                'turi atsidaryti automatiškai.',
                false
            ),
            new Answer(
                'turi būti saugūs naudoti.',
                false
            ),
        ]
    ),
    new Question(
        'Kas praneša Valstybinei darbo inspekcijai apie įtariamą lėtinę profesinę ligą?',
        [
            new Answer(
                'Gydytojas.',
                true
            ),
            new Answer(
                'Darbdavys.',
                false
            ),
            new Answer(
                'Darbuotojas.',
                false
            ),
        ]
    ),
    new Question(
        'Kas yra nelaimingas atsitikimas pakeliui į darbą ar iš darbo?',
        [
            new Answer(
                'Tai įvykis, įskaitant eismo įvykį, darbuotojui vykstant į darbą ar iš darbo darbuotojo darbo dienomis kelyje tarp darbo vietos ir gyvenamosios vietos.',
                true
            ),
            new Answer(
                'Tai įvykis, įskaitant eismo įvykį darbuotojui darbo metu vykstant darbo reikalais.',
                false
            ),
            new Answer(
                'Tai įvykis, įskaitant eismo įvykį darbuotojui vykstant į darbą ar iš darbo įmonės ar jos samdomu transportu.',
                false
            ),
        ]
    ),
    new Question(
        'Ką reiškia sąvoka „profesinė rizika"?',
        [
            new Answer(
                'Ūmus ar lėtinis darbuotojo sveikatos sutrikimas dėl kenksmingo ir (ar) pavojingo darbo aplinkos rizikos veiksnio.',
                false
            ),
            new Answer(
                'Traumos ar kitokio darbuotojo sveikatos pakenkimo galimybė dėl kenksmingo ir (ar) pavojingo darbo aplinkos rizikos veiksnio (veiksnių) poveikio.',
                true
            ),
            new Answer(
                'Darbe esantys rizikos veiksniai, sukeliantys pavojų darbuotojų saugai ir sveikatai dėl darbo vietose vykstančių procesų.',
                false
            ),
        ]
    ),
    new Question(
        'Jeigu darbai yra susiję su užteršimu, ar darbuotojams turi būti nemokamai duodamos asmens higienos priemonės (muilas, rankšluosčiai ir kita)?',
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
        'Jei darbuotojas pasirodė darbe neblaivus, apsvaigęs nuo narkotinių ar toksinių medžiagų, darbdavys:',
        [
            new Answer(
                'tą dieną (pamainą) neleidžia darbuotojui dirbti ir nemoka jam darbo užmokesčio.',
                true
            ),
            new Answer(
                'nedelsiant skiria drausminę nuobaudą.',
                false
            ),
            new Answer(
                'per vieną darbo dieną informuoja apie tai Valstybinės darbo inspekcijos teritorinį skyrių.',
                false
            ),
        ]
    ),
    new Question(
        'Darbuotojų klausos medicininių patikrinimų tikslas yra:',
        [
            new Answer(
                'anksti diagnozuoti galimą klausos praradimą dėl triukšmo ir išsaugoti klausą',
                true
            ),
            new Answer(
                'patvirtinti darbuotojų profesines ligas',
                false
            ),
            new Answer(
                'išgydyti darbuotojus dėl klausos netekimo',
                false
            ),
        ]
    ),
    new Question(
        'Kokią teisę turi darbo inspektorius, jei darbdavio įgaliotas asmuo ar darbdaviui atstovaujantis asmuo atsisako pavojaus darbuotojams atvejais vykdyti reikalavimą sustabdyti darbus?',
        [
            new Answer(
                'Turi teisę organizuoti darbuotojų evakavimą iš pavojingų vietų ar zonų.',
                false
            ),
            new Answer(
                'Turi teisę kreiptis į policiją pagalbos, kad būtų įvykdytas reikalavimas sustabdyti darbus ir iš pavojingų darbo vietų ar zonų būtų išvesti darbuotojai.',
                true
            ),
            new Answer(
                'Turi teisę nedelsiant visais įmanomais būdais užtikrinti, kad neliktų pavojaus darbuotojams.',
                false
            ),
        ]
    ),
    new Question(
        'Kokią apsaugos nuo elektros kategoriją pakanka turėti atsakingam už elektros ūkį asmeniui, jei elektros įrenginių leista naudoti galia viršija 100 kW?',
        [
            new Answer(
                'PK apsaugos nuo elektros kategoriją.',
                false
            ),
            new Answer(
                'VK apsaugos nuo elektros kategoriją.',
                false
            ),
            new Answer(
                'AK apsaugos nuo elektros kategoriją.',
                true
            ),
        ]
    ),
    new Question(
        'Į ką darbuotojas turi teisę kreiptis, jeigu darbo vietoje nėra saugios ir (ar) sveikatai nekenksmingos darbo sąlygos?',
        [
            new Answer(
                'Į darbuotojų atstovą, padalinio vadovą ar kitą darbdavio įgaliotą asmenį, darbdaviui atstovaujantį asmenį, įmonės darbuotojų saugos ir sveikatos komitetą, Valstybinę darbo inspekciją ar kitas valstybės institucijas.',
                true
            ),
            new Answer(
                'Visais atvejais pirmiausiai į Valstybinę darbo inspekciją ar kitas valstybės institucijas.',
                false
            ),
            new Answer(
                'Į padalinio vadovą, darbdavio įgaliotą asmenį darbuotojų saugai ir sveikatai, darbdaviui atstovaujantį asmenį, Valstybinę darbo inspekciją.',
                false
            ),
        ]
    ),
    new Question(
        'Įvykis nepripažįstamas nelaimingu atsitikimu darbe:',
        [
            new Answer(
                'jei įvykis darbe įvyko darbo laiku, darbo vietoje ir/ar atliekant darbo funkcijas, pareigas, darbdavio pavedimą arba kitą veiklą, už kurią įstatymų nustatyta tvarka mokamas vidutinis darbo užmokestis.',
                false
            ),
            new Answer(
                'jei įvykis įvyko tarnybinių komandiruočių metu, vykdant darbdavio užduotį paskirties vietoje.',
                false
            ),
            new Answer(
                'Ištyrus įvykį darbe ir nustačius, kad darbuotojas patyrė žalą sveikatai ar mirė, kai prieš jį panaudotas smurtas, jeigu smurto aplinkybės ir motyvai nesusiję su darbu.',
                true
            ),
        ]
    ),
    new Question(
        'Kas įmonėje organizuoja darbuotojų atstovų saugai ir sveikatai rinkimus bei darbuotojų atstovų saugai ir sveikatai komiteto narių rinkimus?',
        [
            new Answer(
                'Darbuotojų kolektyvo susirinkimas.',
                false
            ),
            new Answer(
                'Darbdaviui atstovaujantis asmuo.',
                true
            ),
            new Answer(
                'Įmonės profesinė sąjunga, o jei profesinės sąjungos nėra - kiti darbuotojų atstovai įmonės darbuotojų kolektyvo susirinkime.',
                false
            ),
        ]
    ),
    new Question(
        'Įmonės atskiro struktūrinio padalinio, esančio kitoje negu įmonė teritorijoje ar vietovėje, vadovo, kuris darbdaviui atstovaujančio asmens pavedimu ir jo kontroliuojamas įgyvendina reikiamas priemones, kad tokiame įmonės padalinyje sudarytų saugias ir sveikatai nekenksmingas darbo sąlygas, žinios iš darbuotojų saugos ir sveikatos srities tikrinamos tokia pat tvarka kaip:',
        [
            new Answer(
                'darbuotojų atstovo.',
                false
            ),
            new Answer(
                'darbuotojų saugos ir sveikatos specialisto.',
                false
            ),
            new Answer(
                'darbdaviui atstovaujančio asmens.',
                true
            ),
        ]
    ),
    new Question(
        'Kaip turi būti įrengti vartai skirti transporto priemonių eismui steigiamose darbovietėse?',
        [
            new Answer(
                'Transporto priemonių eismui skirti vartai negali būti atveriami, jie turi būti pakeliami.',
                false
            ),
            new Answer(
                'Transporto priemonių eismui skirti vartai turi būti aiškiai paženklinti ženklais draudžiančiais pro juos vaikščioti pėstiesiems.',
                false
            ),
            new Answer(
                'Šalia kiekvienų vartų, skirtų transporto priemonių eismui, turi būti įrengtos durys pėstiesiems.',
                true
            ),
        ]
    ),
    new Question(
        'Ar nepalankios darbo aplinkos sąlygos, tokios kaip netinkama temperatūra, drėgmė ir vėdinimas, gali padidinti riziką, ypač susižaloti nugarą?',
        [
            new Answer(
                'Rizika susižaloti nugarą priklauso nuo krovinio, bet ne nuo darbo aplinkos.',
                false
            ),
            new Answer(
                'Taip, netinkama temperatūra, drėgmė ir vėdinimas, gali padidinti riziką, ypač susižaloti nugarą.',
                true
            ),
            new Answer(
                'Ne, šios darbo aplinkos sąlygos nekelia rizikos susižaloti nugarą.',
                false
            ),
        ]
    ),
    new Question(
        'Ar nepalankios darbo aplinkos sąlygos, tokios kaip netinkama temperatūra, drėgmė ir vėdinimas, gali padidinti riziką, ypač susižaloti nugarą?',
        [
            new Answer(
                'Rizika susižaloti nugarą priklauso nuo krovinio, bet ne nuo darbo aplinkos.',
                false
            ),
            new Answer(
                'Taip, netinkama temperatūra, drėgmė ir vėdinimas, gali padidinti riziką, ypač susižaloti nugarą.',
                true
            ),
            new Answer(
                'Ne, šios darbo aplinkos sąlygos nekelia rizikos susižaloti nugarą.',
                false
            ),
        ]
    ),
    new Question(
        'Kas kontroliuoja kaip įmonėse laikomasi darbuotojų saugos ir sveikatos norminių teisės aktų reikalavimų?',
        [
            new Answer(
                'Socialinės apsaugos ir darbo ministerija.',
                false
            ),
            new Answer(
                'Prokuratūra.',
                false
            ),
            new Answer(
                'Valstybinė darbo inspekcija.',
                true
            ),
        ]
    ),
    new Question(
        'Įrengiant darbo vietas turi būti įvertinta:',
        [
            new Answer(
                'darbuotojo fizinės galimybės.',
                true
            ),
            new Answer(
                'darbuotojo žalingi įpročiai.',
                false
            ),
            new Answer(
                'darbuotojo priklausymas profsąjungoms.',
                false
            ),
        ]
    ),
    new Question(
        'Ar jaunam asmeniui suteikiamas darbas privalo būti saugus, nekelti pavojaus sveikatai, fizinei ir protinei raidai, nepakenkti mokymuisi?',
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
        'Ar lynai gali būti naudojami kaip priemonė patekimui į darbo vietas?',
        [
            new Answer(
                'Negali, nes tai draudžia darboviečių įrengimo bendrieji nuostatai.',
                false
            ),
            new Answer(
                'Gali, jeigu yra laikomasi reikalavimų išdėstytų darbo įrenginių naudojimo bendruosiuose nuostatuose.',
                true
            ),
            new Answer(
                'Negali, nes lynus naudojant kaip priemonę patekimui į darbo vietas neįmanoma pilnai užtikrinti darbuotojų saugos.',
                false
            ),
        ]
    ),
    new Question(
        'Įmonėje lengvų nelaimingų atsitikimų darbe aktai ir tyrimo medžiaga saugomi:',
        [
            new Answer(
                'laikantis Lietuvos vyriausiojo archyvaro tarnybos nustatytų dokumentų saugojimo terminų.',
                true
            ),
            new Answer(
                '5 metus.',
                false
            ),
            new Answer(
                '15 metų.',
                false
            ),
        ]
    ),
    new Question(
        'Ar reikia darbdaviui atstovaujančiam asmeniui tobulinti kvalifikaciją darbuotojų saugos ir sveikatos klausimais?',
        [
            new Answer(
                'Ne, jeigu jis vykdo darbuotojų saugos ir sveikatos tarnybos funkcijas.',
                false
            ),
            new Answer(
                'Taip, jeigu jis atlieka darbuotojų saugos ir sveikatos tarnybos funkcijas.',
                true
            ),
            new Answer(
                'Taip, atestuojantis kas 5 metai.',
                false
            ),
        ]
    ),
    new Question(
        'Ką turi turėti uždarų patalpų vėdinimo įranga?',
        [
            new Answer(
                'Teisės aktai nereglamentuoja reikalavimų vėdinimo įrangoms, jie nustatyti tik įrangos gamintojo dokumentuose.',
                false
            ),
            new Answer(
                'Ši įranga turi turėti kontrolės sistemą, nurodančią bet kokį vėdinimo įrangos gedimą.',
                true
            ),
            new Answer(
                'Ši įranga turi būti paženklinta CE ženklu ir jos filtrai keičiami ne rečiau kaip kartą į metus, nepriklausomai nuo naudojimo trukmės.',
                false
            ),
        ]
    ),
    new Question(
        'Ką reiškia sąvoka "darbo vieta"( Darbuotojų saugos ir sveikatos įstatymas)?',
        [
            new Answer(
                'Tai vieta, kurioje gali būti darbuotojo sveikatai kenksmingų, pavojingų rizikos veiksnių (fizinių, fizikinių, cheminių, biologinių ir kitų).',
                false
            ),
            new Answer(
                'Tai vieta, kurioje, aplinka, darbo pobūdis, darbo ir poilsio laikas ir kitos aplinkybės, galinčios turėti tiesioginę įtaką darbuotojo savijautai, darbingumui, saugai ir sveikatai.',
                false
            ),
            new Answer(
                'Tai vieta, kurioje asmuo dirba darbo sutartyje sulygtą darbą arba atlieka viešojo administravimo funkcijas.',
                true
            ),
        ]
    ),
    new Question(
        'Ar naudojant fizinę jėgą gali atsirasti rizika ypač susižeisti nugarą, jei fizinė jėga naudojama tik sukant liemenį?',
        [
            new Answer(
                'Rizika priklauso nuo darbuotojo sveikatos.',
                false
            ),
            new Answer(
                'Ne, nes sukant liemenį sužeisti neįmanoma.',
                false
            ),
            new Answer(
                'Taip.',
                true
            ),
        ]
    ),
    new Question(
        'Rizikos veiksniai skirstomi į tokias grupes: biologiniai, cheminiai, fizikiniai, fiziniai, ergonominiai. Kokiai rizikos veiksnių grupei priklauso pavojus nukristi iš aukščio?',
        [
            new Answer(
                'Ergonominių.',
                false
            ),
            new Answer(
                'Fizikinių.',
                false
            ),
            new Answer(
                'Fizinių.',
                true
            ),
        ]
    ),
    new Question(
        'Asmuo, nukentėjęs nuo nelaimingo atsitikimo darbe arba jo atstovas nustatyta tvarka turi teisę:',
        [
            new Answer(
                'susipažinti su nelaimingo atsitikimo darbe ar profesinės ligos tyrimo medžiaga.',
                true
            ),
            new Answer(
                'reikalauti papildomos apmokamos nedarbo dienos.',
                false
            ),
            new Answer(
                'reikalauti priedo prie atlyginimo.',
                false
            ),
        ]
    ),
    new Question(
        'Kas gali pareikalauti, kad darbdaviui atstovaujantis asmuo pakartotinai pasitikrintų darbuotojų saugos ir sveikatos srities žinias, jeigu ištyrus nelaimingą atsitikimą nustatoma, kad darbdaviui atstovaujantis asmuo nepakankamai susipažinęs su darbuotojų saugos ir sveikatos reikalavimais?',
        [
            new Answer(
                'Profesinė sąjunga ar darbuotojų atstovai Valstybinės darbo inspekcijos siūlymu.',
                false
            ),
            new Answer(
                'Vyriausiasis valstybinis darbo inspektorius.',
                true
            ),
            new Answer(
                'Valstybinės darbo inspekcijos inspektorius.',
                false
            ),
        ]
    ),
    new Question(
        'Ar apsauginis nuo saulės kremas priskiriamas prie darbdavio išduodamų asmeninių apsaugos priemonių?',
        [
            new Answer(
                'Ne, nes asmeninėms apsaugos priemonėms priskiriama kūno apranga ir įtaisai nuo kritimo iš aukščio.',
                false
            ),
            new Answer(
                'Taip, jeigu darbai vykdomi saulėje.',
                true
            ),
            new Answer(
                'Ne, nes tai nėra tiesioginė odos apsaugos priemonė.',
                false
            ),
        ]
    ),
]
);


export default QUESTIONS_14_1;