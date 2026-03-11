import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { WhyGeorgiaPage } from './pages/WhyGeorgiaPage';
import { FoundationPage } from './pages/FoundationPage';
import { ConsultationPage } from './pages/ConsultationPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/why-georgia" element={<WhyGeorgiaPage />} />
          <Route path="/foundation" element={<FoundationPage />} />
          <Route path="/consultation" element={<ConsultationPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
