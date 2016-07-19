/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/App/App';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Home page
  require('./modules/Home/pages/HomePage/HomePage');

  require('./modules/About/pages/AboutPage/AboutPage');
  require('./modules/About/pages/ContactPage/ContactPage');
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
  <Route path="/" component={App}>
    <IndexRoute
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Home/pages/HomePage/HomePage').default);
        });
      }}
    />

    <Route
      path="/about"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/About/pages/AboutPage/AboutPage').default);
        });
      }}
    />
    <Route
      path="/contact"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/About/pages/ContactPage/ContactPage').default);
        });
      }}
    />
  </Route>
);
