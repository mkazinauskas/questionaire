import React from 'react'
import ResultsComponent from './ResultsComponent'
import QuestionsDatabase from '../database/QuestionsDatabase'
import QuestionComponent from './QuestionComponent';
import { Header } from 'semantic-ui-react';

class TestView extends React.Component {

    constructor(props) {
        super(props);
        const allQuestions = QuestionsDatabase().flatMap(group => group.questions);
        const newQuestion = this.newRandomQuestion(allQuestions);
        const refreshedQuestions = allQuestions.filter(item => item.title !== newQuestion.title);

        this.state = {
            correctAnswers: 0,
            incorrectAnswers: 0,
            questions: refreshedQuestions,
            question: newQuestion
        }
    }

    render() {
        const question = this.state.question;
        if (!question) {
            return (
                <div>
                    <Header as='h1'>Visi klausimai atsakyti!</Header>
                    <ResultsComponent
                        correctAnswers={this.state.correctAnswers}
                        incorrectAnswers={this.state.incorrectAnswers}
                        questionsLeft={this.state.questions.length}
                    />
                </div>
            );
        } else {
            return (
                <div>
                    <ResultsComponent
                        correctAnswers={this.state.correctAnswers}
                        incorrectAnswers={this.state.incorrectAnswers}
                        questionsLeft={this.state.questions.length}
                    />
                    <QuestionComponent
                        key={question.title}
                        question={question}
                        onCorrectAnswer={this.onCorrectAnswer}
                        onIncorrectAnswer={this.onIncorrect}
                        onNext={this.onNext}
                    />
                </div>
            )
        }
    }

    onCorrectAnswer = () => {
        const state = this.state;
        state.correctAnswers++;
        this.setState(state);
    }

    onIncorrect = () => {
        const state = this.state;
        state.incorrectAnswers++;
        this.setState(state);
    }

    onNext = () => {
        const currentState = this.state;
        currentState.question = this.newRandomQuestion(currentState.questions);
        currentState.questions = currentState.questions.filter(item => item.title !== currentState.question.title);
        this.setState(currentState);
    }

    newRandomQuestion(questions) {
        const min = 0;
        const max = questions.length - 1;
        const questionIndex = Math.floor(min + (Math.random() * (max - min)));

        return questions[questionIndex];
    }
}

export default TestView