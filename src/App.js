import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ContactList} />
        <Route path="/add" component={ContactForm} />
      </Switch>
    </Router>
  );
};

export default App;
