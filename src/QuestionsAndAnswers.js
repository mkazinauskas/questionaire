import React from 'react'
import { Header } from 'semantic-ui-react';
import { Checkbox, Divider } from 'semantic-ui-react';
import QuestionsDatabase from './QuestionsDatabase';

function renderAnswer(answer) {
    const correctAnswerStyle = { 'padding-top': '10px', 'font-weight': 'bold' };
    const incorrectAnswerStyle = { 'padding-top': '10px' };
    return (
        <div>
            <Checkbox style={answer.isCorrect ? correctAnswerStyle : incorrectAnswerStyle} label={answer.text} readOnly='true' checked={answer.isCorrect} />
        </div>
    );
}

function renderQuestion(question) {
    return (
        <div style={{ 'padding-bottom': '30px' }}>
            <Header as='h3'>{question.title}</Header>
            {question.answers.map(answer => renderAnswer(answer))}
        </div>
    );
}

function renderGroup(testGroup) {
    return (
        <div>
            <Divider horizontal>Klausimų grupė - {testGroup.name}</Divider>
            {testGroup.questions.map(question => renderQuestion(question))}
        </div>
    );
}

function QuestionsAnsAnswers() {
    return (
        <div>
            <Header as='h1'>Visi klausimai ir atsakymai</Header>
            {QuestionsDatabase.map(testGroup => renderGroup(testGroup))}
        </div>
    );
}

export default QuestionsAnsAnswers