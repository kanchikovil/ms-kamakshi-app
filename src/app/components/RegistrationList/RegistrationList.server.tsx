// src/app/components/RegistrationList.server.tsx
import React from 'react';
import Registration from '../../types/Registration'; // Assuming you have a Registration type defined
import RegistrationActions from './RegistrationActions.client';

// Server function to fetch registrations from an API or database
async function fetchRegistrations(): Promise<Registration[]> {
  const res = await fetch('http://localhost:5000/api/registrations'); // Your API endpoint
  const registrations = await res.json();
  return registrations;
}

interface RegistrationListProps {
  registrations: Registration[];
}

const RegistrationList: React.FC<RegistrationListProps> = ({ registrations }) => {
  return (
    <div>
      <h2>Registrations</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map((registration) => (
            <tr key={registration.id}>
              <td>{registration.user_name}</td>
              <td>{registration.user_phone}</td>
              <td>{<RegistrationActions id={registration.id} />}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Server component fetching the registrations data
export default async function RegistrationListWithServerData() {
  const registrations = await fetchRegistrations();
  return <RegistrationList registrations={registrations} />;
}
