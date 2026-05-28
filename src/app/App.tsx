import { BrowserRouter, Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { BurrenFlowerCaseStudy } from './pages/BurrenFlowerCaseStudy';
import { AccessibilityCaseStudy } from './pages/AccessibilityCaseStudy';
import { HookedCaseStudy } from './pages/HookedCaseStudy';
import { BakeryCaseStudy } from './pages/BakeryCaseStudy';
import { ExperimentalWorkPage } from './pages/ExperimentalWorkPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-studies/burren-flower-app" element={<BurrenFlowerCaseStudy />} />
        <Route path="/case-studies/accessibility-project" element={<AccessibilityCaseStudy />} />
        <Route path="/case-studies/hooked-app" element={<HookedCaseStudy />} />
        <Route path="/case-studies/bakery-website" element={<BakeryCaseStudy />} />
        <Route path="/experimental-work" element={<ExperimentalWorkPage />} />
      </Routes>
    </BrowserRouter>
  );
}