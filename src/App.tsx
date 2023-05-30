import React from 'react';
import logo from './logo.svg';
import './App.css';
import BaseComponent from './BaseComponent/BaseComponent';

function App() {
  return (
    <div>
      <BaseComponent 
      ComponyName = 'ComponyName:- GlobalLogic'
      EmpName = 'EmpName:- Swapnil Rahangdale'
      age = {26}
      address='Address :- Nagpur'
      />
    </div>
  );
}

export default App;
