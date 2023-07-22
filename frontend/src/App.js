import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Trains from './components/Trains';
import TrainbyId from './components/TrainbyId';
import { AppBar, Toolbar, Typography, Container, Button, IconButton } from '@mui/material';
// import TrainIcon from '@mui/icons-material';

const App = () => {
  return (
    <Router>
      <AppBar position="static" style={{ backgroundColor: '#F26C22' }}>
        <Toolbar>
          <IconButton component={Link} to="/" edge="start" color="inherit" aria-label="train-icon">
            {/* <TrainIcon style={{ fontSize: '30px' }} /> */}
          </IconButton>
          <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'white', marginLeft: '10px' }}>
            Express railway
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" style={{ marginTop: '20px' }}>
        <Routes>
          <Route path="/" element={<Trains />} />
          <Route path="/trains/:trainId" element={<TrainbyId />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
