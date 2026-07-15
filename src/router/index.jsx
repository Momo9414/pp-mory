import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DocumentViewer from '../pages/DocumentViewer';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DocumentViewer />,
  },
  {
    path: '/document/:slug',
    element: <DocumentViewer />,
  },
  {
    path: '*',
    element: <NotFound />,
  }
]);
