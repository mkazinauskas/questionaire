import React from 'react'
import { Header, Checkbox, Button } from 'semantic-ui-react'

class QuestionComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            question: props.question,
            answered: false
        }
    }

    render() {
        const question = this.state.question;
        return (
            <div>
                <Header as='h3'>{question.title}</Header>
                {question.answers.map(this.renderAnswer)}
                <Button disabled={!this.state.answered} style={{ 'marginTop': '20px' }} onClick={this.props.onNext}>Kitas</Button>
            </div>
        )
    }

    renderAnswer = (answer) => {
        return (
            <div>
                <Checkbox
                    style={this.resolveAnswerStyle(answer)}
                    label={answer.text}
                    onChange={(event) => this.onAnswer(event, answer)}
                    readOnly={this.state.answered}
                />
            </div>
        );
    }

    resolveAnswerStyle(answer) {
        const correctAnswerStyle = { 'fontWeight': 'bold' };
        const incorrectAnswerStyle = {};
        let style = {};
        if (this.state.answered) {
            if (answer.isCorrect) {
                style = correctAnswerStyle;
            } else {
                style = incorrectAnswerStyle;
            }
        }
        return style;
    }

    onAnswer(event, answer) {
        const state = this.state;
        state.answered = true;
        this.setState(state);
        if (answer.isCorrect) {
            this.props.onCorrectAnswer();
        } else {
            this.props.onIncorrectAnswer();
        }
    }
}

export default QuestionComponent