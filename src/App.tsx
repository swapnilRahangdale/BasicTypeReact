import React from 'react';

import './App.css';
//import BaseComponent from './BaseComponent/BaseComponent';
import UserManagment from './UserManagment/UserManagment';



function App() {
  return (
    <div>

      {/* <BaseComponent 
      ComponyName = 'ComponyName:- GlobalLogic'
      EmpName = 'EmpName:- Swapnil Rahangdale'
      age = {26}
      address='Address :- Nagpur'
      /> */}

     
      <UserManagment isLogin={true}/>

    </div>
  );
}

 export default App;


