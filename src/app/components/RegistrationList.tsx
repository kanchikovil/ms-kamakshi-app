'use client';

import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlined from '@mui/icons-material/CancelOutlined';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Registration from '../types/Registration';
import { approveRegistration } from '../services/registrationService';
import { Grid2, Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';
import APP_CONFIG from '../utils/config';
import axios_instance from '../utils/axiosInstance';
import { useNotification } from '../context/NotificationContext';
import axios from 'axios';


interface Column {
  id: 'regId' | 'regType' | 'approvalStatus' | 'dayId' | 'registeredAt' | 'regStatus' | 'action';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: string | dayjs.Dayjs) => string;
}

const columns: readonly Column[] = [
  { id: 'regId', label: 'Reg Id', minWidth: 50 },
  {
    id: 'regType',
    label: 'Type',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'approvalStatus',
    label: 'Approval Status',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'dayId',
    label: 'Day',
    minWidth: 170,
    align: 'right',
    //format: (value: number) => value.toFixed(0),
  },
  {
    id: 'registeredAt',
    label: 'Registered On',
    minWidth: 170,
    align: 'right',
    //format: (value: dayjs.Dayjs) => value.format('DD/MM/YYYY'),
  },
  {
    id: 'regStatus',
    label: 'Attendance Status',
    minWidth: 170,
    align: 'right',
  },
];


