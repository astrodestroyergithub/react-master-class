import './App.css';
import Header from './components/Header';
import Employees from './pages/Employees';
import Customers from './pages/Customers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dictionary from './pages/Dictionary';
import Definition from './pages/Definition';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header>
          <Routes>
            <Route path="/Employees" element={<Employees />} />
            <Route path="/Customers" element={<Customers />} />
            <Route path="/dictionary" element={<Dictionary />} />
            <Route 
              path="/definition/:search" 
              element={<Definition />} 
            />
            <Route path="/404" element={<NotFound />} />
            <Route path="/*" element={<NotFound />} />

          </Routes>
      </Header>
    </BrowserRouter>
    );
}

export default App;
