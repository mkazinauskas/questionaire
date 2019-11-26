import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
} from "react-router-dom";
import QuestionsAndAnswers from './QuestionsAndAnswers';
import TestView from './test/TestView';
import {
    Container,
    Menu,
} from 'semantic-ui-react'
import Home from './Home';

class Navigation extends React.Component {

    state = {
        current: 0
    }

    render() {
        return (
            <Router basename="/questionaire">
                <Menu fixed='top' inverted>
                    <Container>
                        <Menu.Item as={Link} header to="/">
                            Darbų saugos mokymai
                  </Menu.Item>
                        <Menu.Item as={NavLink} to="/questions-and-answers" activeClassName="active" >Klausimai ir Atsakymai</Menu.Item>
                        <Menu.Item as={NavLink} to="/test" activeClassName="active">Testas</Menu.Item>
                    </Container>
                </Menu>

                <Container text style={{ marginTop: '7em' }}>
                    <Switch>
                        <Route path="/test">
                            <TestView />
                        </Route>
                        <Route path="/questions-and-answers">
                            <QuestionsAndAnswers />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>

                </Container>
            </Router>
        );
    }
}

export default Navigation