const RegistrationList: React.FC = () => {
  const { showError } = useNotification();
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [counts, setCounts] = useState<{ totalCount: number; approvedCount: number; rejectedCount: number, pendingCount: number }>({
    totalCount: 0,
    approvedCount: 0,
    rejectedCount: 0,
    pendingCount: 0
  });

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Fetch Registrations List
  useEffect(() => {
    async function fetchRegistrations() {
      try {
        const res = await axios_instance.get(APP_CONFIG.apiBaseUrl + "/registrations");
        // Ensure the response is an array before setting state
        if (Array.isArray(res.data?.data)) {
          setRegistrations(res.data?.data);
          console.log(res.data?.data);
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

  // Handle Approval
  const handleApproval = async (id: number, status: string) => {
    await approveRegistration(id, status);

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

  return (
    // <div style={{ display: 'flex', justifyContent: 'space-between' }}>

    <Grid2 container spacing={2} marginTop={-3}>
      <Grid2 size={9} >
        {/* Registration List */}
        <div style={{ flex: 1 }}>
          <h2>Registrations</h2>
          {!registrations || registrations?.length === 0 ? (
            <p>No registrations found.</p>
          ) : (
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
              <TableContainer component={Paper}>
                <Table stickyHeader sx={{ minWidth: 300, maxHeight: 440 }} aria-label="simple table">
                  <TableHead >
                    {/* <TableRow style={{ backgroundColor: "lightblue", fontStyle: "bold", fontSize: "14" }}>
                      <TableCell>Reg Id</TableCell>
                      <TableCell align="left">Type</TableCell>
                      <TableCell align="left">Date</TableCell>
                      <TableCell align="left">Fathers Gothram</TableCell>
                      <TableCell align="left">Fathers Vedam</TableCell>
                      <TableCell align="left">Attendence Status</TableCell>
                      <TableCell align="right">Approval Status</TableCell>
                    </TableRow> */}

                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                          sx={{ backgroundColor: 'lightblue' }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                       <TableCell align="right" sx={{ backgroundColor: 'lightblue' }}>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {registrations
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row) => {
                        return (
                          <TableRow hover role="checkbox" tabIndex={-1} key={row.regId}>
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  {column.format && (typeof value === 'string' || dayjs.isDayjs(value))
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                              );
                            })}
                            <TableCell align="right">
                              {(row.approvalStatus !== 'APPROVED' && row.approvalStatus !== 'REJECTED') ? (
                                <Stack direction="row" spacing={1} justifyContent={'flex-end'}>
                                  <IconButton
                                    aria-label="approve"
                                    color="success"
                                    onClick={() => row.regId !== undefined && handleApproval(row.regId, 'APPROVED')}
                                  >
                                    <CheckCircleOutlineIcon />
                                  </IconButton>
                                  <IconButton
                                    aria-label="reject"
                                    color="error"
                                    onClick={() => row.regId !== undefined && handleApproval(row.regId, 'REJECTED')}
                                  >
                                    <CancelOutlined />
                                  </IconButton>
                                </Stack>
                              ) : (
                                <Chip label={row.approvalStatus} color="primary" size="small" />
                              )}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>

                  {/* <TableBody>
                    {registrations?.map((registration) => (
                      <TableRow
                        key={registration.regId}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell>
                          {registration.regId}
                        </TableCell>
                        <TableCell>
                          {registration.regType}
                        </TableCell>
                        <TableCell>
                          {registration.registeredAt ? dayjs(registration.registeredAt).format('DD/MM/YYYY') : ''}
                        </TableCell>
                        <TableCell>
                          Father's Gothram here
                        </TableCell>
                        <TableCell>
                          Father's Vedam here
                        </TableCell>
                        <TableCell>
                          {registration.regStatus}
                        </TableCell>
                        <TableCell align="right">
                          {(registration.approvalStatus !== 'APPROVED' && registration.approvalStatus !== 'REJECTED') ? (
                            <Stack direction="row" spacing={1} justifyContent={'flex-end'}>
                              <IconButton aria-label="approve" color="success">
                                <CheckCircleOutlineIcon onClick={() => handleApproval(registration.regId || 0, 'APPROVED')} />
                              </IconButton>
                              <IconButton aria-label="reject" color="error">
                                <CancelOutlined onClick={() => handleApproval(registration.regId || 0, 'REJECTED')} />
                              </IconButton>
                            </Stack>
                          ) : (
                            <Chip label={registration.approvalStatus} color="primary" size='small' />
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody> */}
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={registrations.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          )}
        </div>
      </Grid2>
      <Grid2 size={3} display={'flex'} spacing={4}>
        <Card sx={{ minWidth: 250 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Registration Status
            </Typography>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
              as of Today
            </Typography>
            <Box alignItems={'flex-start'} display={'flex'} >
              <div>
                <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 15 }}>Approved</Typography>
                <Typography sx={{ color: 'green', mb: 1.5, fontSize: 20 }}>{counts.approvedCount}</Typography>
              </div>
              <div style={{ paddingLeft: '20px' }}>
                <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 15 }}>Rejected</Typography>
                <Typography sx={{ color: 'red', mb: 1.5, fontSize: 20 }}>{counts.rejectedCount}</Typography>
              </div>
              <div style={{ paddingLeft: '20px' }}>
                <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 15 }}>Total</Typography>
                <Typography sx={{ color: 'blue', mb: 1.5, fontSize: 20 }}>{counts.totalCount}</Typography>
              </div>
              <div style={{ paddingLeft: '20px' }}>
                <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 15 }}>To Approve</Typography>
                <Typography sx={{ color: 'grey', mb: 1.5, fontSize: 20 }}>{counts.pendingCount}</Typography>
              </div>
            </Box>
            {/* <Typography variant="body1">
                To be Approved :
                {counts.totalCount}
              </Typography> */}
            <Typography variant="h5" component="div">
              Kanyas & Suvasini
            </Typography>
            <Box alignItems={'flex-start'} display={'flex'} >
              <div>
                <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 15 }}>Date</Typography>
              </div>
              <div style={{ paddingLeft: '20px' }}>
                <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 15 }}>Kanyas</Typography>
              </div>
              <div style={{ paddingLeft: '20px' }}>
                <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 15 }}>Suvasini</Typography>
              </div>
              <div style={{ paddingLeft: '20px' }}>
                <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 15 }}>Total</Typography>
              </div>
            </Box>
            <Box alignItems={'flex-start'} display={'flex'} >
              <div>
                <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 15 }}>Date 1</Typography>
              </div>
              <div style={{ paddingLeft: '20px' }}>
                <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 15 }}>{counts.approvedCount}</Typography>
              </div>
              <div style={{ paddingLeft: '20px' }}>
                <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 15 }}>{counts.rejectedCount}</Typography>
              </div>
              <div style={{ paddingLeft: '20px' }}>
                <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 15 }}>{counts.totalCount}</Typography>
              </div>
            </Box>
            <Box alignItems={'flex-start'} display={'flex'} >
              <div>
                <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 15 }}>Date 1</Typography>
              </div>
              <div style={{ paddingLeft: '20px' }}>
                <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 15 }}>{counts.approvedCount}</Typography>
              </div>
              <div style={{ paddingLeft: '20px' }}>
                <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 15 }}>{counts.rejectedCount}</Typography>
              </div>
              <div style={{ paddingLeft: '20px' }}>
                <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 15 }}>{counts.totalCount}</Typography>
              </div>
            </Box>
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>





    // </div>
  );
};

export default RegistrationList;
