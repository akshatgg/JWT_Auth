import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Signin from './Signin';
import ForgotPassword from './ForgotPassword';
import Out from './Out';

const App = () => {
  return (
   
    <Router>
      <Routes>
        <Route path="" element={<Out/>}>

        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        </Route>
      </Routes>
    </Router>
    
  );
};

export default App;
