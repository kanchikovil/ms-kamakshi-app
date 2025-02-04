import React from 'react';
import RegistrationListWithServerData from '@/app/components/RegistrationList/RegistrationList.server';
import RegistrationActions from '@/app/components/RegistrationList/RegistrationActions.client';


export default async function AdminPage() {
  return (
    <div>
      {/* <h1>Registration Management</h1> */}
      {/* <RegistrationForm /> */}
      <RegistrationListWithServerData />
    </div>
  );
}