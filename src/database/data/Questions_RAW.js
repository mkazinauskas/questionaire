import Answer from "../Answer";
import Question from "../Question";
import TestGroup from "../TestGroup";

const QUESTIONS_RAW = new TestGroup(
    'RAW_1', [
        new Question(
            '',
            [
                new Answer(
                    '',
                    false
                ),
                new Answer(
                    '',
                    false
                ),
                new Answer(
                    '',
                    false
                ),
            ]
        ),
]
);


new Question(
    '',
    [
        new Answer(
            '',
            false
        ),
        new Answer(
            '',
            false
        ),
        new Answer(
            '',
            false
        ),
    ]
),


export default QUESTIONS_RAW;