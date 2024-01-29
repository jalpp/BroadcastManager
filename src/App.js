import React from 'react';
import SurveyForm from './SurveyForm';
import './index.css';
import LichessTV from './LichessTv';

function App() {
  return (
    <div className="container">
      <h1>Broadcast Manager </h1>
      <p> Welcome to Broadcast Manager, a tool for Lichess broadcast members to view, search, Broadcast and generate valid broacast descriptions.</p>
      <SurveyForm />
    </div>
  );
}

export default App;


