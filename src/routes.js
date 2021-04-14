import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Project = React.lazy(() => import('./views/Projects'));
const Profile = React.lazy(() => import('./views/Profile'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/project/:id', name: 'Project', component: Project },
  { path: '/profile', name: 'Profile', component: Profile }
];

export default routes;
