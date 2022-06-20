import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Home from './components/Home';
import Blog from './components/Blog';
import Post from './components/Post';
import NotFound from './components/NotFound';

import Project1 from './components-projects/ExcelCustomerSupportAgentPerformance';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/post/:id" render={props => <Post {...props} />} />
        <Route exact path="/404" component={NotFound} />

        <Route exact path="/project/excelcustomersupportagentperformance" component={Project1} />
      </div>
  </Router>,

  document.getElementById('root')
);

reportWebVitals();
