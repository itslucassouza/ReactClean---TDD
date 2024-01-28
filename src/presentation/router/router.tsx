import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from '../pages/Login/login';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
