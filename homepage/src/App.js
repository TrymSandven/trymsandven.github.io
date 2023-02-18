import React from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import './App.css';
import MainPage from '../src/pages/MainPage';
import Portfolio from "./pages/Portfolio";


function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' exact element={<MainPage />} />
                <Route path='/portfolio' element={<Portfolio />} />
            </Routes>
        </Router>
    );
}

export default App;