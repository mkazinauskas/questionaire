import React from 'react'
import { Label } from 'semantic-ui-react'

class ResultsComponent extends React.Component {

    render() {
        return (
            <div style={{ 'marginBottom': '20px' }}>
                <Label color='green'>Teisingai: <strong>{this.props.correctAnswers}</strong></Label>
                <Label color='red'>Neteisingai: <strong>{this.props.incorrectAnswers}</strong></Label>
                <Label color='grey'>Liko klausimų: <strong>{this.props.questionsLeft}</strong></Label>
            </div>
        )
    }
}

export default ResultsComponent