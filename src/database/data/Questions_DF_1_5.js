import Answer from "../Answer";
import Question from "../Question";
import TestGroup from "../TestGroup";

const QUESTIONS_DF_1_5 = new TestGroup(
    'DF1-5', [
    new Question(
        'Darbuotojas ar darbdavys (-iai), kurio (-ių) įmonėje (-ėse) buvo atliekamas darbuotojo darbo sąlygų tyrimas, nesutinkantys su Centrinės darbo medicinos ekspertų komisijos išvada, gali ją skųsti:',
        [
            new Answer(
                'Lietuvos Respublikos vyriausiajam valstybiniam darbo inspektoriui',
                false
            ),
            new Answer(
                'Teismui Lietuvos Respublikos administracinių bylų teisenos įstatymo nustatyta tvarka',
                true
            ),
            new Answer(
                'Nacionaliniam visuomenės sveikatos centrui',
                false
            ),
        ]
    ),
    new Question(
        'Kas yra „įpareigojamasis saugos ir sveikatos apsaugos ženklas“?',
        [
            new Answer(
                'Ženklas, kuris įspėja apie riziką arba pavojų saugai ir sveikatai.',
                false
            ),
            new Answer(
                'Ženklas draudžiantis elgtis taip, kad kiltų pavojus saugai ir sveikatai.',
                false
            ),
            new Answer(
                'Ženklas, kuris nustato privalomą elgesį.',
                true
            ),
        ]
    ),
    new Question(
        'Kas yra „kancerogenas“, kuriam taikomi Darbuotojų apsaugos nuo kancerogenų ir mutagenų poveikio darbe nuostatai?',
        [
            new Answer(
                'Clieminė medžiaga, atitinkanti toksiškų medžiagų klasifikavimo kriterijus, nustatytus Pavojingų cheminių medžiagų ir preparatų klasifikavimo ir ženklinimo tvarkoje.',
                false
            ),
            new Answer(
                'Cheminė medžiaga arba mišinys, atitinkantis klasifikavimo kaip 1A arba 1B kategorijos kancerogenas kriterijus, nurodytus 2008 m. gruodžio 16 d. Europos Parlamento ir Tarybos reglamento (EB) Nr. 1272/2008 dėl cheminių medžiagų ir mišinių klasifikavimo, ženklinimo ir pakavimo I priede',
                true
            ),
            new Answer(
                'Cheminė medžiaga, atitinkanti 3 kategorijos kancerogeninių medžiagų klasifikavimo kriterijus, nustatytus Pavojingų cheminių medžiagų ir preparatų klasifikavimo ir ženklinimo tvarkoje.',
                false
            ),
        ]
    ),
    new Question(
        'Kokie reikalavimai keliami darbo aplinkai, kai darbo vietose naudojamos pavojingos cheminės medžiagos bei preparatai?',
        [
            new Answer(
                'Pavojingos cheminės medžiagos turi būti naudojamos uždarose sistemose, kad nekiltų pavojus darbuotojų saugai ir sveikatai.',
                false
            ),
            new Answer(
                'Neturi būti viršijamos cheminių medžiagų koncentracijos nustatytos ribinės vertės (dydžiai) darbo aplinkos ore.',
                true
            ),
            new Answer(
                'Turi būti sudalytos tokios darbo sąlygos, kad darbo aplinkos ore nebūtų pavojingų cheminių medžiagų.',
                false
            ),
        ]
    ),
    new Question(
        'Darbinę praktiką įmonėje atliekantį studentą darbdavys:',
        [
            new Answer(
                'privalo aprūpinti nemokamai asmeninėmis apsaugos priemonėmis, įvertinęs rizikos veiksnius, kurių negalima išvengti ar pašalinti kolektyvinėmis apsaugos priemonėmis ar kitais būdais',
                true
            ),
            new Answer(
                'privalo aprūpinti asmeninėmis apsaugos priemonėmis ir darbiniais rūbais, už kuriuos studentas turės sumokėti',
                false
            ),
            new Answer(
                'neprivalo aprūpinti nemokamais darbo rūbais ir asmeninėmis apsaugos priemonėmis',
                false
            ),
        ]
    ),
    new Question(
        'Atlikus profesinės rizikos vertinimą ir nustačius, kad viršijama viršutinė triukšmo ekspozicijos verte, darbdavys:',
        [
            new Answer(
                'informuoja Valstybinę darbo inspekciją',
                false
            ),
            new Answer(
                'sukuria ir įdiegia techninių ir (arba) organizacinių priemonių programą, skirtą triukšmo poveikiui sumažinti',
                true
            ),
            new Answer(
                'informuoja visuomenės sveikatos centrą',
                false
            ),
        ]
    ),
    new Question(
        'Ribinė triukšmo ekspozicijos vertė:',
        [
            new Answer(
                '80 dB(A)',
                false
            ),
            new Answer(
                '87 dB(A)',
                false
            ),
            new Answer(
                '85 dB(A)',
                false
            ),
        ]
    ),
    new Question(
        'Kokiais atvejais įmonėse turi būti įrengiamos persirengimo patalpos ar vietos?',
        [
            new Answer(
                'Persirengimo patalpos ar vietos turi būti įrengiamos visose įmonėse.',
                false
            ),
            new Answer(
                'Persirengimo patalpos ar vietos įrengiamos įmonėse, kuriose darbuotojai dirba vilkėdami apsauginius darbo drabužius.',
                true
            ),
            new Answer(
                'Persirengimo patalpos ar vietos turi būti įrengiamos tik kai dirbama lauko sąlygomis.',
                false
            ),
        ]
    ),
    new Question(
        'Dirbančių naktį darbuotojų, kurių darbas susijęs su ypatingais pavojais arba kurio fizinis ar protinis darbo krūvis yra didelis, bet kuriuo 24 valandų trukmės laikotarpiu, kai jis dirba naktį, darbo laikas per dieną (pamainą) negali viršyti:',
        [
            new Answer(
                '8 darbo valandų',
                true
            ),
            new Answer(
                '10 darbo valandų',
                false
            ),
            new Answer(
                '12 darbo valandų',
                false
            ),
        ]
    ),
    new Question(
        'Kas pateikia pažymą apie dėl įvykio darbe nukentėjusiam darbuotojui pakenkimo sveikatai sunkumą?',
        [
            new Answer(
                'Asmens sveikatos priežiūros įstaiga, kuri suteikė dėl įvykio darbe nukentėjusiam darbuotojui pagalbą.',
                true
            ),
            new Answer(
                'Asmens sveikatos priežiūros įstaiga, kuri suteikė dėl įvykio darbe nukentėjusiam darbuotojui pagalbą.',
                false
            ),
            new Answer(
                'Valstybinio socialinio draudimo fondo valdybos teritorinis skyrius.',
                false
            ),
        ]
    ),
    new Question(
        'Kokia specifine saugos spalva turi būti dažomos gaisrinės saugos priemonės?',
        [
            new Answer(
                'Geltona.',
                false
            ),
            new Answer(
                'Juoda su baltais dryžiais.',
                false
            ),
            new Answer(
                'Raudona.',
                true
            ),
        ]
    ),
    new Question(
        'Įtarus darbuotojui lėtinę profesinę ligą, kas apie tai raštu praneša darbdaviui?',
        [
            new Answer(
                'Asmuo, matęs įvykį arba jo pasekmes.',
                false
            ),
            new Answer(
                'Visuomenės sveikatos centras apskrityje.',
                false
            ),
            new Answer(
                'Gydytojas.',
                true
            ),
        ]
    ),
    new Question(
        'Ar darbdavys turi informuoti kiekvieną darbuotoją apie jo pareigą nedelsiant pranešti apie įvykį darbe ar nelaimingą atsitikimą pakeliui į darbą ar iš darbo?',
        [
            new Answer(
                'Ne.',
                false
            ),
            new Answer(
                'Teisės aktai nereglamentuoja',
                false
            ),
            new Answer(
                'Taip.',
                true
            ),
        ]
    ),
    new Question(
        'Kas gali būti renkami darbo tarybos nariais?',
        [
            new Answer(
                'Visi darbuotojai, sulaukę aštuoniolikos metų ir kurių darbo santykiai su darbdaviu trunka ilgiau kaip šešis mėnesius.',
                true
            ),
            new Answer(
                'Visi darbuotojai, sulaukę aštuoniolikos metų, dirbantys pagal neterminuotas darbo sutartis.',
                false
            ),
            new Answer(
                'Visi darbuotojai, sulaukę šešiolikos metų ir kurių darbo santykiai su darbdaviu trunka ilgiau kaip tris mėnesius.',
                false
            ),
        ]
    ),
    new Question(
        'Ar gali mobilieji darbo įrenginiai su vidaus degimo varikliu būti naudojami darbo zonose esančiose patalpose?',
        [
            new Answer(
                'Negali, nebent yra garantuojamas pakankamas oro kiekis, nekeliantis pavojaus darbuotojų saugai ir sveikatai.',
                true
            ),
            new Answer(
                'Negali, turi būti naudojami tik elektriniai darbo įrenginiai, kurie neišmeta kenksmingų medžiagų ir nekelia pavojaus darbuotojų saugai ir sveikatai.',
                false
            ),
            new Answer(
                'Gali būti naudojami tik tokie mobilieji darbo įrenginiai su vidaus degimo varikliu, kurie turi įmontuotus specialius katalizatorius.',
                false
            ),
        ]
    ),
    new Question(
        'Darbuotojų klausos medicininių patikrinimų tikslas yra:',
        [
            new Answer(
                'išgydyti darbuotojus dėl klausos netekimo',
                false
            ),
            new Answer(
                'anksti diagnozuoti galimą klausos praradimą dėl triukšmo ir išsaugoti klausą',
                true
            ),
            new Answer(
                'patvirtinti darbuotojų profesines ligas',
                false
            ),
        ]
    ),
    new Question(
        'Kam turi teisę pranešti darbuotojų atstovas saugai ir sveikatai, jeigu padalinio vadovas nesiima reikiamų priemonių darbuotojų saugai ir sveikatai užtikrinti?',
        [
            new Answer(
                'Policijai.',
                false
            ),
            new Answer(
                'Darbdaviui atstovaujančiam asmeniui, o jam nesiimant priemonių rizikos veiksniams šalinti ar mažinti - Valstybinei darbo inspekcijai.',
                true
            ),
            new Answer(
                'Nedelsiant Valstybinei darbo inspekcijai.',
                false
            ),
        ]
    ),
    new Question(
        'Darbdavys privalo užtikrinti profesinių sąjungų veiklos sąlygas, numatytas:',
        [
            new Answer(
                'kolektyvinėse ir kitose jų tarpusavio sutartyse',
                true
            ),
            new Answer(
                'ir žodiniuose susitarimuose',
                false
            ),
            new Answer(
                'darbo sutartyse',
                false
            ),
        ]
    ),
    new Question(
        'Darbdavys pats įmonėje atlieka darbuotojų saugos ir sveikatos tarnybos funkcijas. Ar gali darbdavys papildomai sudaryti sutartį su fiziniu ar juridiniu asmeniu dėl dalies darbuotojų saugos ir sveikatos tarnybos funkcijų atlikimo?',
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
        'Ar už darbo užmokesčio apskaičiavimo ir mokėjimo tvarkos pažeidimus taikoma administracinė atsakomybė?',
        [
            new Answer(
                'Taip.',
                true
            ),
            new Answer(
                'Ne, išskyrus už tyčinius ir pakartotinius nusižengimus.',
                false
            ),
            new Answer(
                'Taikoma tik už LR Darbo kodekse nustatytos darbo užmokesčio apskaičiavimo ir mokėjimo tvarkos pažeidimus.',
                false
            ),
        ]
    ),
    new Question(
        'Kokia darbo laiko trukmė nustatoma darbuotojams, dirbantiems darbo aplinkoje, kurioje kenksmingų veiksnių dydžiai viršija leistinas ribines vertes (dydžius) ir nėra galimybės techninėmis ar kitomis priemonėmis sumažinti jų iki darbuotojų saugos ir sveikatos norminiuose teisės aktuose nustatytų leistinų ribinių verčių (dydžių)?',
        [
            new Answer(
                'Darbo laiko trukmė neturi viršyti 40 valandų per savaitę',
                false
            ),
            new Answer(
                'Darbo laiko trukmė neturi viršyti 38 valandų per savaitę.',
                false
            ),
            new Answer(
                'Darbo laiko trukmė neturi viršyti 36 valandų per savaitę.',
                true
            ),
        ]
    ),
    new Question(
        'Vykdant profesinės rizikos vertimą įmonėje, darbuotojų atstovas saugai ir sveikatai pareiškė norą dalyvauti vertinimo procese. Darbdavys sutiko, tačiau nusprendė, kad už tą laiką, kol šis darbuotojas dalyvaus profesinės rizikos vertinimo procese ir nevykdys tiesioginio savo darbo sulygto pagal darbo sutartį, nemokės vidutinio darbo užmokesčio. Ar teisingas darbdavio sprendimas?',
        [
            new Answer(
                'Ne.',
                true
            ),
            new Answer(
                'Taip.',
                false
            ),
            new Answer(
                'Ne, nes turi būti darbuotojų kolektyvo raštiškas sutikimas.',
                false
            ),
        ]
    ),
    new Question(
        'Kurie darbai priskiriami pavojingiems darbams?',
        [
            new Answer(
                'Atliekami 6 metrai virš tvirto horizontalaus stogo paviršiaus, naudojant apsaugos nuo kritimo priemonę - apraišus.',
                true
            ),
            new Answer(
                'Atliekami ant sumontuoti] 10 metrų aukščio pastolių.',
                false
            ),
            new Answer(
                'Atliekami ant aukštesnių nei 5 metrai viadukų nevažiuojamoje kelio dalyje.',
                false
            ),
        ]
    ),
    new Question(
        'Kas yra darbuotojų atstovas saugai ir sveikatai?',
        [
            new Answer(
                'Tai įmonės darbuotojų atstovų paskirtas patikėtinis atstovauti įmonės padalinio, pamainos darbuotojų interesams saugos ir sveikatos srityje.',
                false
            ),
            new Answer(
                'Tai įmonės darbuotojų kolektyvo susirinkime išrinktas darbuotojas, kuriam suteikiami įgaliojimai atstovauti įmonės padalinio, pamainos darbuotojų interesams saugos ir sveikatos srityje.',
                true
            ),
            new Answer(
                'Tai įmonės vadovo paskirtas darbuotojas, kuriam suteikiami įgaliojimai atstovauti įmonės padalinio, pamainos darbuotojų interesams saugos ir sveikatos srityje.',
                false
            ),
        ]
    ),
    new Question(
        'Kas yra darbo įrenginio „pavojinga zona“?',
        [
            new Answer(
                'Kiekviena zona darbo įrenginyje ir (arba) aplink jį, kurioje esantis darbuotojas rizikuoja sauga ir sveikata.',
                true
            ),
            new Answer(
                'Kiekviena zona darbo vietoje, kurioje esantis darbuotojas rizikuoja sauga ir sveikata.',
                false
            ),
            new Answer(
                'Kiekviena zona, kurioje yra naudojamas potencialiai pavojingas įrenginys.',
                false
            ),
        ]
    ),
    new Question(
        'Vandentiekio įmonės komunalinio skyriaus darbuotojai įrenginėja požeminius nuotekų surinkimo šulinius. Ar vykdant tokius darbus reikalinga parengti saugaus darbų atlikimo tvarką?',
        [
            new Answer(
                'Tai sprendžia darbdavys.',
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
        'Koks pagrindinis teisės aktas reglamentuoja pagrindines teisines nuostatas ir reikalavimus, siekiant apsaugoti darbuotojus nuo profesinės rizikos ar tokią riziką sumažinti?',
        [
            new Answer(
                'Lietuvos Respublikos darbuotojų saugos ir sveikatos įstatymas.',
                true
            ),
            new Answer(
                'Valstybinės darbo inspekcijos įstatymas.',
                false
            ),
            new Answer(
                'Lietuvos Respublikos Konstitucija.',
                false
            ),
        ]
    ),
    new Question(
        'Kurie iš šių darbų priskiriami prie „pavojingų darbų“?',
        [
            new Answer(
                'Darbai su augalų apsaugos priemonėmis.',
                true
            ),
            new Answer(
                'Statinių remonto ar demontavimo darbai.',
                false
            ),
            new Answer(
                'Žemės gręžimo darbai.',
                false
            ),
        ]
    ),
    new Question(
        'Darbuotojas siunčiamas laikinam darbiu į kitą įmonę. Kurios įmonės darbdavys turi paskirti savo įgaliotą asmenį abiejų darbdavių veiklai koordinuoti dėl siunčiamo darbuotojo saugos ir sveikatos užtikrinimo?',
        [
            new Answer(
                'Įmonės, kurioje atliekami darbai.',
                false
            ),
            new Answer(
                'Darbuotojų saugos ir sveikatos teisės aktai nereglamentuoja, sutaria darbdaviai bendru sutarimu.',
                true
            ),
            new Answer(
                'Įmonės, kuri siunčia darbuotoją laikinam darbui į kitą įmonę.',
                false
            ),
        ]
    ),
    new Question(
        'Kas nustato darbuotojų saugos ir sveikatos komiteto įmonėje narių skaičių?',
        [
            new Answer(
                'Darbdaviui atstovaujantis asmuo ir darbuotojų atstovai bendru sutarimu.',
                true
            ),
            new Answer(
                'Darbuotojų atstovai.',
                false
            ),
            new Answer(
                'Darbuotojų atstovai saugai ir sveikatai.',
                false
            ),
        ]
    ),
    new Question(
        'Įvykį darbe, išskyrus tiriamą Valstybinės darbo inspekcijos, nelaimingą atsitikimą pakeliui į darbą ar iš darbo tiria darbdaviui atstovaujančio asmens įsakymu ar kitu tvarkomuoju dokumentu patvirtinta dvišalė komisija, sudaryta:',
        [
            new Answer(
                'iš vienodo skaičiaus darbdavio atstovų, kuriuos skiria darbdavys, ir darbuotojų atstovų saugai ir sveikatai',
                true
            ),
            new Answer(
                'iš darbdavio įgalioto asmens ir darbuotojų atstovo, kuris priklauso darbo tarybai',
                false
            ),
            new Answer(
                'iš darbuotojų saugos ir sveikatos ir profesinės sveikatos specialistų',
                false
            ),
        ]
    ),
    new Question(
        'Durys atidaromos į vidų, su kodine spyna. Ar tokios durys tinkamos evakavimo išėjimui?',
        [
            new Answer(
                'Taip, svarbu, kad tokių durų atidarymui nereikalingas raktas.',
                false
            ),
            new Answer(
                'Taip, jei tai nustatyta įmonės evakavimo tvarkoje.',
                false
            ),
            new Answer(
                'Ne, evakavimo išėjimo durys turi būti užsklendžiamos taip, kad įvykus avarijai jas lengvai ir nedelsdamas galėtų atidaryti bet kuris asmuo, jei to prireiktų.',
                true
            ),
        ]
    ),
    new Question(
        'Darbuotojas įmonėje dirba šaltkalviu. Darbdaviui atstovaujantis asmuo planuoja darbuotojui papildomai skirti krovos darbus rankomis. Darbuotojų saugos ir sveikatos specialistas nori organizuoti darbuotojo sveikatos tikrinimą, o darbdavys tam prieštarauja, motyvuodamas tuo, kad darbuotojo sveikata tikrinta prieš metus ir dabar tikrinti nereikia. Ar teisus darbdavys?',
        [
            new Answer(
                'Taip, nes darbuotojų sveikata tikrinama periodiškai kas 2 metai.',
                false
            ),
            new Answer(
                'Taip, jeigu darbuotojui išduos asmenines apsaugos priemones.',
                false
            ),
            new Answer(
                'Ne, nes keičiantis darbo pobūdžiui, atsiranda kiti rizikos veiksniai, šiuo atveju grėsmė susižaloti nugarą.',
                true
            ),
        ]
    ),
    new Question(
        'Kas turi atlikti vietų įmonėje ir jos padaliniuose, kuriuose gali susidaryti sprogi aplinka, klasifikavimą į zonas?',
        [
            new Answer(
                'Juridiniai ar fiziniai asmenys turintys licenciją tokioms paslaugoms teigti.',
                false
            ),
            new Answer(
                'Juridiniai ar fiziniai asmenys turintys tinkamą kompetenciją ir Valstybinės darbo inspekcijos išduotą leidimą atlikti vietų, kuriose gali susidaryti sprogi aplinka, klasifikavimą j zonas.',
                false
            ),
            new Answer(
                'Pavojingų vietų klasifikavimas turi būti atliekamas kvalifikuoto personalo, išmanančio sprogiųjų medžiagų savybes, gamybos procesą ir technologinę bei elektros įrangą, dalyvaujant saugos ir sveikatos apsaugos specialistams, projektuotojams ir kitam inžineriniam bei eksploataciniam personalui.',
                true
            ),
        ]
    ),
    new Question(
        'Su psichosocialinių rizikos veiksnių prevencijos priemonių planu supažindinami:',
        [
            new Answer(
                'psichosocialinių rizikos veiksnių tyrimus atlikusios akredituotos įstaigos ekspertai',
                false
            ),
            new Answer(
                'Valstybinės darbo inspekcijos atstovai',
                false
            ),
            new Answer(
                'darbuotojai, darbuotojų atstovai saugai ir sveikatai, įmonės darbuotojų saugos ir sveikatos komitetas',
                true
            ),
        ]
    ),
    new Question(
        'Ar vykdant statybos darbus galima virinti elektra stovint ant pristatomų kopėčių?',
        [
            new Answer(
                'Galima tik išimtiniais atvejais, kai tai yra trumpalaikiai darbai ir imamasi specialių apsaugos priemonių.',
                false
            ),
            new Answer(
                'Ne, tai yra draudžiama.',
                true
            ),
            new Answer(
                'Galima jeigu darbuotojai apmokyti saugiai dirbti tokius darbus.',
                false
            ),
        ]
    ),
    new Question(
        'Kokie yra ligos išmokų susižalojus darbe, pakeliui į darbą ar iš darbo arba susirgus profesine liga apdraustųjų nelaimingų atsitikimų darbe ir profesinių ligų socialinio draudimo įstatymu mokėjimo šaltiniai?',
        [
            new Answer(
                'Ligos išmokos, susižalojus darbe, pakeliui į darbą ar iš darbo arba susirgus profesine liga, nuo pirmos iki trečios laikinojo nedarbingumo dienos mokamos iš darbdavio lėšų, nuo ketvirtos laikino nedarbingumo dienos mokamos iš Valstybinio socialinio draudimo fondo biudžeto nelaimingų atsitikimų darbe socialiniam draudimui skirtų lėšų.',
                false
            ),
            new Answer(
                'Ligos išmokos, susižalojus darbe, pakeliui į darbą ar iš darbo arba susirgus profesine liga, nuo pirmos laikinojo nedarbingumo dienos mokamos iš Valstybinio socialinio draudimo fondo biudžeto nelaimingų atsitikimų darbe socialiniam draudimui skirtų lėšų.',
                true
            ),
            new Answer(
                'Ligos išmokos, susižalojus darbe, pakeliui j darbą ar iš darbo arba susirgus profesine liga, nuo pirmos iki septintos laikinojo nedarbingumo dienos mokamos iš darbdavio lėšų, vėliau mokamos iš Valstybinio socialinio draudimo fondo biudžeto nelaimingų atsitikimų darbe socialiniam draudimui skirtų lėšų.',
                false
            ),
        ]
    ),
    new Question(
        'Kokią apsaugos nuo elektros kategoriją turi turėti specialistai, kontroliuojantys elektros saugos reikalavimus?',
        [
            new Answer(
                'Privalo turėti VK apsaugos nuo elektros kategoriją.',
                false
            ),
            new Answer(
                'Privalo turėti AK apsaugos nuo elektros kategoriją.',
                true
            ),
            new Answer(
                'Privalo turėti PK apsaugos nuo elektros kategoriją.',
                false
            ),
        ]
    ),
    new Question(
        'Dulkių, atsirandančių iš asbesto ar asbesto turinčių medžiagų, poveikis darbuotojams darbo vietoje turi būti sumažintas imantis šių priemonių:',
        [
            new Answer(
                'teikiant informaciją darbdaviui atstovaujančiam asmeniui, darbuotojams, įmonės darbuotojų saugos ir sveikatos komitetui apie darbuotojų saugos ir sveikatos būklę ir darbuotojų saugos ir sveikatos norminių teisės aktų reikalavimų laikymąsi įmonėje',
                false
            ),
            new Answer(
                'rengiant nelaimingų atsitikimų prevencijos priemones ar organizuojant jų parengimą, kontroliuojant prevencinių priemonių įgyvendinimo terminų laikymąsi',
                false
            ),
            new Answer(
                'kuo greičiau surenkant ir išvežant atliekas iš darbo vietos tinkamoje sandarioje pakuotėje su etikete, kurioje nurodoma, kad pakuotėje yra asbestas',
                true
            ),
        ]
    ),
    new Question(
        'Koks vienas iš pagrindinių bendrųjų darbuotojų saugos ir sveikatos užtikrinimo principų, kuriuo turi vadovautis darbdavys, nustatydamas vidinę darbuotojų saugos ir sveikatos būklės kontrolę įmonėje ir numatydamas priemones darbuotojų saugai ir sveikatai gerinti?',
        [
            new Answer(
                'Darbuotojų aprūpinimu asmeninėmis apsaugos priemonėmis.',
                false
            ),
            new Answer(
                'Darbuotojų mokymu ir instruktavimu, jiems privalomais nurodymais laikytis darbuotojų saugos ir sveikatos reikalavimų.',
                false
            ),
            new Answer(
                'Rizikos darbuotojų saugai ir sveikatai vengimu, rizikos veiksnių ir jų poveikio mažinimu.',
                true
            ),
        ]
    ),
]
);

export default QUESTIONS_DF_1_5;