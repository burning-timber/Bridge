import React, { useState, useEffect, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import { useAuth0 } from "../../react-auth0-spa";

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
import { devops_nav, authenticated_nav } from '../../_nav';
// routes config
import routes from '../../routes';
import API from '../../api';

//const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

const DefaultLayout = (props) => {
  const { getTokenSilently } = useAuth0();
  const [ projectNavItems, setProjectNavItems ] = useState([]);

  const loading = () => <div className="animated fadeIn pt-1 text-center"><div className="sk-spinner sk-spinner-pulse"></div></div>;
  
  const updateProjectNav = async () => {
    const token = await getTokenSilently();
    let projectData = await API.taiga.get('/projects', {
      headers: {'Authorization': 'Bearer ' + token}
    });

            // Parse the results for ease of use.
        projectData = projectData.data;
        let navItems = [];
        for (const project of projectData) {
          navItems.push({
            name: project.name,
            url: '/Project/' + project.id,
            icon: 'cui-puzzle',
          });
        }
        setProjectNavItems(navItems);
  };
  
  useEffect(() => {
    if(props.isAuthenticated && (!projectNavItems || projectNavItems.length === 0)) {
      updateProjectNav();
    }
  });

  var navigation = {
      items: [],
  };
  if (props.isAuthenticated) {
    navigation.items = [...navigation.items, ...authenticated_nav];
  }
  if (props.user && (props.user['https://bridge.burningtimber.com/roles'].indexOf('Staff') > -1 || props.user['https://bridge.burningtimber.com/roles'].indexOf("admin") > -1)) {
    var projectNav = [
      {
        name: 'Projects',
        url: '#projects',
        children: []
      }
    ];
    projectNav[0].children = projectNavItems;
    navigation.items = [...navigation.items, ...projectNav];
  }
  if (props.user && (props.user['https://bridge.burningtimber.com/roles'].indexOf('DevOps') > -1 || props.user['https://bridge.burningtimber.com/roles'].indexOf("admin") > -1)) {
    navigation.items = [...navigation.items, ...devops_nav];
  }
  
  return (
    <div className="app">
      <AppHeader fixed>
        <Suspense fallback={loading()}>
          <DefaultHeader 
            isAuthenticated={props.isAuthenticated} 
            user={props.user} 
            login={props.login} 
            logout={props.logout} 
          />
        </Suspense>
      </AppHeader>
      <div className="app-body">
        <AppSidebar fixed display="lg">
          <AppSidebarHeader />
          <AppSidebarForm />
          <Suspense>
            {props.isAuthenticated && (
            <AppSidebarNav navConfig={navigation} {...props} />
            )}
          </Suspense>
          <AppSidebarFooter />
          <AppSidebarMinimizer />
        </AppSidebar>
        <main className="main">
          <Container fluid>
            <Suspense fallback={loading()}>
              <Switch>
                {routes.map((route, idx) => {
                  return route.component ? (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={props => (
                        <route.component user={props.user} {...props} />
                      )} />
                  ) : (null);
                })}
                <Redirect from="/" to="/dashboard" />
              </Switch>
            </Suspense>
          </Container>
        </main>
        <AppAside fixed>
          <Suspense fallback={loading()}>
            {/*<DefaultAside />*/}
          </Suspense>
        </AppAside>
      </div>
      <AppFooter>
        <Suspense fallback={loading()}>
          <DefaultFooter />
        </Suspense>
      </AppFooter>
    </div>
  );
}


export default DefaultLayout;
