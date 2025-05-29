import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { useNotification } from '../context/NotificationContext';
import Registration from '../types/Registration';
import { approveRegistration } from '../services/registrationService';
import dayjs from 'dayjs';
import APP_CONFIG from '../utils/config';
import axios_instance from '../utils/axiosInstance';
import Grid2 from '@mui/material/Unstable_Grid2';

import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import {
  DataGrid,
  GridColDef,
  GridEventListener,
  GridRowEditStopReasons,
  GridRowId,
  GridActionsCellItem,
  GridRowsProp,
  GridRowModesModel,
} from '@mui/x-data-grid';

declare module '@mui/x-data-grid' {
  interface ToolbarPropsOverrides {
    setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
    setRowModesModel: (
      newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
    ) => void;
  }
}

export default function RegistrationListNew() {
  const { showError } = useNotification();
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [counts, setCounts] = useState({
    totalCount: 0,
    approvedCount: 0,
    rejectedCount: 0,
    pendingCount: 0
  });
  const [countsbyDate, setCountsByDate] = useState([
    { date: '', total: 0, kanya: 0, suvasini: 0 }
  ]);

  useEffect(() => {
    async function fetchRegistrations() {
      try {
        const res = await axios_instance.get(APP_CONFIG.apiBaseUrl + "/registrations");
        if (Array.isArray(res.data?.data)) {
          setRegistrations(res.data?.data);
        } else {
          setRegistrations([]);
        }
      } catch (error) {
        showError("Error fetching registrations");
        console.error("Error fetching registrations:", error);
        setRegistrations([]);
      } finally {
        setLoading(false);
      }
    }
    fetchRegistrations();
  }, []);

  useEffect(() => {
    fetchCounts();
  }, []);

  useEffect(() => {
    async function fetchCountsByDate() {
      try {
        const countRes = await axios_instance(APP_CONFIG.apiBaseUrl + '/registrationscountbydate');
        setCountsByDate(countRes.data?.data);
        console.log('Count by Date :', countRes.data?.data);
      } catch (error) {
        console.error('Error fetching registration counts by date:', error);
      }
    }
    fetchCountsByDate();
  }, []);

  const fetchCounts = async () => {
    try {
      const countRes = await axios_instance.get(APP_CONFIG.apiBaseUrl + '/registrations-count');
      setCounts(countRes.data?.data);
    } catch (error) {
      console.error('Error fetching registration counts:', error);
    }
  };

  const handleApproval = async (id: GridRowId, status: string) => {
    const regToUpdate = registrations.find((row) => row.regId === id);
    if (regToUpdate?.regId !== undefined) {
      await approveRegistration(regToUpdate.regId, status);
      setRegistrations((prev) =>
        prev.map((reg) => (reg.regId === id ? { ...reg, approvalStatus: status } : reg))
      );
      fetchCounts();
    } else {
      console.error('Registration ID is undefined');
    }
  };

  const handleApprove = (id: GridRowId) => handleApproval(id, 'APPROVED');
  const handleReject = (id: GridRowId) => handleApproval(id, 'REJECTED');

  const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const columns: GridColDef[] = [
    { field: 'regId', headerName: 'ID', width: 50, type: 'number', editable: false },
    { field: 'regType', headerName: 'Type', width: 100, editable: false },
    { field: 'age', headerName: 'Age', width: 100, type: 'number', editable: false },
    { field: 'motherToungue', headerName: 'Mother Tongue', width: 150, editable: false },
    { field: 'fathersGothram', headerName: 'Father Gothram', width: 150, editable: false },
    { field: 'dayId', headerName: 'Day', width: 100, type: 'number', editable: false },
    {
      field: 'registeredAt',
      headerName: 'Registered On',
      width: 120,
      type: 'date',
      editable: false,
      valueFormatter: (params) => params.value ? dayjs(params.value).format('DD/MM/YYYY') : ''
    },
    { field: 'regStatus', headerName: 'Attendance', width: 120, editable: false },
    {
      field: 'approvalStatus',
      headerName: 'Approval Status',
      width: 120,
      editable: false,
      renderCell: (params) => {
        const status = params.value;
        let color = 'black';
        if (status === 'APPROVED') color = 'green';
        else if (status === 'REJECTED') color = 'red';
        else if (status === 'AWAITING') color = 'orange';
        return <span style={{ color }}>{status}</span>;
      }
    },
{
  field: 'actions',
  type: 'actions',
  getActions: ({ id }) => {
    const row = registrations.find((reg) => String(reg.regId) === String(id));
    if (row?.approvalStatus === 'AWAITING') {
      return [
        <GridActionsCellItem
          icon={<CheckIcon />}
          label="Approve"
          onClick={() => handleApprove(id)}
        />,
        <GridActionsCellItem
          icon={<CloseIcon />}
          label="Reject"
          onClick={() => handleReject(id)}
        />
      ];
    }
    return [];
  }
}

        return [];
      },
    }
  ];

  if (loading) return <p>Loading registrations...</p>;

  return (
    <Grid2 container spacing={2} marginTop={-3}>
      <Grid2 xs={9}>
        <Box sx={{
          height: 500,
          width: '100%',
          '& .MuiDataGrid-columnHeader': {
            backgroundColor: '#693108',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 16,
          },
        }}>
          <h2>Registrations</h2>
          {registrations.length === 0 ? (
            <p>No registrations found.</p>
          ) : (
            <DataGrid
              getRowId={(row) => row.regId}
              rows={registrations}
              columns={columns}
              editMode="row"
              onRowEditStop={handleRowEditStop}
              initialState={{
                pagination: { paginationModel: { pageSize: 5 } },
              }}
              pageSizeOptions={[5, 10, 25]}
            />
          )}
        </Box>
      </Grid2>
      <Grid2 xs={3} display={'flex'} flexDirection={'column'} spacing={4}>
        <Card sx={{ minWidth: 250 }}>
          <CardContent>
            <Typography variant="h5">Registration Status</Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: 14 }}>as of Today</Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              <Typography sx={{ fontWeight: 'bold' }}>Approved: <span style={{ color: 'green' }}>{counts.approvedCount}</span></Typography>
              <Typography sx={{ fontWeight: 'bold' }}>Rejected: <span style={{ color: 'red' }}>{counts.rejectedCount}</span></Typography>
              <Typography sx={{ fontWeight: 'bold' }}>Total: <span style={{ color: 'blue' }}>{counts.totalCount}</span></Typography>
              <Typography sx={{ fontWeight: 'bold' }}>To Approve: <span style={{ color: 'orange' }}>{counts.pendingCount}</span></Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>
  );
}
