import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Typography, Paper, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function SingleTrain() {
  const { trainId } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/trains/${trainId}?token=YOUR_AUTH_TOKEN`)
      .then((response) => {
        setTrain(response.data);
      })
      .catch((error) => {
        console.error('Error fetching train data:', error);
      });
  }, [trainId]);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      {train ? (
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h4" component="h1" gutterBottom>
            IRCTC - Single Train Schedule
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" component="h2">
                Train Name: {train.trainName}
              </Typography>
              <Typography variant="body1">Train Number: {train.trainNumber}</Typography>
              <Typography variant="body1">Departure Time: {train.departureTime}</Typography>
              <Typography variant="body1">Delay: {train.delayInMinutes} minutes</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" component="h2">
                Price Details
              </Typography>
              <Typography variant="body1">Price (Sleeper): {train.price.sleeper}</Typography>
              <Typography variant="body1">Price (AC): {train.price.AC}</Typography>
              <Typography variant="body1">Seats Available: {train.seatsAvailable}</Typography>
            </Grid>
          </Grid>
          <div style={{ marginTop: '20px' }}>
            <Button component={Link} to="/all-trains" variant="contained" color="primary" style={{ marginRight: '10px' }}>
              Back to All Trains
            </Button>
            <Button variant="contained" color="secondary">
              Book Now
            </Button>
          </div>
        </Paper>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SingleTrain;
