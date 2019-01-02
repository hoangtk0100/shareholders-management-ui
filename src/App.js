import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';

// // Containers
// const DefaultLayout = Loadable({
//   loader: () => import('./containers/DefaultLayout'),
//   loading
// });

// // Pages
// const Login = Loadable({
//   loader: () => import('./views/Login'),
//   loading
// });

// const Register = Loadable({
//   loader: () => import('./views/Register'),
//   loading
// });

// const Page404 = Loadable({
//   loader: () => import('./views/Page404'),
//   loading
// });

// const Page500 = Loadable({
//   loader: () => import('./views/Page500'),
//   loading
// });

// Containers
import { DefaultLayout, AdminLayout } from './containers';
// Pages
import { Login, Register, Page404, Page500 } from './views';

class App extends Component {
  render() {
    return (
      <HashRouter>
          <Switch>
            <Route exact path="/login" name="Login Page" component={Login} />
            <Route exact path="/register" name="Register Page" component={Register} />
            <Route exact path="/404" name="Page 404" component={Page404} />
            <Route exact path="/500" name="Page 500" component={Page500} />
            <Route path="/admin" name="Admin" component={AdminLayout} />
            <Route path="/" name="Home" component={DefaultLayout} />
          </Switch>
      </HashRouter>
    );
  }
}

export default App;
