import React from 'react';
import HomePage1 from './pages/home/page';
import LandingPage from './pages/new-home/page2';
import NavarathriRegistration from '../pages/navarathri-registration';


export default async function HomePage() {
  return (
    <div>
      <LandingPage />
      {/* <h1>Registration Management</h1> */}
      {/* <RegistrationForm /> */}
      {/* <RegistrationListWithServerData /> */}
    </div>
  );
}