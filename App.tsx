import React from 'react';
import { SalesPage } from './pages/SalesPage';

function App() {
  // Since this is a single page request, we route directly to the SalesPage.
  // In a larger app, we would use HashRouter or similar here.
  return (
    <div className="antialiased">
      <SalesPage />
    </div>
  );
}

export default App;