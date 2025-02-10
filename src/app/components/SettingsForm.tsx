import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Stack, Box } from '@mui/material';
import Settings from '../types/Settings';

import { createSettings, editSettings } from '../services/settingsService';

interface SettingsnFormProps {
  initialData?: {
    id?: number,
    eventStartDate: Date,
    eventEndDate: Date,
    dateForLocals: Date,
    tailorName: string,
    tailorEmail: string,
    tailorPhone: string,
    tailorAddress: string,
    bangleVendorName: string,
    bangleVendorEmail: string,
    bangleVendorPhone: string,
    bangleVendorAddress: string,
    kolusuVendorName: string,
    kolusuVendorEmail: string,
    kolusuVendorPhone: string,
    kolusuVendorAddress: string,
  };
  onSuccess: () => void;
  onError: () => void;
}


const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

const SettingsForm: React.FC<SettingsnFormProps> = ({ initialData, onSuccess }) => {

  const [eventStartDate, setEventStartDate] = useState(dayjs);
  const [eventEndDate, setEventEndDate] = useState(dayjs);
  const [dateForLocals, setDateForLocals] = useState(dayjs);
  const [tailorName, setTailorName] = useState(' ');
  const [tailorEmail, setTailorEmail] = useState(' ');
  const [tailorPhone, setTailorPhone] = useState(' ');
  const [tailorAddress, setTailorAddress] = useState(' ');
  const [bangleVendorName, setBangleVendorName] = useState(' ');
  const [bangleVendorEmail, setBangleVendorEmail] = useState(' ');
  const [bangleVendorPhone, setBangleVendorPhone] = useState(' ');
  const [bangleVendorAddress, setBangleVendorAddress] = useState(' ');
  const [kolusuVendorName, setKolusuVendorName] = useState(' ');
  const [kolusuVendorEmail, setKolusuVendorEmail] = useState(' ');
  const [kolusuVendorPhone, setKolusuVendorPhone] = useState(' ');
  const [kolusuVendorAddress, setKolusuVendorAddress] = useState(' ');



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (initialData?.id) {
      // Edit an existing settings
      await editSettings(initialData.id, eventStartDate, eventEndDate);
    } else {
      // Create a new settings
      const settingsObj: Settings = {
        eventStartDate,
        eventEndDate, 
        dateForLocals, 
        tailorName, 
        tailorEmail, 
        tailorPhone, 
        tailorAddress, 
        bangleVendorName, 
        bangleVendorEmail, 
        bangleVendorPhone, 
        bangleVendorAddress, 
        kolusuVendorName, 
        kolusuVendorEmail, 
        kolusuVendorPhone, 
        kolusuVendorAddress, 
      };
      await createSettings(settingsObj);
      onSuccess();
    }
  };

  return (
    <Box
    component="form"
    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
    noValidate
    autoComplete="off"
    onSubmit={handleSubmit}
  >
    <Grid container spacing={3}>
      <FormGrid size={{ xs: 12, md: 4 }}>
        <FormLabel htmlFor="first-name" required>
          Event Start Date
        </FormLabel>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker value={eventStartDate} onChange={(newValue) => { console.log(eventStartDate.toDate()); setEventStartDate(dayjs(newValue)) }} />
        </LocalizationProvider>
      </FormGrid>
      <FormGrid size={{ xs: 12, md: 4 }}>
        <FormLabel htmlFor="first-name" required>
          Event End Date
        </FormLabel>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker value={eventEndDate} onChange={(newValue) => { console.log(eventEndDate.toDate()); setEventEndDate(dayjs(newValue)) }} />
        </LocalizationProvider>
      </FormGrid>
      <FormGrid size={{ xs: 12, md: 4 }}>
        <FormLabel htmlFor="first-name" required>
          Date Reserved for Locals
        </FormLabel>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker value={dateForLocals} onChange={(newValue) => { console.log(dateForLocals.toDate()); setDateForLocals(dayjs(newValue)) }} />
        </LocalizationProvider>
      </FormGrid>
      <Stack spacing={2}>
        <Stack direction={"row"} spacing={2}>
          <FormGrid size={{ xs: 12, md: 4 }}>
            <FormLabel htmlFor="address2">Date</FormLabel>
            <OutlinedInput
              id="date1"
              name="date1"
              type="date1"
              placeholder="Date 1"
              autoComplete="Date..."
              required
              size="small"
            />
          </FormGrid>
          <FormGrid size={{ xs: 12, md: 4 }}>
            <FormLabel htmlFor="address2"># of Kanyas</FormLabel>
            <OutlinedInput
              id="kanya1"
              name="kanya1"
              type="kanya1"
              placeholder="150"
              autoComplete="Kanyas..."
              required
              size="small"
            />
          </FormGrid>
          <FormGrid size={{ xs: 12, md: 4 }}>
            <FormLabel htmlFor="address2"># of Suvashinis</FormLabel>
            <OutlinedInput
              id="suvashini1"
              name="suvashini1"
              type="suvashini1"
              placeholder="150"
              autoComplete="Suvashini..."
              required
              size="small"
            />
          </FormGrid>
        </Stack>
        <Stack direction={"row"} spacing={2}>
          <FormGrid size={{ xs: 12, md: 4 }}>
            <FormLabel htmlFor="address2">Date</FormLabel>
            <OutlinedInput
              id="date1"
              name="date1"
              type="date1"
              placeholder="Date 1"
              autoComplete="Date..."
              required
              size="small"
            />
          </FormGrid>
          <FormGrid size={{ xs: 12, md: 4 }}>
            <FormLabel htmlFor="address2"># of Kanyas</FormLabel>
            <OutlinedInput
              id="kanya1"
              name="kanya1"
              type="kanya1"
              placeholder="150"
              autoComplete="Kanyas..."
              required
              size="small"
            />
          </FormGrid>
          <FormGrid size={{ xs: 12, md: 4 }}>
            <FormLabel htmlFor="address2"># of Suvashinis</FormLabel>
            <OutlinedInput
              id="suvashini1"
              name="suvashini1"
              type="suvashini1"
              placeholder="150"
              autoComplete="Suvashini..."
              required
              size="small"
            />
          </FormGrid>
        </Stack>
        <Stack direction={"row"} spacing={2}>
          <FormGrid size={{ xs: 12, md: 4 }}>
            <FormLabel htmlFor="address2">Date</FormLabel>
            <OutlinedInput
              id="date1"
              name="date1"
              type="date1"
              placeholder="Date 1"
              autoComplete="Date..."
              required
              size="small"
            />
          </FormGrid>
          <FormGrid size={{ xs: 12, md: 4 }}>
            <FormLabel htmlFor="address2"># of Kanyas</FormLabel>
            <OutlinedInput
              id="kanya1"
              name="kanya1"
              type="kanya1"
              placeholder="150"
              autoComplete="Kanyas..."
              required
              size="small"
            />
          </FormGrid>
          <FormGrid size={{ xs: 12, md: 4 }}>
            <FormLabel htmlFor="address2"># of Suvashinis</FormLabel>
            <OutlinedInput
              id="suvashini1"
              name="suvashini1"
              type="suvashini1"
              placeholder="150"
              autoComplete="Suvashini..."
              required
              size="small"
            />
          </FormGrid>
        </Stack>
        <Stack direction={"row"} spacing={2}>
          <FormGrid size={{ xs: 12, md: 4 }}>
            <FormLabel htmlFor="address2">Date</FormLabel>
            <OutlinedInput
              id="date1"
              name="date1"
              type="date1"
              placeholder="Date 1"
              autoComplete="Date..."
              required
              size="small"
            />
          </FormGrid>
          <FormGrid size={{ xs: 12, md: 4 }}>
            <FormLabel htmlFor="address2"># of Kanyas</FormLabel>
            <OutlinedInput
              id="kanya1"
              name="kanya1"
              type="kanya1"
              placeholder="150"
              autoComplete="Kanyas..."
              required
              size="small"
            />
          </FormGrid>
          <FormGrid size={{ xs: 12, md: 4 }}>
            <FormLabel htmlFor="address2"># of Suvashinis</FormLabel>
            <OutlinedInput
              id="suvashini1"
              name="suvashini1"
              type="suvashini1"
              placeholder="150"
              autoComplete="Suvashini..."
              required
              size="small"
            />
          </FormGrid>
        </Stack>
      </Stack>
      <Stack spacing={2}>
        <Stack direction={"row"} spacing={2}>
          <FormGrid size={{ xs: 12, md: 12 }}>
            <FormLabel htmlFor="address2">Tailoring Vendor Name</FormLabel>
            <OutlinedInput
              id="tailor"
              name="tailor"
              type="tailor"
              placeholder="Tailor"
              autoComplete="Date..."
              required
              size="small"
              value={tailorName}
            />
          </FormGrid>
          <FormGrid size={{ xs: 12, md: 12 }}>
            <FormLabel htmlFor="address2">Tailoring Vendor Email</FormLabel>
            <OutlinedInput
              id="tailor"
              name="tailor"
              type="tailor"
              placeholder="Tailor"
              autoComplete="Date..."
              required
              size="small"
              value={tailorEmail}
            />
          </FormGrid>
          <FormGrid size={{ xs: 12, md: 12 }}>
            <FormLabel htmlFor="address2">Tailoring Vendor Phone</FormLabel>
            <OutlinedInput
              id="tailor"
              name="tailor"
              type="tailor"
              placeholder="Tailor"
              autoComplete="Date..."
              required
              size="small"
              value={tailorPhone}
            />
          </FormGrid>
          <FormGrid size={{ xs: 12, md: 12 }}>
            <FormLabel htmlFor="address2">Tailoring Vendor Address</FormLabel>
            <OutlinedInput
              id="tailor"
              name="tailor"
              type="tailor"
              placeholder="Tailor"
              autoComplete="Date..."
              required
              size="small"
              value={tailorAddress}
            />
          </FormGrid>
        </Stack>
        <Stack direction={"row"} spacing={2}>
          <FormGrid size={{ xs: 12, md: 12 }}>
            <FormLabel htmlFor="address2">Bangle Vendor Name</FormLabel>
            <OutlinedInput
              id="tailor"
              name="tailor"
              type="tailor"
              placeholder="Name"
              autoComplete="Date..."
              required
              size="small"
              value={bangleVendorName}
            />
          </FormGrid>
          <FormGrid size={{ xs: 12, md: 12 }}>
            <FormLabel htmlFor="address2">Bangle Vendor Email</FormLabel>
            <OutlinedInput
              id="tailor"
              name="tailor"
              type="tailor"
              placeholder="Email"
              autoComplete="Date..."
              required
              size="small"
              value={bangleVendorEmail}
            />
          </FormGrid>
          <FormGrid size={{ xs: 12, md: 12 }}>
            <FormLabel htmlFor="address2">Bangle Vendor Phone</FormLabel>
            <OutlinedInput
              id="tailor"
              name="tailor"
              type="tailor"
              placeholder="Phone"
              autoComplete="Date..."
              required
              size="small"
              value={bangleVendorPhone}
            />
          </FormGrid>
          <FormGrid size={{ xs: 12, md: 12 }}>
            <FormLabel htmlFor="address2">Bangle Vendor Address</FormLabel>
            <OutlinedInput
              id="tailor"
              name="tailor"
              type="tailor"
              placeholder="Tailor"
              autoComplete="Date..."
              required
              size="small"
              value={bangleVendorAddress}
            />
          </FormGrid>
        </Stack>
        <Stack direction={"row"} spacing={2}>
          <FormGrid size={{ xs: 12, md: 12 }}>
            <FormLabel htmlFor="address2">Kolusu Vendor Name</FormLabel>
            <OutlinedInput
              id="tailor"
              name="tailor"
              type="tailor"
              placeholder="Name"
              autoComplete="Date..."
              required
              size="small"
              value={kolusuVendorName}
            />
          </FormGrid>
          <FormGrid size={{ xs: 12, md: 12 }}>
            <FormLabel htmlFor="address2">Kolusu Vendor Email</FormLabel>
            <OutlinedInput
              id="tailor"
              name="tailor"
              type="tailor"
              placeholder="Email"
              autoComplete="Date..."
              required
              size="small"
              value={kolusuVendorEmail}
            />
          </FormGrid>
          <FormGrid size={{ xs: 12, md: 12 }}>
            <FormLabel htmlFor="address2">Kolusu Vendor Phone</FormLabel>
            <OutlinedInput
              id="tailor"
              name="tailor"
              type="tailor"
              placeholder="Phone"
              autoComplete="Date..."
              required
              size="small"
              value={kolusuVendorPhone}
            />
          </FormGrid>
          <FormGrid size={{ xs: 12, md: 12 }}>
            <FormLabel htmlFor="address2">Kolusu Vendor Address</FormLabel>
            <OutlinedInput
              id="tailor"
              name="tailor"
              type="tailor"
              placeholder="Address"
              autoComplete="Date..."
              required
              size="small"
              value={kolusuVendorAddress}
            />
          </FormGrid>
        </Stack>
        <Button color="primary" variant='contained' type='submit'>Save Details</Button>
      </Stack>
    </Grid>
    </Box>
  );
}

export default SettingsForm