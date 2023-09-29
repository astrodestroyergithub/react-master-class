import './App.css';
import Header from './components/Header';
import Employees from './pages/Employees';
import Customers from './pages/Customers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dictionary from './pages/Dictionary';
import Definition from './pages/Definition';

function App() {
  return (
    <BrowserRouter>
      <Header>
          <Routes>
            <Route path="/Employees" element={<Employees />} />
            <Route path="/Customers" element={<Customers />} />
            <Route path="/Dictionary" element={<Dictionary />} />
            <Route path="/Definition" element={<Definition />} />

          </Routes>
      </Header>
    </BrowserRouter>
    );
}

export default App;
