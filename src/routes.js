import React from 'react';
import { Navigate } from 'react-router-dom';
import { OAuthCallback } from '@carto/react/oauth';
import Main from 'components/views/Main';
import NotFound from 'components/views/NotFound';

import Routes from 'components/views/Routes.js';
// Auto import
const routes = [
  {
    path: '/',
    element: <Main />,
    children: [
      // { path: '/', element: <Navigate to='/<your default view>' /> },
      { path: '/routes', element: <Routes /> },

      // Auto import routes
    ],
  },
  { path: '/oauthCallback', element: <OAuthCallback /> },
  { path: '404', element: <NotFound /> },
  { path: '*', element: <Navigate to='/404' /> },
];

export default routes;
