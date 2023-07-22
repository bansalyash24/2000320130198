import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AllTrains from './components/AllTrains';
import SingleTrain from './components/SingleTrain';
import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';

const App = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'white', marginRight: '20px' }}>
            Trian Indian
          </Typography>
          <Button component={Link} to="/" color="inherit">
            All Trains
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" style={{ marginTop: '20px' }}>
        <Routes>
          <Route path="/" element={<AllTrains />} />
          <Route path="/trains/:trainId" element={<SingleTrain />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
