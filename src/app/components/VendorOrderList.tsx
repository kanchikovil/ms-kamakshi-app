'use client';

import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Registration from '../types/Registration';
import { approveRegistration } from '../services/registrationService';
import { Grid2 } from '@mui/material';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Button from '@mui/material/Button';

//Dummy Date for now
const vendorOrders = [
  {
    id: 1,
    poojaDate: "12th Feb",
    orderNumber: "Order 1234",
    vendorType: "Tailor",
    orderItem: "Dress",
    size: 24,
    quantity: 30,
    deliveryDate: "10th Feb",
    orderStatus: "Send"
  },
  {
    id: 2,
    poojaDate: "13th Feb",
    orderNumber: "Order 5678",
    vendorType: "Tailor",
    orderItem: "Dress",
    size: 22,
    quantity: 40,
    deliveryDate: "11th Feb",
    orderStatus: "Sent"
  }
]


const VendorOrderList: React.FC = () => {
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
    <Grid2 container spacing={2}>
      <Grid2 size={12} >
        {/* Registration List */}
        <div style={{ flex: 1 }}>
          <h2>Vendor Orders</h2>
          {registrations.length === 0 ? (
            <p>No Orders found.</p>
          ) : (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow style={{ backgroundColor: "lightblue", fontStyle: "bold", fontSize: "14" }}>
                    <TableCell>Pooja Date</TableCell>
                    <TableCell align="right">Order #</TableCell>
                    <TableCell align="right">Vendor</TableCell>
                    <TableCell align="right">Item</TableCell>
                    <TableCell align="right">Size</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Delivery Date</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {vendorOrders.map((vendorOrder) => (
                    <TableRow
                      key={vendorOrder.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {vendorOrder.poojaDate}
                      </TableCell>
                      <TableCell align="right">{vendorOrder.orderNumber}</TableCell>
                      <TableCell align="right">{vendorOrder.vendorType}</TableCell>
                      <TableCell align="right">{vendorOrder.orderItem}</TableCell>
                      <TableCell align="right">{vendorOrder.size}</TableCell>
                      <TableCell align="right">{vendorOrder.quantity}</TableCell>
                      <TableCell align="right">{vendorOrder.deliveryDate}</TableCell>
                      <TableCell align="right">
                        {(vendorOrder.orderStatus !== 'Send') ? (
                          <Button variant="outlined" color="info" startIcon={<ScheduleSendIcon />}
                          onClick={() => alert('Need to Add Logic...')} >
                            Send
                          </Button>

                          // <IconButton aria-label="approve" color="success">
                          //   <ScheduleSendIcon onClick={() => handleApproval(vendorOrder.id || 0, 'Se')} />
                          // </IconButton>
                        ) : (
                          <Button variant="outlined" color="info" startIcon={<LocalShippingIcon />}
                          onClick={() => alert('Need to Add Logic...')}>
                          Receive
                        </Button>
                          // <IconButton aria-label="reject" color="error">
                          //   <LocalShippingIcon onClick={() => handleApproval(vendorOrder.id || 0, 'REJECTED')} />
                          // </IconButton>
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
    </Grid2>
  );
};

export default VendorOrderList;
