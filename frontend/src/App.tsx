import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import DomainsPage from './pages/Domains/DomainsPage';
import DomainDetail from './pages/DomainDetail/DomainDetail';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/domains" replace />} />
          <Route path="/domains" element={<DomainsPage />} />
          <Route path="/domain/:id" element={<DomainDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App; 