import React, { useState, component } from "react";
import { Switch, Route } from "react-router-dom";
import WelcomePage from './components/WelcomePage/WelcomePage';
import Game from './components/Game/Game';

const App = () => {
    const [name, setName] = useState('');

    const getName = name => {
        setName(name);
    }

    return (
        <div className="full-page">
            <Switch>
                <Route exact path="/" component={() => <WelcomePage getName={getName} />} />
                <Route exact path="/game" component={() => <Game name={name} />} />
            </Switch>
        </div>
    );
}


export default App;
