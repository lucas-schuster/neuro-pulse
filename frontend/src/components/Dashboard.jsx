import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/dashboard/sessions`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt_token')}`
      }
    })
      .then(res => res.json())
      .then(data => setSessions(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Sessões do Terapeuta</h1>
      <ul className="space-y-3">
        {sessions.map(sess => (
          <li key={sess.id} className="p-4 bg-white shadow rounded">
            <p>Cliente: {sess.client.code}</p>
            <p>Escala: {sess.scale}</p>
            <p>Data: {new Date(sess.response?.created_at).toLocaleString()}</p>
            <Link to={`/session/${sess.id}`} className="text-blue-600 underline">Ver detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;

