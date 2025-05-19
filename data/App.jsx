import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import SessionDetail from './components/SessionDetail';
import Login from './components/Login';

function App() {
  const token = localStorage.getItem("token");

  // ✅ Coloque o console aqui:
  console.log("TOKEN FRONT:", token);

  return (
    <Router>
      <Routes>
        <Route path="/" element={token ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/session/:sessionId" element={token ? <SessionDetail /> : <Navigate to="/" />} />
        <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
      </Routes>
    </Router>
  );
}

export default App;

