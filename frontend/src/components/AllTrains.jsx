import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TableContainer, Table, Paper, TableCell, TableRow, TableHead, TableBody, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function AllTrains() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
   
    axios.get('http://localhost:8080/api/trains')
      .then((response) => {
        setTrains(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching train data:', error);
      });
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: 'auto' }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        All Trains Schedule
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Train Name</TableCell>
              <TableCell align="right">Train Number</TableCell>
              <TableCell align="right">Departure Time</TableCell>
              <TableCell align="right">Seats Available</TableCell>
              <TableCell align="right">Price (Sleeper)</TableCell>
              <TableCell align="right">Price (AC)</TableCell>
              <TableCell align="center">Book</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trains?.map((train) => (
              <TableRow key={train.trainNumber}>
                <TableCell>{train.trainName}</TableCell>
                <TableCell align="right">{train.trainNumber}</TableCell>
                <TableCell align="right">{train.departureTime}</TableCell>
                <TableCell align="right">{train.seatsAvailable}</TableCell>
                <TableCell align="right">{train.price.sleeper}</TableCell>
                <TableCell align="right">{train.price.AC}</TableCell>
                <TableCell align="center">
                  <Button
                    component={Link}
                    to={`/trains/${train.id}`}
                    variant="contained"
                    color="primary"
                  >
                    Show more
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default AllTrains;
