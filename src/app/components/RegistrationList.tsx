'use client';
import React from 'react';
import Registration from '../types/Registration'; // Assuming you have a Registration type defined

async function fetchRegistrations() {
  const res = await fetch('http://localhost:5000/api/registrations'); // Your API endpoint
  const registrations = await res.json();
  return registrations;
}

interface RegistrationListProps {
  registrations: Registration[];
}

const RegistrationList: React.FC<RegistrationListProps> = ({ registrations }) => {
  const handleEdit = (id: number) => {
    window.location.href = `/edit/${id}`;
  };

  const handleDelete = async (id: number) => {
    await fetch(`http://localhost:5000/api/registrations/${id}`, {
      method: 'DELETE',
    });
    window.location.reload(); // Reload the page to reflect the changes
  };

  return (
    <div>
      <h2>Registrations</h2>
      <ul>
        {registrations.map((registration) => (
          <li key={registration.id}>
            {registration.user_name} - {registration.user_phone}
            <button onClick={() => handleEdit(registration.id)}>Edit</button>
            <button onClick={() => handleDelete(registration.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getRegistrationData() {
  const registrations = await fetchRegistrations();
  return registrations;
}

export default RegistrationList;
