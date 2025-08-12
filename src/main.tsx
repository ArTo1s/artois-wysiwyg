// src/main.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function Panel() {
  return (
    <div style={{ padding: 12 }}>
      <h2 style={{ margin: 0 }}>WYSIWYG (dev shell)</h2>
      <p>App loaded inside the Editor’s right panel.</p>
      <p>Next step: receive current string context and render a WYSIWYG.</p>
    </div>
  );
}

function App() {
  return <div>Root OK (not used by Crowdin module)</div>;
}

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/panel', element: <Panel /> },
]);

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
