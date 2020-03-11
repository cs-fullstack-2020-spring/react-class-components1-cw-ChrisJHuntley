import React from 'react';
function Bank(prop) {
    return (
      <div>
          <h2>Name: {prop.customerName}</h2>
          <h2>Balance: {prop.balance}</h2>
      </div>
    );
  }
  
  export default Bank;