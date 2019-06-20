import React from 'react';
import {Router, Route, Switch} from "react-router-dom";
import history from '../history'

import Header from './Header';
import StreamCreate from './stream/Create';
import StreamDelete from './stream/Delete';
import StreamEdit from './stream/Edit';
import StreamList from './stream/List';
import StreamShow from './stream/Show';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <Header/>
                <Switch>
                    <Route path="/" exact component={StreamList}/>
                    <Route path="/stream/new" exact component={StreamCreate}/>
                    <Route path="/stream/:id" exact component={StreamShow}/>
                    <Route path="/stream/edit/:id" exact component={StreamEdit}/>
                    <Route path="/stream/delete/:id" exact component={StreamDelete}/>
                </Switch>
            </Router>
        </div>
    );
};

export default App;