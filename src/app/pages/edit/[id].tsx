// src/app/edit/[id].tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Registration {
  id: number;
  user_name: string;
  user_phone: string;
}

const EditPage = ({ params }: { params: { id: string } }) => {
  const [registration, setRegistration] = useState<Registration | null>(null);
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const router = useRouter();

  useEffect(() => {
    async function loadRegistration() {
      const res = await fetch(`http://localhost:5000/api/registrations/${params.id}`);
      const data = await res.json();
      setRegistration(data);
      setUserName(data.user_name);
      setUserPhone(data.user_phone);
    }

    loadRegistration();
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(`http://localhost:5000/api/registrations/${params.id}`, {
      method: 'PUT',
      body: JSON.stringify({ user_name: userName, user_phone: userPhone }),
      headers: { 'Content-Type': 'application/json' },
    });
    router.push('/'); // Redirect after successful edit
  };

  if (!registration) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>User Name</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>User Phone</label>
        <input
          type="text"
          value={userPhone}
          onChange={(e) => setUserPhone(e.target.value)}
          required
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default EditPage;
