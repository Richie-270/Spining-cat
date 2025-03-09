import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Tittle from './components/Tittle.jsx';
import Cat from './components/Cat.jsx';
import './styles/tittle.css';
import './styles/Cat.css';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tittle />
    <Cat />
  </StrictMode>
)
