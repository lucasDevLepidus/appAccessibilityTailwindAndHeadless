import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home/';
import { Tips } from './pages/Tips/';

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tips" element={<Tips />} />
      </Routes>
    </BrowserRouter>
  );
}
