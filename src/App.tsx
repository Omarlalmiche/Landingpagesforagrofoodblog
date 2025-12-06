import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './components/HomePage';
import { AgroIntelligent } from './components/AgroIntelligent';
import { Durabilite } from './components/Durabilite';
import { Innovation } from './components/Innovation';
import { Nutrition } from './components/Nutrition';
import { Alimentation } from './components/Alimentation';
import { Newsletter } from './components/Newsletter';
import { Search } from './components/Search';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/agroalimentaire-intelligent" element={<AgroIntelligent />} />
          <Route path="/durabilite-ecologie" element={<Durabilite />} />
          <Route path="/innovation-entrepreneuriat" element={<Innovation />} />
          <Route path="/nutrition-sante" element={<Nutrition />} />
          <Route path="/alimentation-societe" element={<Alimentation />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/recherche" element={<Search />} />
        </Routes>
      </Layout>
    </Router>
  );
}
