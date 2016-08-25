import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import { render } from 'react-dom';
import App from './app/app';
require('./common.scss');

render(<App />, document.getElementById('root'));
render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
      <Route path="users" component={Users}>
        <Route path="/user/:userId" component={User}/>
      </Route>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('root'))
