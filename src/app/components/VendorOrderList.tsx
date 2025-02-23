'use client';

import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid2 } from '@mui/material';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Button from '@mui/material/Button';
import Order from '../types/Order';
import dayjs from 'dayjs';


const VendorOrderList: React.FC = () => {
  const [orderList, setOrderList] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

    // Fetch Order List
    useEffect(() => {
      async function fetchOrderList() {
        try {
          const apiRes = await fetch('http://localhost:5000/api/vendorOrders');
          const res = await apiRes.json();
          setOrderList(res.data);
        } catch (error) {
          console.error('Error fetching registrations:', error);
        } finally {
          setLoading(false);
        }
      }
      fetchOrderList();
    }, []);

  if (loading) return <p>Loading Order Details...</p>;

  return (
    <Grid2 container spacing={2}>
      <Grid2 size={12} >
        {/* Registration List */}
        <div style={{ flex: 1 }}>
          <h2>Vendor Orders</h2>
          {orderList.length === 0 ? (
            <p>No Orders found.</p>
          ) : (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow style={{ backgroundColor: "lightblue", fontStyle: "bold", fontSize: "14" }}>
                    <TableCell>Pooja Date</TableCell>
                    {/* <TableCell align="right">Order #</TableCell>
                    <TableCell align="right">Vendor</TableCell> */}
                    <TableCell align="right">Item</TableCell>
                    <TableCell align="right">Size</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Delivery Date</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orderList.map((vendorOrder) => (
                    <TableRow
                      key={dayjs(vendorOrder.registrationDate).unix()}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {dayjs(vendorOrder.registrationDate).format('DD-MM-YYYY')}
                      </TableCell>
                      <TableCell align="right">{vendorOrder.vendorType}</TableCell>
                      <TableCell align="right">{vendorOrder.dressSize}</TableCell>
                      <TableCell align="right">{vendorOrder.dressSizeCount}</TableCell>
                      {/* <TableCell align="right">{vendorOrder.bangleSize}</TableCell>
                      <TableCell align="right">{vendorOrder.bangleSizeCount}</TableCell>
                      <TableCell align="right">{vendorOrder.kolusuSize}</TableCell>
                      <TableCell align="right">{vendorOrder.kolusuSizeCount}</TableCell> */}
                      <TableCell align="right">{JSON.stringify(vendorOrder.neededByDate)}</TableCell>
                      <TableCell align="right">
                        {(vendorOrder.orderStatus !== 'Send') ? (
                          <Button variant="outlined" color="info" startIcon={<ScheduleSendIcon />}
                          onClick={() => alert('Need to Add Logic...')} >
                            Send
                          </Button>
                        ) : (
                          <Button variant="outlined" color="info" startIcon={<LocalShippingIcon />}
                          onClick={() => alert('Need to Add Logic...')}>
                          Receive
                        </Button>
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
