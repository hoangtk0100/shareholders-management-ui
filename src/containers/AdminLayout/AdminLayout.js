import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppAside,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_adminNav';
// routes config
import routes from '../../routes';

const AdminAside = React.lazy(() => import('./AdminAside'));
const AdminFooter = React.lazy(() => import('../DefaultLayout/DefaultFooter'));
const AdminHeader = React.lazy(() => import('./AdminHeader'));

class AdminLayout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e) {
    e.preventAdmin()
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <AdminHeader onLogout={e => this.signOut(e)} />
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            {/* <Suspense fallback={this.loading()}>
              <AppSidebarNav navConfig={navigation} {...this.props}
                onLogout={e => this.signOut(e)} />
            </Suspense> */}
            <div style={{ position: 'relative', display: 'initial', height: '500px', marginTop: '-110px' }}>
              <AppSidebarNav navConfig={navigation} {...this.props} />
            </div>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes} />
            <Container fluid>
              {/* <Suspense fallback={this.loading()}> */}
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                  <Redirect from="/admin" to="/admin/dashboard" />
                </Switch>
              {/* </Suspense> */}
            </Container>
          </main>
          <AppAside fixed>
            {/* <Suspense fallback={this.loading()}> */}
              <AdminAside />
            {/* </Suspense> */}
          </AppAside>
        </div>
        <AppFooter>
          {/* <Suspense fallback={this.loading()}> */}
            <AdminFooter />
          {/* </Suspense> */}
        </AppFooter>
      </div>
    );
  }
}

export default AdminLayout;
