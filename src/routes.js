import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Project = React.lazy(() => import('./views/Projects'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/project/:id', name: 'Project', component: Project },
];

export default routes;
