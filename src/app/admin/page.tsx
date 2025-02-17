'use client'
import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import RegistrationList from '../components/RegistrationList';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import SettingsForm from '../components/SettingsForm';
import { useNotification } from '../context/NotificationContext';
import VendorOrderList from '../components/VendorOrderList';
import QRScanner from '../components/controls/QRScanner/QRScanner';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function AdminPage() {

  const [value, setValue] = React.useState(0);
    const { showSuccess, showError } = useNotification();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


  return (

    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab icon={<HowToRegIcon />} iconPosition="start" label="Registerations" {...a11yProps(0)} />
          <Tab icon={<SupportAgentIcon />} iconPosition="start" label="Vendors" {...a11yProps(1)} />
          {/* <Tab label="Donors" {...a11yProps(2)} /> */}
          <Tab icon={<SettingsApplicationsIcon />} iconPosition="start" label="Settings" {...a11yProps(2)} />
          <Tab label="Entry Scan" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <RegistrationList />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <VendorOrderList />
      </CustomTabPanel>
      {/* <CustomTabPanel value={value} index={2}>
        Donors
      </CustomTabPanel> */}
      <CustomTabPanel value={value} index={2}>
        <SettingsForm onSuccess={function (): void {
         showSuccess('Settings Saved Succefully')
        } } 
        
        onError={ function (): void {
          showError('Settings Failed to Save...')
        }  }
        />
      </CustomTabPanel>
      <CustomTabPanel  value={value} index={3}>
        <QRScanner />
      </CustomTabPanel>
    </Box>

  );
}