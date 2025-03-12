import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './views/Home';
import Instituicoes from './views/Instituicoes';
import Outros from './views/Outros';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="instituicoes" element={<Instituicoes />} />
          <Route path="outros" element={<Outros />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
