import React from 'react';
import './App.css';
import './App1.css';
import Postview from './PostView/postview';
import LandingPage from './LandingPage/landingpage';
import PostUpload from './upload/uploadpost';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/post' element={<Postview/>}/>
            <Route path='/upload' element={<PostUpload/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
