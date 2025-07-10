// import React, { useEffect, useState } from 'react';
// import Box from '@mui/material/Box';
// import { useNotification } from '../context/NotificationContext';
// import Registration from '../types/Registration';
// import { approveRegistration } from '../services/registrationService';
// import dayjs from 'dayjs';
// import APP_CONFIG from '../utils/config';
// import axios_instance from '../utils/axiosInstance';
// import Grid2 from '@mui/material/Unstable_Grid2';

// import CheckIcon from '@mui/icons-material/Check';
// import CloseIcon from '@mui/icons-material/Close';

// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import {  GridActionsColDef } from '@mui/x-data-grid';


// import {
//   DataGrid,
//   GridColDef,
//   GridEventListener,
//   GridRowEditStopReasons,
//   GridRowId,
  
//   GridRowsProp,
//   GridRowModesModel,
// } from '@mui/x-data-grid';
// import { GridActionsCellItem } from '@mui/x-data-grid-pro';

 
// declare module '@mui/x-data-grid' {
//   interface ToolbarPropsOverrides {
//     setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
//     setRowModesModel: (
//       newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
//     ) => void;
//   }
// }

// export default function RegistrationListNew() {
//   const { showError } = useNotification();
//   const [registrations, setRegistrations] = useState<Registration[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [counts, setCounts] = useState({
//     totalCount: 0,
//     approvedCount: 0,
//     rejectedCount: 0,
//     pendingCount: 0
//   });
//   const [countsbyDate, setCountsByDate] = useState([
//     { date: '', total: 0, kanya: 0, suvasini: 0 }
//   ]);

//   useEffect(() => {
//     async function fetchRegistrations() {
//       try {
//         const res = await axios_instance.get(APP_CONFIG.apiBaseUrl + "/registrations");
//         if (Array.isArray(res.data?.data)) {
//           setRegistrations(res.data?.data);
//         } else {
//           setRegistrations([]);
//         }
//       } catch (error) {
//         showError("Error fetching registrations");
//         console.error("Error fetching registrations:", error);
//         setRegistrations([]);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchRegistrations();
//   }, []);

//   useEffect(() => {
//     fetchCounts();
//   }, []);

//   useEffect(() => {
//     async function fetchCountsByDate() {
//       try {
//         const countRes = await axios_instance(APP_CONFIG.apiBaseUrl + '/registrationscountbydate');
//         setCountsByDate(countRes.data?.data);
//         console.log('Count by Date :', countRes.data?.data);
//       } catch (error) {
//         console.error('Error fetching registration counts by date:', error);
//       }
//     }
//     fetchCountsByDate();
//   }, []);

//   const fetchCounts = async () => {
//     try {
//       const countRes = await axios_instance.get(APP_CONFIG.apiBaseUrl + '/registrations-count');
//       setCounts(countRes.data?.data);
//     } catch (error) {
//       console.error('Error fetching registration counts:', error);
//     }
//   };

//   const handleApproval = async (id: GridRowId, status: string) => {
//     const regToUpdate = registrations.find((row) => row.regId === id);
//     if (regToUpdate?.regId !== undefined) {
//       await approveRegistration(regToUpdate.regId, status);
//       setRegistrations((prev) =>
//         prev.map((reg) => (reg.regId === id ? { ...reg, approvalStatus: status } : reg))
//       );
//       fetchCounts();
//     } else {
//       console.error('Registration ID is undefined');
//     }
//   };

//   const handleApprove = (id: GridRowId) => handleApproval(id, 'APPROVED');
//   const handleReject = (id: GridRowId) => handleApproval(id, 'REJECTED');

//   const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
//     if (params.reason === GridRowEditStopReasons.rowFocusOut) {
//       event.defaultMuiPrevented = true;
//     }
//   };

//   const columns: (GridColDef | GridActionsColDef)[] = [
//     { field: 'regId', headerName: 'ID', width: 50, type: 'number', editable: false },
//     { field: 'regType', headerName: 'Type', width: 100, editable: false },
//     { field: 'age', headerName: 'Age', width: 100, type: 'number', editable: false },
//     { field: 'motherToungue', headerName: 'Mother Tongue', width: 150, editable: false },
//     { field: 'fathersGothram', headerName: 'Father Gothram', width: 150, editable: false },
//     { field: 'dayId', headerName: 'Day', width: 100, type: 'number', editable: false },
//     {
//       field: 'registeredAt',
//       headerName: 'Registered On',
//       width: 120,
//       type: 'date',
//       editable: false,
//       valueFormatter: (params) => params.value ? dayjs(params.value).format('DD/MM/YYYY') : ''
//     },
//     { field: 'regStatus', headerName: 'Attendance', width: 120, editable: false },
//     {
//       field: 'approvalStatus',
//       headerName: 'Approval Status',
//       width: 120,
//       editable: false,
//       renderCell: (params) => {
//         const status = params.value;
//         let color = 'black';
//         if (status === 'APPROVED') color = 'green';
//         else if (status === 'REJECTED') color = 'red';
//         else if (status === 'AWAITING') color = 'orange';
//         return <span style={{ color }}>{status}</span>;
//       }
//     },
// {
//   field: 'actions',
//   type: 'actions',
//   headerName: 'Actions',
//   width: 120,
//   getActions: ({ id }) => {
//     const row = registrations.find((reg) => String(reg.regId) === String(id));

