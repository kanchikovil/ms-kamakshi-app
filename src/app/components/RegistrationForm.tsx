// src/components/RegistrationForm.tsx
import React, { useState, useEffect } from 'react';
import { createRegistration, editRegistration } from '../services/registrationService';

interface RegistrationFormProps {
  initialData?: { user_name: string, user_phone: string, id?: number };
  onSuccess: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ initialData, onSuccess }) => {
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    if (initialData) {
      setUserName(initialData.user_name);
      setPhoneNumber(initialData.user_phone);
    }
  }, [initialData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (initialData?.id) {
      // Edit an existing registration
      await editRegistration(initialData.id, userName, phoneNumber);
    } else {
      // Create a new registration
      await createRegistration(userName, phoneNumber);
    }
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Registration Name</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Phone Number</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
