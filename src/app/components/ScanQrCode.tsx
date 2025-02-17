import * as React from 'react';
// import Button from './components/controls/Button/Button';
import Button from '@mui/material/Button';
import './sqstyle.scss';
import { useState } from 'react';
// import Modal from './components/controls/Modal/Modal';
import Modal from '@mui/material/Modal';
import QRScanner from './controls/QRScanner/QRScanner';

export default function App() {
  const [isOpen, setOpen] = useState(false);

  const openHello = (event: any) => {
    setOpen(!isOpen);
    console.log(isOpen);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const qrScanner = isOpen ? <QRScanner /> : null;

  return (
    <div className="appContainer">
      <div className="main">
        <Button onClick={openHello}>Scan QR</Button>
      </div>
      <Modal open={isOpen} title="Scan QR Code" onClose={closeModal}>
        <div>{qrScanner}</div>
      </Modal>
    </div>
  );
}