//     if (row?.approvalStatus === 'AWAITING') {
//       return [
//         <GridActionsCellItem
//           icon={<CheckIcon />}
//           label="Approve"
//           onClick={() => handleApprove(id)}
//           showInMenu={false}
//         />,
//         <GridActionsCellItem
//           icon={<CloseIcon />}
//           label="Reject"
//           onClick={() => handleReject(id)}
//           showInMenu={false}
//         />
//       ];
//     }
//     return []; 
//   },
// }

//   ];

//   if (loading) return <p>Loading registrations...</p>;

// return (
//   <Box sx={{ padding: { xs: 1, md: 3 } }}>
//     <Grid2 container spacing={2} marginTop={{ xs: 0, md: -3 }}>
//       {/* DataGrid Section */}
//       <Grid2 xs={12} md={9}>
//         <Box
//           sx={{
//             width: '100%',
//             overflowX: 'auto',
//             '& .MuiDataGrid-columnHeader': {
//               backgroundColor: '#693108',
//               color: '#fff',
//               fontWeight: 'bold',
//               fontSize: 16,
//             },
//           }}
//         >
//           <Typography variant="h6" fontSize={{ xs: 18, md: 24 }} mb={1}>
//             Registrations
//           </Typography>
//           {registrations.length === 0 ? (
//             <Typography>No registrations found.</Typography>
//           ) : (
//             <Box sx={{ minWidth: 600, height: 500 }}>
//               <DataGrid
//                 getRowId={(row) => row.regId}
//                 rows={registrations}
//                 columns={columns}
//                 editMode="row"
//                 onRowEditStop={handleRowEditStop}
//                 initialState={{
//                   pagination: { pageSize: 5 },
//                 }}
//                 rowsPerPageOptions={[5, 10, 25]}
//               />
//             </Box>
//           )}
//         </Box>
//       </Grid2>

//       {/* Status Card Section */}
//       <Grid2 xs={12} md={3}>
//         <Card sx={{ width: '100%', minWidth: 250 }}>
//           <CardContent>
//             <Typography variant="h6" fontSize={{ xs: 18, md: 20 }}>
//               Registration Status
//             </Typography>
//             <Typography sx={{ color: 'text.secondary', fontSize: { xs: 12, md: 14 } }}>
//               as of Today
//             </Typography>
//             <Box display="flex" flexDirection="column" gap={1} mt={2}>
//               <Typography sx={{ fontWeight: 'bold' }}>
//                 Approved: <span style={{ color: 'green' }}>{counts.approvedCount}</span>
//               </Typography>
//               <Typography sx={{ fontWeight: 'bold' }}>
//                 Rejected: <span style={{ color: 'red' }}>{counts.rejectedCount}</span>
//               </Typography>
//               <Typography sx={{ fontWeight: 'bold' }}>
//                 Total: <span style={{ color: 'blue' }}>{counts.totalCount}</span>
//               </Typography>
//               <Typography sx={{ fontWeight: 'bold' }}>
//                 To Approve: <span style={{ color: 'orange' }}>{counts.pendingCount}</span>
//               </Typography>
//             </Box>
//           </CardContent>
//         </Card>
//       </Grid2>
//     </Grid2>
//   </Box>
// );

// }import React, { useEffect, useState } from 'react';

'use client';

import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid2 from '@mui/material/Unstable_Grid2';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';

import dayjs from 'dayjs';
import {
  DataGrid,
  GridColDef,
  GridRowId,
  GridEventListener,
  GridRowEditStopReasons,
} from '@mui/x-data-grid';

import { useNotification } from '../context/NotificationContext';
import Registration from '../types/Registration';
import { approveRegistration } from '../services/registrationService';
import APP_CONFIG from '../utils/config';
import axios_instance from '../utils/axiosInstance';

