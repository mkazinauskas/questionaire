import QUESTIONS_14_1 from "./Questions14_1";


const Database = [
    QUESTIONS_14_1
];

function QuestionsDatabase(){
    return JSON.parse(JSON.stringify(Database));
}

export default QuestionsDatabase;
