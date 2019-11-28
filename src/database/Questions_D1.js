import Answer from "./Answer";
import Question from "./Question";
import TestGroup from "./TestGroup";

const QUESTIONS_D1= new TestGroup(
    'D-1', [
    new Question(
        'Kur saugomi nelaimingų atsitikimų darbe aktai ir tyrimo medžiaga?',
        [
            new Answer(
                'Atiduodami saugoti nukentėjusiajam.',
                false
            ),
            new Answer(
                'Atiduodami saugoti nukentėjusiajam.',
                true
            ),
            new Answer(
                'Saugomi įmonėje, kurioje įvyko nelaimingas atsitikimas darbe.',
                false
            ),
        ]
    ),
    new Question(
        'Kam darbdaviui atstovaujantis asmuo, siekdamas įgyvendinti darbdavio pareigą, gali duoti konkrečius pavedimus įgyvendinti prevencines priemones?',
        [
            new Answer(
                'Darbdavio įgaliotiems asmenims.',
                true
            ),
            new Answer(
                'Juridinio asmens darbuotojų saugos ir sveikatos specialistui.',
                false
            ),
            new Answer(
                'Įmonės darbuotojų saugos ir sveikatos tarnybai ir darbdavio įgaliotiems asmenims darbuotojų saugai ir sveikatai.',
                false
            ),
        ]
    ),
    new Question(
        'Veiksnys, kurio pagrindą sudaro fizinio darbo krūvis, yra:',
        [
            new Answer(
                'fizikinis veiksnys',
                false
            ),
            new Answer(
                'fizinis veiksnys',
                false
            ),
            new Answer(
                'ergonominis veiksnys',
                true
            ),
        ]
    ),
    new Question(
        'Nėščioms ar krūtimi maitinančioms darbuotojoms draudžiamų darbų sąrašą nustato:',
        [
            new Answer(
                'Lietuvos Respublikos darbuotojų saugos ir sveikatos įstatymas',
                false
            ),
            new Answer(
                'Lietuvos Respublikos vyriausiojo valstybinio darbo inspektoriaus įsakymas',
                false
            ),
            new Answer(
                'Vyriausybė',
                true
            ),
        ]
    ),
    new Question(
        'Lengvo nelaimingo atsitikimo darbe N-l formos aktą pasirašo:',
        [
            new Answer(
                'įvykį darbe tyrusios komisijos nariai',
                true
            ),
            new Answer(
                'ikiteisminio tyrimo įstaigos tyrėjas',
                false
            ),
            new Answer(
                'valstybinio socialinio draudimo fondo valdybos teritorinio skyriaus atstovas',
                false
            ),
        ]
    ),
    new Question(
        'Įmonės padaliniuose gerai matomose vietose turi būti:',
        [
            new Answer(
                'priemonės, reikalingos pirmajai pagalbai suteikti, nuorodos (ženklai), kur yra medicinos punktas',
                true
            ),
            new Answer(
                'nurodytas darbuotojų saugos ir sveikatos specialisto telefono numeris',
                false
            ),
            new Answer(
                'nuorodos (ženklai), kur yra telefonas pagalbai iškviesti',
                false
            ),
        ]
    ),
    new Question(
        'Įrašykite trūkstamus žodžius: "Nelaimingą atsitikimą pakeliui į darbą, vykstant iš vienos darbovietės į kitą, tiria darbdavio ............ sudaryta komisija."',
        [
            new Answer(
                'su kuriuo sudaryta darbo sutartis',
                false
            ),
            new Answer(
                'pas kurį dirbama',
                false
            ),
            new Answer(
                'pas kurį vykstama',
                true
            ),
        ]
    ),
    new Question(
        'Ar reikia darbdaviui atstovaujančiam asmeniui paskirti darbuotojus ir organizuoti jų apmokymą kaip apsaugoti savo ir kitų darbuotojų sveikatą bei gyvybę galimo pavojaus įmonėje atveju?',
        [
            new Answer(
                'Ne.',
                false
            ),
            new Answer(
                'Teisės aktai nereglamentuoja, sprendžia darbdavys, atsižvelgdamas į įmonės veiklos rizikingumą.',
                false
            ),
            new Answer(
                'Taip.',
                true
            ),
        ]
    ),
    new Question(
        'Darbdavys privalo darbuotojus aprūpinti asmeninėmis apsaugos priemonėmis:',
        [
            new Answer(
                'nemokamai',
                true
            ),
            new Answer(
                'darbuotojo sąskaita',
                false
            ),
            new Answer(
                'išsimokėtinai',
                false
            ),
        ]
    ),
    new Question(
        'Įrašykite trūkstamą žodį „Darbuotojų sauga ir sveikata“ sąvokos apibūdinime: „Darbuotojų sauga ir sveikata - tai visos ............. priemonės, skirtos darbuotojų darbingumui, sveikatai ir gyvybei darbe išsaugoti, kurios naudojamos ar planuojamos visuose įmonės veiklos etapuose, kad darbuotojai būtų apsaugoti nuo profesinės rizikos arba ji būtų kiek įmanoma sumažinta."',
        [
            new Answer(
                'prevencinės',
                true
            ),
            new Answer(
                'kolektyvinės',
                false
            ),
            new Answer(
                'asmeninės apsaugos',
                false
            ),
        ]
    ),
    new Question(
        'Instrukcijos turi būti parengtos:',
        [
            new Answer(
                'valstybine kalba',
                false
            ),
            new Answer(
                'daugumai įmonės darbuotojų suprantama kalba',
                false
            ),
            new Answer(
                'lietuvių kalba ar kita darbuotojui suprantama kalba',
                true
            ),
        ]
    ),
    new Question(
        'Vaikų darbas yra:',
        [
            new Answer(
                'draudžiamas, išskyrus jų fizines galimybes atitinkančius lengvus darbus, neturinčius neigiamo poveikio vaiko saugai, sveikatai, fizinei, psichinei, moralinei ar socialinei raidai',
                true
            ),
            new Answer(
                'draudžiamas, išskyrus darbus, įtrauktus į vaikams leistinų dirbti darbų sąrašą',
                false
            ),
            new Answer(
                'leidžiamas tik gavus vieno iš tėvų (įtėvių) rašytinį sutikimą',
                false
            ),
        ]
    ),
    new Question(
        'Darbdavio ir darbo tarybos rašytiniame susitarime gali būti aptarti:',
        [
            new Answer(
                'abu atsakymai teisingi',
                false
            ),
            new Answer(
                'darbo tarybos kompetencijos įgyvendinimo, veiklos organizavimo, finansavimo, papildomų garantijų darbo tarybos nariams klausimai',
                true
            ),
            new Answer(
                'darbo sąlygų, darbo užmokesčio klausimai',
                false
            ),
        ]
    ),
    new Question(
        'Kaip Darbuotojų saugos ir sveikatos įstatyme apibūdinama sąvoka „neseniai pagimdžiusi darbuotoja“?',
        [
            new Answer(
                'Darbuotoja, pateikusi darbdaviui sveikatos priežiūros įstaigos pažymą apie gimdymą ir auginanti vaiką, iki jam sukaks trys metai.',
                false
            ),
            new Answer(
                'Darbuotoja, pateikusi darbdaviui Sodros pažymą, kad jai suteiktos motinystės atostogos.',
                false
            ),
            new Answer(
                'Darbuotoja, pateikusi darbdaviui sveikatos priežiūros įstaigos pažymą apie gimdymą ir auginanti vaiką, iki jam sukaks vieni metai.',
                true
            ),
        ]
    ),
    new Question(
        'Nuo ko priklauso, kada steigiama įmonės darbuotojų saugos ir sveikatos tarnyba?',
        [
            new Answer(
                'Tai priklauso nuo darbuotojų saugos ir sveikatos būklės įmonėje.',
                false
            ),
            new Answer(
                'Tai priklauso nuo darbuotojų skaičiaus ir įmonės ekonominės veiklos rūšies.',
                false
            ),
            new Answer(
                'Tai priklauso nuo darbdavio sprendimo, priimto pasitarus su darbuotojais arba jų atstovais dėl tarnybos steigimo.',
                true
            ),
        ]
    ),
    new Question(
        'Draudžiama darbuotojams išduoti:',
        [
            new Answer(
                'asmenines apsaugos priemones, jeigu yra įrengtos kolektyvinės apsaugos priemones',
                false
            ),
            new Answer(
                'neišskalbtas, neišvalytas, nedezinfekuotas asmenines apsaugos priemones',
                true
            ),
            new Answer(
                'asmenines apsaugos priemones, jeigu darbuotojai nenori jų naudoti',
                false
            ),
        ]
    ),
    new Question(
        'Kas atstovauja darbdaviui - juridiniam asmeniui - socialinėje partnerystėje darbdavio lygmeniu?',
        [
            new Answer(
                'Juridinio asmens vienasmenis valdymo organas arba jo įgalioti asmenys.',
                true
            ),
            new Answer(
                'Juridinio asmens vaidyba arba jos įgalioti asmenys.',
                false
            ),
            new Answer(
                'Juridinio asmens vienasmenis akcininkas arba visuotinio akcininkų susirinkimo įgaliotas vienas iš akcininkų.',
                false
            ),
        ]
    ),
    new Question(
        'Ar darbuotojų saugos ir sveikatos specialistų, atsižvelgiant į įmonės ekonominės veiklos rūšį, darbuotojų skaičių ir profesinę riziką, turi būti pakankamai, kad jie galėtų organizuoti įmonėje darbuotojų saugos ir sveikatos prevencines priemones?',
        [
            new Answer(
                'Sprendžia įmonės vadovas.',
                false
            ),
            new Answer(
                'Ne.',
                false
            ),
            new Answer(
                'Taip.',
                true
            ),
        ]
    ),
    new Question(
        'Vadovaujantis Profesinės rizikos vertinimo bendraisiais nuostatais, veiksnys, kuris kelia pavojų dėl krentančių daiktų fizinio poveikio, priskiriamas:',
        [
            new Answer(
                'cheminiam veiksniui',
                false
            ),
            new Answer(
                'fiziniam veiksniui',
                true
            ),
            new Answer(
                'fizikiniam veiksniui',
                false
            ),
        ]
    ),
    new Question(
        'Ar būtina teikti visiems darbdaviams informaciją apie darbuotojų saugos būklę ir darbo vietų atitiktį darbuotojų saugos ir sveikatos norminių teisės aktų reikalavimams?',
        [
            new Answer(
                'Taip, kiekvienais metais iki vasario 15 dienos.',
                false
            ),
            new Answer(
                'Ne visiems. Darbdavių kategorijas nustato Lietuvos Respublikos vyriausiasis valstybinis darbo inspektorius.',
                true
            ),
            new Answer(
                'Visiems, pas kuriuos įvyko bent vienas nelaimingas atsitikimas per metus.',
                false
            ),
        ]
    ),
    new Question(
        'Ar darbuotojas turi teisę dalyvauti profesinės rizikos vertinime?',
        [
            new Answer(
                'Ne.',
                false
            ),
            new Answer(
                'Teisės aktai nereglamentuoja.',
                false
            ),
            new Answer(
                'Taip.',
                true
            ),
        ]
    ),
    new Question(
        'Kur turi būti reikiamos pirmosios pagalbos priemonės?',
        [
            new Answer(
                'Turi būti visose darbo patalpose, kuriose jų gali prireikti pagal darbo pobūdį.',
                true
            ),
            new Answer(
                'Turi būti pirmame aukšte.',
                false
            ),
            new Answer(
                'Teisės aktai to nereglamentuoja.',
                false
            ),
        ]
    ),
    new Question(
        'Kokios yra darbdavio lygmeniu veikiančių profesinių sąjungų valdymo organų narių, darbo tarybų narių ir darbuotojų patikėtinio garantijos?',
        [
            new Answer(
                'Jiems suteikiamos papildomos 5 darbo dienų kasmetinės atostogos.',
                false
            ),
            new Answer(
                'Jiems skiriamas laisvas nuo darbo laikas kvalifikacijai kelti iki 2 darbo dienų per mėnesį, už šį laiką mokant vidutinį darbo užmokestį.',
                false
            ),
            new Answer(
                'Jų funkcijoms atlikti darbdavys skiria nemokamą patalpą, leidžia naudotis turimomis darbo priemonėmis',
                true
            ),
        ]
    ),
    new Question(
        'Koks teisės aktas reglamentuoja profesinių ligų priežasčių tyrimą?',
        [
            new Answer(
                'Profesinių ligų valstybės registro nuostatai.',
                false
            ),
            new Answer(
                'Profesinių ligų nustatymo kriterijai.',
                false
            ),
            new Answer(
                'Profesinių ligų tyrimo ir apskaitos nuostatai.',
                true
            ),
        ]
    ),
    new Question(
        'Kokiu atveju profesinės sąjungos, jų susivienijimų veikla negali būti sustabdyta ir nutraukta?',
        [
            new Answer(
                'Teismo sprendiniu.',
                false
            ),
            new Answer(
                'Darbdavio tvarkomuoju dokumentu.',
                true
            ),
            new Answer(
                'Profesinių sąjungų įstatuose (statute) nustatyta tvarka.',
                false
            ),
        ]
    ),
    new Question(
        'Ar gali darbdavys leisti darbuotojui pradėti dirbti, jei jis pasirašytinai nesupažindino darbuotojo su darbo sąlygomis, tvarką darbovietėje nustatančiomis darbo teisės normomis ir sveikatos reikalavimais?',
        [
            new Answer(
                'Negali.',
                true
            ),
            new Answer(
                'Gali, nes įstatymai leidžia.',
                false
            ),
            new Answer(
                'Taip, gali.',
                false
            ),
        ]
    ),
    new Question(
        'Apie ką turi informuoti darbdavys juridinio asmens darbuotojų saugos ir sveikatos specialistus ar fizinius asmenis, atliekančius įmonėje darbuotojų saugos ir sveikatos tarnybos funkcijas ar jų dalį?',
        [
            new Answer(
                'Apie įpareigojimų suteikimą darbdavio įgaliotiems asmenims darbuotojų saugai ir sveikatai, vykdant profesinės rizikos prevencines priemones įmonėje.',
                false
            ),
            new Answer(
                'Apie darbdavio paskirtus asmenis, įmonės darbuotojus, atsakingus už pirmosios pagalbos suteikimą, gelbėjimo darbų organizavimą, darbuotojų evakavimą galimų avarijų, stichinių nelaimių ar gaisrų atvejais, ir apie gaisrų gesinimo bei evakavimo priemones.',
                true
            ),
            new Answer(
                'Apie profesinės rizikos vertinimo rezultatus ir įgyvendintas rizikos mažinimo priemones, darbuotojų saugos ir sveikatos vidinės kontrolės įmonėje įgyvendinimo rezultatus.',
                false
            ),
        ]
    ),
    new Question(
        'Kokias pareigas privalo vykdyti darbuotojas, kuris darbo metu naudoja asmenines apsaugos priemones?',
        [
            new Answer(
                'Rūpestingai prižiūrėti ir naudoti pagal paskirtį asmenines apsaugos priemones, laiku pranešti darbdaviui ar darbdavio įgaliotam asmeniui darbuotojų saugai ir sveikatai apie jų susidėvėjimą, užterštumą, netinkamumą naudoti.',
                true
            ),
            new Answer(
                'Naudoti pagal paskirtį asmenines apsaugos priemones, rūpestingai prižiūrėti, laiku jas išskalbti, išvalyti.',
                false
            ),
            new Answer(
                'Rūpestingai prižiūrėti ir naudoti pagal paskirtį asmenines apsaugos priemones, laiku jas išskalbti, išvalyti, susidėvėjusias asmenines apsaugos priemones pakeisti naujomis.',
                false
            ),
        ]
    ),
    new Question(
        'Darbuotojas privalo, pasinaudojęs asmenine apsaugos priemone:',
        [
            new Answer(
                'grąžinti ją į tam skirtą vietą',
                true
            ),
            new Answer(
                'palikti ją darbo vietoje',
                false
            ),
            new Answer(
                'parsinešti ją namo',
                false
            ),
        ]
    ),
    new Question(
        'Ar galima naudoti darbo įrenginius, jeigu nėra visų gamintojo numatytų naudojimo dokumentų?',
        [
            new Answer(
                'Darbdavys privalo turėti visus gamintojo numatytus darbo įrenginio naudojimo dokumentus.',
                true
            ),
            new Answer(
                'Galima, jeigu darbuotojai moka saugiai su jais dirbti.',
                false
            ),
            new Answer(
                'Galima, jeigu tai nėra potencialiai pavojingi įrenginiai.',
                false
            ),
        ]
    ),
]
);

export default QUESTIONS_D1;