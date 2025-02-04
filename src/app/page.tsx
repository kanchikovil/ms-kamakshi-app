import React from 'react';
import RegistrationListWithServerData from './components/RegistrationList/RegistrationList.server';
import RegistrationActions from './components/RegistrationList/RegistrationActions.client';
import RegistrationForm from './components/RegistrationForm';


export default async function HomePage() {
  return (
    <div>
      {/* <h1>Registration Management</h1> */}
      <RegistrationForm />
      <RegistrationListWithServerData />
    </div>
  );
}