import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { useNotification } from '../context/NotificationContext';
import Registration from '../types/Registration';
import { approveRegistration } from '../services/registrationService';
import dayjs from 'dayjs';
import APP_CONFIG from '../utils/config';
import axios_instance from '../utils/axiosInstance';
import Grid2 from '@mui/material/Unstable_Grid2';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {
  GridRowsProp,
  GridRowModesModel,
  DataGrid,
  GridColDef,
  GridActionsCellItem,
  GridEventListener,
  GridRowId,
  GridRowEditStopReasons,
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
  const [counts, setCounts] = useState<{ totalCount: number; approvedCount: number; rejectedCount: number, pendingCount: number }>({
    totalCount: 0,
    approvedCount: 0,
    rejectedCount: 0,
    pendingCount: 0
  });
  const [countsbyDate, setCountsByDate] = useState<[{ date: string, total: number; kanya: number; suvasini: number }]>([{
    date: '',
    total: 0,
    kanya: 0,
    suvasini: 0
  }]);


  // Fetch Registrations List
  useEffect(() => {
    async function fetchRegistrations() {
      try {
        const res = await axios_instance.get(APP_CONFIG.apiBaseUrl + "/registrations");
        // Ensure the response is an array before setting state
        if (Array.isArray(res.data?.data)) {
          setRegistrations(res.data?.data);
          // console.log(res.data?.data);
        } else {
          setRegistrations([]); // Fallback to an empty array
        }
      } catch (error) {
        showError("Error fetching registrations");
        console.error("Error fetching registrations:", error);
        setRegistrations([]); // Ensure it's an array even on error
      } finally {
        setLoading(false);
      }
    }
    fetchRegistrations();
  }, []);

  // Fetch Registration Counts
  useEffect(() => {
    async function fetchCounts() {
      try {
        const countRes = await axios_instance(APP_CONFIG.apiBaseUrl + '/registrations-count');
        setCounts(countRes.data?.data);
      } catch (error) {
        console.error('Error fetching registration counts:', error);
      }
    }
    fetchCounts();
  }, []);

  // Fetch Registration Counts by Date
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

  // Handle Approval
  const handleApproval = async (id: GridRowId, status: string) => {
    const regToUpdt = registrations.find((row) => row.regId === id);
    if (regToUpdt?.regId !== undefined) {
      await approveRegistration(regToUpdt.regId, status);
    } else {
      console.error('Registration ID is undefined');
    }

    // Refresh the lists and counts
    setRegistrations((prev) =>
      prev.map((reg) => (reg.regId === id ? { ...reg, approvalStatus: status } : reg))
    );

    // Refresh counts
    fetchCounts();
  };

  // Fetch updated counts
  async function fetchCounts() {
    try {
      const countRes = await fetch(APP_CONFIG.apiBaseUrl + '/registrations-count');
      const countData = await countRes.json();
      setCounts(countData.data);
    } catch (error) {
      console.error('Error fetching registration counts:', error);
    }
  }

  if (loading) return <p>Loading registrations...</p>;


  const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const columns: GridColDef[] = [
    { field: 'regId', headerName: 'ID', align: 'left', width: 50, type: 'number', editable: false },
    {
      field: 'regType',
      headerName: 'Type',
      type: 'string',
      width: 100,
      align: 'left',
      editable: false,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 100,
      align: 'left',
      editable: false,
    },
    {
      field: 'motherToungue',
      headerName: 'Mother Tongue',
      type: 'string',
      width: 150,
      align: 'left',
      editable: false,
    },
    {
      field: 'fathersGothram',
      headerName: 'Father Gothram',
      type: 'string',
      width: 150,
      align: 'left',
      editable: false,
    },
    {
      field: 'dayId',
      headerName: 'Day',
      width: 20,
      align: 'left',
      editable: false,
      type: 'number',
    },
    {
      field: 'registeredAt',
      headerName: 'Registered On',
      width: 120,
      align: 'left',
      editable: false,
      type: 'date',
      valueFormatter: (params) => {
        return dayjs(params).format('DD/MM/YYYY');
      }
    },
    {
      field: 'regStatus',
      headerName: 'Attendance',
      width: 120,
      align: 'left',
      editable: false,
      type: 'string',
    },
    {
      field: 'approvalStatus',
      headerName: 'Approval Status',
      width: 120,
      align: 'left',
      editable: false,
      type: 'string',
      renderCell: (params) => {
        const status = params.value;
        let color = 'black';
        if (status === 'APPROVED') {
          color = 'green';
        } else if (status === 'REJECTED') {
          color = 'red';
        } else if (status === 'AWAITING') {
          color = 'orange';
        }
        return <span style={{ color }}>{status}</span>;
      }
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 120,
      align: 'left',
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const row = registrations.find((reg) => reg.regId === id);
        if (row?.approvalStatus === 'AWAITING') {
          return [
            <GridActionsCellItem
              icon={<CheckCircleOutlineIcon />}
              label="Approve"
              className="textPrimary"
              onClick={() => id !== undefined && handleApproval(id, 'APPROVED')}
              color="success"
            />,
            <GridActionsCellItem
              icon={<CancelOutlinedIcon />}
              label="Reject"
              onClick={() => id !== undefined && handleApproval(id, 'REJECTED')}
              color="error"
            />,
          ];
        }
        return [];
      },
    },
  ];

  return (

    <Grid2 container spacing={2} marginTop={-3}>
      <Grid2 size={9} >
        <Box
          sx={{
            height: 500,
            width: '100%',
            '& .actions': {
              color: 'text.secondary',
            },
            '& .textPrimary': {
              color: 'text.primary',
            },
          }}
        >
          <h2>Registrations</h2>
          {!registrations || registrations?.length === 0 ? (
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
              sx={{
                
                '& .MuiDataGrid-columnHeader': {
                  backgroundColor: '#693108',
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: 16,
                },
              }}
            />
          )}
        </Box>
      </Grid2>
      <Grid2 size={3} display={'flex'} spacing={4}>
        <Card sx={{ minWidth: 250 }}>
          <CardContent sx={{ padding: 2 }} key={counts.totalCount}>
            <Typography variant="h5" component="div">
              Registration Status
            </Typography>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
              as of Today
            </Typography>
            <Box alignItems={'flex-start'} display={'flex'} >
              <div>
                <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 15, fontWeight: 'bold' }}>Approved</Typography>
                <Typography sx={{ color: 'green', mb: 1.5, fontSize: 20 }}>{counts.approvedCount}</Typography>
              </div>
              <div style={{ paddingLeft: '20px' }}>
                <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 15, fontWeight: 'bold' }}>Rejected</Typography>
                <Typography sx={{ color: 'red', mb: 1.5, fontSize: 20 }}>{counts.rejectedCount}</Typography>
              </div>
              <div style={{ paddingLeft: '20px' }}>
                <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 15, fontWeight: 'bold' }}>Total</Typography>
                <Typography sx={{ color: 'blue', mb: 1.5, fontSize: 20 }}>{counts.totalCount}</Typography>
              </div>
              <div style={{ paddingLeft: '20px' }}>
                <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 15, fontWeight: 'bold' }}>To Approve</Typography>
                <Typography sx={{ color: 'grey', mb: 1.5, fontSize: 20 }}>{counts.pendingCount}</Typography>
              </div>
            </Box>
            <Typography variant="h5" component="div">
              Kanyas & Suvasini
              <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                Approved Registrations...as of Today
              </Typography>
            </Typography>
            <Box alignItems={'flex-start'} display={'flex'} >
              <div>
                <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 15, fontWeight: 'bold' }}>Date</Typography>
              </div>
              <div style={{ paddingLeft: '20px' }}>
                <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 15, fontWeight: 'bold' }}>Kanyas</Typography>
              </div>
              <div style={{ paddingLeft: '20px' }}>
                <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 15, fontWeight: 'bold' }}>Suvasini</Typography>
              </div>
              <div style={{ paddingLeft: '20px' }}>
                <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 15, fontWeight: 'bold' }}>Total</Typography>
              </div>
            </Box>
            {countsbyDate.map((column, index) => (
              <Box alignItems={'flex-start'} display={'flex'} key={index}>
                <div>
                  <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 15 }}>{column.date}</Typography>
                </div>
                <div style={{ paddingLeft: '20px' }}>
                  <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 15 }}>{column.kanya}</Typography>
                </div>
                <div style={{ paddingLeft: '20px' }}>
                  <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 15 }}>{column.suvasini}</Typography>
                </div>
                <div style={{ paddingLeft: '20px' }}>
                  <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 15 }}>{column.total}</Typography>
                </div>
              </Box>
            ))}
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>

  );
}