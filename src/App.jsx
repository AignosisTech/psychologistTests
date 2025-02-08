import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router, Route, and Routes
import PatientHistory from './components/PatientHistory'; // Import the combined PatientHistory component
import TestMain from './components/testPages/TestMain';
import ScrollToTop from './components/ScrollToTop';

import DownloadPage from './components/testPages/DownloadPage';
import CARS from './components/patient-history-form/CARS';
import ISAA from './components/patient-history-form/ISAA';
import INCLEN from './components/patient-history-form/INCLEN';
import Error from './Error';
import DataCollectionPage from './DataCollectionPage';

const App = () => {
  return (
    <>
      <ScrollToTop /> {/* Optional: if you want to scroll to the top on route change */}
      <Routes> {/* Use Routes to define all your routes */}
      <Route path="/" element={<TestMain />} />
        <Route path="/patienthistory" element={<PatientHistory />} /> {/* Updated route for PatientHistory */}
        {/* <Route path="/test/fillup" element={<TestMain />} /> */}

        <Route path="/download" element={<DownloadPage />} />
        <Route path="/CARS" element={<CARS />} />
        <Route path="/ISAA" element={<ISAA />} />
        <Route path="/INCLEN" element={<INCLEN />} />
        <Route path="/Error" element={<Error />} />
        <Route path="/dataCollection" element={<DataCollectionPage />} />

        
      </Routes>
    </>
  );
};

export default App;
