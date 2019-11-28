import QUESTIONS_14_1 from "./Questions14_1";
import QUESTIONS_D1 from "./Questions_D1";


const Database = [
    QUESTIONS_14_1,
    QUESTIONS_D1
];

function QuestionsDatabase(){
    return JSON.parse(JSON.stringify(Database));
}

export default QuestionsDatabase;
