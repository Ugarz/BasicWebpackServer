import React from 'react';
import { Router, Route, Link } from 'react-router'
import { render } from 'react-dom';
import App from './app/app';
require('./common.scss');

render(<App />, document.getElementById('root'));
