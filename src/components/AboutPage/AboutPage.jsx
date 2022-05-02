import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { Paper, Box } from '@material-ui/core'

import './AboutPage.css'

function AboutPage() {
  return (
    <div className="container">
      <Header
        pageTitle={'About'}
      />
      <Box
        p={1}
      >
        <Paper className='about-center'>

          <h1>Next Steps</h1>

          <p>Search through locations</p>

          <h1>Technologies Used</h1>

          <p>React</p>
          <p>React-Redux</p>
          <p>Redux-Saga</p>
          <p>Node</p>
          <p>Express</p>
          <p>Axios</p>
          <p>PostgresQL</p>
          <p>Sweet Alerts 2</p>
          <p>Material UI</p>
          <p>Chance.js</p>

          <h1>Thank You</h1>

          <p>Prime Digital Academy</p>
          <p>Dane</p>
          <p>Butler Cohort</p>

          <Footer />
        </Paper>
      </Box>
      
    </div>
  );
}

export default AboutPage;