export default function RegistrationListNew() {
  const { showError } = useNotification();
  const isWide = useMediaQuery('(min-width:1110px)');

  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [counts, setCounts] = useState({
    totalCount: 0,
    approvedCount: 0,
    rejectedCount: 0,
    pendingCount: 0,
  });

  useEffect(() => {
    async function fetchRegistrations() {
      try {
        const res = await axios_instance.get(APP_CONFIG.apiBaseUrl + '/registrations');
        setRegistrations(Array.isArray(res.data?.data) ? res.data?.data : []);
      } catch (error) {
        showError('Error fetching registrations');
        console.error('Error fetching registrations:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchRegistrations();
    fetchCounts();
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
    { field: 'regId', headerName: 'ID', width: 50, type: 'number' },
    { field: 'regType', headerName: 'Type', width: 100 },
    { field: 'attendeeAge', headerName: 'Age', width: 100, type: 'number'},
    { field: 'motherToungue', headerName: 'Mother Tongue', width: 150,  },
    { field: 'fathersGothram', headerName: 'Father Gothram', width: 150, },
    { field: 'dayId', headerName: 'Day', width: 100 },
    {
      field: 'registeredAt',
      headerName: 'Registered On',
      width: 120,
        valueFormatter: (value) => {
          if (value) {
            return dayjs(value).format('DD-MM-YYYY'); // Example format
          }
          return ''; // Return empty string or other fallback for null/invalid dates
        },
    },
    { field: 'regStatus', headerName: 'Attendance', width: 120 },
    {
      field: 'approvalStatus',
      headerName: 'Approval Status',
      width: 120,
      renderCell: (params) => {
        const status = params.value;
        let color = 'black';
        if (status === 'APPROVED') color = 'green';
        else if (status === 'REJECTED') color = 'red';
        else if (status === 'AWAITING') color = 'orange';
        return <span style={{ color }}>{status}</span>;
      },
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 120,
      sortable: false,
      filterable: false,
      renderCell: (params) => {
        const { id } = params;
        const row = registrations.find((reg) => String(reg.regId) === String(id));

        if (row?.approvalStatus === 'AWAITING') {
          return (
            <Box display="flex" gap={1}>
              <CheckIcon
                onClick={() => handleApprove(id)}
                sx={{
                  color: 'green',
                  cursor: 'pointer',
                  '&:hover': { transform: 'scale(1.2)' },
                  transition: '0.2s',
                }}
              />
              <CloseIcon
                onClick={() => handleReject(id)}
                sx={{
                  color: 'red',
                  cursor: 'pointer',
                  '&:hover': { transform: 'scale(1.2)' },
                  transition: '0.2s',
                }}
              />
            </Box>
          );
        }

        return null;
      },
    },
  ];

  if (loading) return <p>Loading registrations...</p>;

  return (
    <Box sx={{ padding: { xs: 1, md: 3 } }}>
      <Grid2 container spacing={2} direction={isWide ? 'row' : 'column'}>
        {/* Status Card */}
        <Grid2 xs={12} md={3}  sx={{ mb: isWide ? 0 : 2 }}>
          <Card sx={{ width: '100%', minWidth: 250, mt:10 }}>
            <CardContent>
              <Typography variant="h6" fontSize={{ xs: 18, md: 20  }}>
                Registration Status
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: { xs: 12, md: 14 } }}>
                as of Today
              </Typography>
              <Box display="flex" flexDirection="column" gap={1} mt={2}>
                <Typography sx={{ fontWeight: 'bold' }}>
                  Approved: <span style={{ color: 'green' }}>{counts.approvedCount}</span>
                </Typography>
                <Typography sx={{ fontWeight: 'bold' }}>
                  Rejected: <span style={{ color: 'red' }}>{counts.rejectedCount}</span>
                </Typography>
                <Typography sx={{ fontWeight: 'bold' }}>
                  Total: <span style={{ color: 'blue' }}>{counts.totalCount}</span>
                </Typography>
                <Typography sx={{ fontWeight: 'bold' }}>
                  To Approve: <span style={{ color: 'orange' }}>{counts.pendingCount}</span>
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid2>

        {/* Table */}
        <Grid2 xs={12} md={9}>
          <Box>
            <Typography variant="h6" fontSize={{ xs: 18, md: 24 }} mb={1}>
              Registrations
            </Typography>
            {registrations.length === 0 ? (
              <Typography>No registrations found.</Typography>
            ) : (
              <Box sx={{ width: '100%', overflowX: 'auto' }}>
                <Box
  sx={{
    width: '100%',
    height: 500,
    minWidth: { xs: '100%', md: 600 },
  }}
>

                  <DataGrid
                    getRowId={(row) => row.regId}
                    rows={registrations}
                    columns={columns}
                    editMode="row"
                    onRowEditStop={handleRowEditStop}
                    initialState={{
                      pagination: {
                        paginationModel: { pageSize: 5, page: 0 },
                      },
                    }}
                    pageSizeOptions={[5, 10, 25]}
                    disableColumnMenu
                    sx={{
                      '& .MuiDataGrid-columnHeaders': {
                        backgroundColor: '#693108',
                        color: '#000000',
                        fontWeight: 'bold',
                      },
                      '& .MuiDataGrid-columnHeaderTitle': {
                        fontWeight: 'bold',
                      },
                      border: '1px solid #ddd',
                      borderRadius: 2,
                    }}
                  />
                </Box>
              </Box>
            )}
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
