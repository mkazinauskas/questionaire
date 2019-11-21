import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import QuestionsAndAnswers from './QuestionsAndAnswers';
import Test from './Test';
import {
    Container,
    Image,
    Menu,
} from 'semantic-ui-react'

class Navigation extends React.Component {
    render() {
        return (
            <Router>
                <Menu fixed='top' inverted>
                    <Container>
                        <Menu.Item as='a' header>
                            <Image size='mini' src='/logo512.png' style={{ marginRight: '1.5em' }} />
                            Darbų saugos mokymai
                  </Menu.Item>
                        <Menu.Item as={Link} to="/">Klausimai ir Atsakymai</Menu.Item>
                        <Menu.Item as={Link} to="/test">Testas</Menu.Item>
                    </Container>
                </Menu>

                <Container text style={{ marginTop: '7em' }}>
                    <Switch>
                        <Route path="/test">
                            <Test />
                        </Route>
                        <Route path="/">
                            <QuestionsAndAnswers />
                        </Route>
                    </Switch>

                </Container>
            </Router>
        );
    }
}

export default Navigation