'use client'; // Indicating this is a client-side component

import React from 'react';
import { useRouter } from 'next/navigation';

interface RegistrationActionsProps {
  id: number;
}

const RegistrationActions: React.FC<RegistrationActionsProps> = ({ id }) => {
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/edit/${id}`); // Navigate to the edit page
  };

  const handleDelete = async () => {
    await fetch(`http://localhost:8080/api/registrations/${id}`, {
      method: 'DELETE',
    });
    window.location.reload(); // Reload the page to reflect the changes
  };

  return (
    <div>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default RegistrationActions;
