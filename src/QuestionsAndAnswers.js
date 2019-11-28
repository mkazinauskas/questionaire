import React from 'react'
import { Header } from 'semantic-ui-react';
import { Checkbox, Divider } from 'semantic-ui-react';
import QuestionsDatabase from './database/QuestionsDatabase';

function renderAnswer(answer) {
    const correctAnswerStyle = { 'paddingTop': '10px', 'fontWeight': 'bold' };
    const incorrectAnswerStyle = { 'paddingTop': '10px' };
    return (
        <div key={Math.random()}>
            <Checkbox
                style={answer.isCorrect ? correctAnswerStyle : incorrectAnswerStyle}
                label={answer.text}
                readOnly={true}
                checked={answer.isCorrect}
            />
        </div>
    );
}

function renderQuestion(question) {
    return (
        <div key={Math.random()} style={{ 'paddingBottom': '30px' }}>
            <Header as='h3'>{question.title}</Header>
            {question.answers.map(answer => renderAnswer(answer))}
        </div>
    );
}

function renderGroup(testGroup) {
    return (
        <div key={Math.random()}>
            <Divider horizontal>Klausimų grupė - {testGroup.name}</Divider>
            {testGroup.questions.map(question => renderQuestion(question))}
        </div>
    );
}

function QuestionsAnsAnswers() {
    return (
        <div>
            <Header as='h1'>Visi klausimai ir atsakymai</Header>
            {QuestionsDatabase().map(testGroup => renderGroup(testGroup))}
        </div>
    );
}

export default QuestionsAnsAnswers