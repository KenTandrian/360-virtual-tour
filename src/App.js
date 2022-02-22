import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>}>
          <Route index element={<Page1 />} />
          <Route path='page2' element={<Page2 />} />
          <Route path='page3' element={<Page3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
