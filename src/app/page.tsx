import React from 'react';
import RegistrationListWithServerData from './components/RegistrationList/RegistrationList.server';
import RegistrationActions from './components/RegistrationList/RegistrationActions.client';

export default async function HomePage() {
  return (
    <div>
      <h1>Registration Management</h1>
      <RegistrationListWithServerData />
    </div>
  );
}