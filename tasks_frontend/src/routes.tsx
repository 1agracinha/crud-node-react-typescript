import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home';
import Tasks from './pages/Tasks';

const src: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/tarefas" exact component={Tasks}/>
        </Switch>
    );
    
}

export default src;