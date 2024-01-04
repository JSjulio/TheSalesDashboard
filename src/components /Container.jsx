import React from 'react';

function ContainerRow() {
  return (
    <div>
      <div className="container-row">
        <div className="container">1</div>
        <div className="container">2</div>
        <div className="container">3</div>
      </div>
      <div className="container-row">
        <div className="container larger">4</div>
        <div className="container larger">
          <div className="header">Header</div>
          <div className="row">a</div>
          <div className="row">b</div>
          <div className="row">c</div>
        </div>
      </div>
    </div>
  );
}

export default ContainerRow;
