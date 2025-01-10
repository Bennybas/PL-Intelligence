import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';  // Add this import
import LandingPage from './Landing/LandingPage';
import ExecutiveDashboard from './ExecutiveDashboard/ExecutiveDashboard';
import GlobalDashboard from './GlobalDashboard/GlobalDashboard';


const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/executive-dashboard" element={<ExecutiveDashboard />} />
          <Route path="/global-dashboard" element={<GlobalDashboard />} />
          {/* <Route path="/market-dashboard" element={<MarketDashboard />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;