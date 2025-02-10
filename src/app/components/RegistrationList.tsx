'use client';

import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlined from '@mui/icons-material/CancelOutlined';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Registration from '../types/Registration';
import { approveRegistration } from '../services/registrationService';
import { Grid2, Box, CardHeader } from '@mui/material';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const RegistrationList: React.FC = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [counts, setCounts] = useState<{ totalCount: number; approvedCount: number; rejectedCount: number }>({
    totalCount: 0,
    approvedCount: 0,
    rejectedCount: 0,
  });

  // Fetch Registrations List
  useEffect(() => {
    async function fetchRegistrations() {
      try {
        const apiRes = await fetch('http://localhost:5000/api/registrations');
        const res = await apiRes.json();
        setRegistrations(res.data);
      } catch (error) {
        console.error('Error fetching registrations:', error);
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
        const countRes = await fetch('http://localhost:5000/api/registrations-count');
        const countData = await countRes.json();
        setCounts(countData.data);
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
      prev.map((reg) => (reg.id === id ? { ...reg, approvalStatus: status } : reg))
    );

    // Refresh counts
    fetchCounts();
  };

  // Fetch updated counts
  async function fetchCounts() {
    try {
      const countRes = await fetch('http://localhost:5000/api/registrations-count');
      const countData = await countRes.json();
      setCounts(countData.data);
    } catch (error) {
      console.error('Error fetching registration counts:', error);
    }
  }

  if (loading) return <p>Loading registrations...</p>;

  return (
    // <div style={{ display: 'flex', justifyContent: 'space-between' }}>

    <Grid2 container spacing={2}>
      <Grid2 size={9} >
        {/* Registration List */}
        <div style={{ flex: 1 }}>
          <h2>Registrations</h2>
          {registrations.length === 0 ? (
            <p>No registrations found.</p>
          ) : (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow style={{ backgroundColor: "lightblue", fontStyle: "bold", fontSize: "14" }}>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Phone</TableCell>
                    <TableCell align="right">Location</TableCell>
                    <TableCell align="right">Maternal Gothram</TableCell>
                    <TableCell align="right">Mother Tongue</TableCell>
                    <TableCell align="right">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {registrations.map((registration) => (
                    <TableRow
                      key={registration.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {registration.userName}
                      </TableCell>
                      <TableCell align="right">{registration.userPhone}</TableCell>
                      <TableCell align="right">{registration.nativePlace}</TableCell>
                      <TableCell align="right">{registration.maternalGothram}</TableCell>
                      <TableCell align="right">{registration.motherTongue}</TableCell>
                      <TableCell align="right">
                        {(registration.approvalStatus !== 'APPROVED' && registration.approvalStatus !== 'REJECTED') ? (
                          <Stack direction="row" spacing={1}>
                            <IconButton aria-label="approve" color="success">
                              <CheckCircleOutlineIcon onClick={() => handleApproval(registration.id || 0, 'APPROVED')} />
                            </IconButton>
                            <IconButton aria-label="reject" color="error">
                              <CancelOutlined onClick={() => handleApproval(registration.id || 0, 'REJECTED')} />
                            </IconButton>
                          </Stack>
                        ) : (
                          <Chip label={registration.approvalStatus} color="primary" />
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
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
                <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 20 }}>{counts.approvedCount}</Typography>
              </div>
              <div style={{ paddingLeft: '20px' }}>
                <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 15 }}>Rejected</Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 20 }}>{counts.rejectedCount}</Typography>
              </div>
              <div style={{ paddingLeft: '20px' }}>
                <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 15 }}>Total</Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 20 }}>{counts.totalCount}</Typography>
              </div>
              <div style={{ paddingLeft: '20px' }}>
                <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 15 }}>To Approve</Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 20 }}>{counts.totalCount}</Typography>
              </div>
            </Box>
            {/* <Typography variant="body1">
                To be Approved :
                {counts.totalCount}
              </Typography> */}
            <Typography variant="h5" component="div">
              Kanyas & Suvashini
            </Typography>
            <Box alignItems={'flex-start'} display={'flex'} >
              <div>
                <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 15 }}>Date</Typography>
              </div>
              <div style={{ paddingLeft: '20px' }}>
                <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 15 }}>Kanyas</Typography>
              </div>
              <div style={{ paddingLeft: '20px' }}>
                <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 15 }}>Suvashini</Typography>
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
