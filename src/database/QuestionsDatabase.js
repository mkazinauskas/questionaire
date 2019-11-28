import QUESTIONS_14_1 from "./data/Questions_14_1";
import QUESTIONS_D1 from "./data/Questions_D1";
import QUESTIONS_15_1 from "./data/Questions_15_1";
import QUESTIONS_SAV_1 from "./data/Questions_SAV_1";
import QUESTIONS_DF_1_5 from "./data/Questions_DF_1_5";


const Database = [
    QUESTIONS_14_1,
    QUESTIONS_D1,
    QUESTIONS_15_1,
    QUESTIONS_SAV_1,
    QUESTIONS_DF_1_5
];

function QuestionsDatabase(){
    return JSON.parse(JSON.stringify(Database));
}

export default QuestionsDatabase;
