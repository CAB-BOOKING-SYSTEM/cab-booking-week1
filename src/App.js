import React from 'react';
import './App.css';

function App() {
  const name = "John";
  const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 }
  ];

  const calculateTotal = (price = 100, tax = 0.1, discount = 0) => {
    return price * (1 + tax) - discount;
  };

  return (
    // VẪN DÙNG div.App để wrap toàn bộ app (cần cho CSS layout)
    <div className="App">
      <header className="main-header">
        <h1>ES6 & JSX & Fragments Demo</h1>
        <p className="subtitle">Modern React Development Techniques</p>
      </header>

      {/* ES6 Section - GIỮ NGUYÊN (có div là OK) */}
      <section className="section section-es6">
        <h2>🎯 ES6 Features</h2>
        <div className="content-box">
          <div className="content-item">
            <strong>Const Variable:</strong> <span className="code-inline">{name}</span>
          </div>
          <div className="content-item">
            <strong>Template Literals:</strong> <span className="code-inline">{`Hello ${name}`}</span>
          </div>
          <div className="content-item">
            <strong>Destructuring:</strong> {users.map(({name, age}) => `${name} (${age})`).join(', ')}
          </div>
          <div className="content-item">
            <strong>Spread Operator:</strong> {JSON.stringify([...users, {id: 3, name: 'Charlie'}])}
          </div>
          <div className="content-item">
            <strong>Arrow Functions:</strong> {(() => "This is arrow function")()}
          </div>
          <div className="content-item">
            <strong>Default Parameters:</strong> 
            <div style={{ marginTop: '5px' }}>
              <span className="code-inline">calculateTotal()</span> = {calculateTotal()}
              <br />
              <span className="code-inline">calculateTotal(200)</span> = {calculateTotal(200)}
              <br />
              <span className="code-inline">calculateTotal(200, 0.2, 10)</span> = {calculateTotal(200, 0.2, 10)}
            </div>
          </div>
        </div>
      </section>

      {/* JSX Section - GIỮ NGUYÊN (có div là OK) */}
      <section className="section section-jsx">
        <h2>⚛️ JSX Features</h2>
        <div className="content-box">
          <div className="content-item">
            <strong>JavaScript Expressions:</strong> Sum of 5 + 10 = <span className="code-inline">{5 + 10}</span>
          </div>
          
          <button className="demo-button" onClick={() => alert('Hello from JSX!')}>
            🎯 Click Me - JSX Event Handler
          </button>
          
          <div className="content-item">
            <strong>Conditional Rendering:</strong>
            <span className="code-inline">{users.length > 0 ? '✅ Has users' : '❌ No users'}</span>
          </div>
          
          <div className="content-item" style={{ backgroundColor: '#e3f2fd', padding: '15px', borderRadius: '8px' }}>
            <strong>Inline Styles:</strong> This uses inline styles with JSX
          </div>
          <div className="content-item className-demo">
            <strong>className Attribute:</strong> This uses CSS class
          </div>
        </div>
      </section>

      {/* Fragments Section 1 - SỬA: KHÔNG CÓ DIV THỪA */}
      <section className="section section-fragments">
        <h2>📦 Fragments with Table - NO EXTRA DIVS</h2>
        
        {/* KHÔNG DÙNG div.fragment-demo */}
        <p className="fragment-demo-text">
          Using Fragments inside table rows (no extra DOM nodes)
        </p>
        
        <table className="demo-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                {/* Fragment trong table - KHÔNG CÓ DIV */}
                <>
                  <td className="table-cell">{user.id}</td>
                  <td className="table-cell">{user.name}</td>
                  <td className="table-cell">{user.age}</td>
                </>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Fragments Section 2 - SỬA: THAY DIV BẰNG FRAGMENT */}
      <section className="section section-fragments">
        <h2>🔑 Fragments with Keys - USING FRAGMENT INSTEAD OF DIV</h2>
        
        {/* THAY div.content-box BẰNG Fragment */}
        <>
          <p>Using React.Fragment with key prop for lists:</p>
          <ul className="demo-list">
            {users.map(user => (
              <React.Fragment key={user.id}>
                <li className="list-item"><strong>ID:</strong> {user.id}</li>
                <li className="list-item"><strong>Name:</strong> {user.name}</li>
                <li className="list-item"><strong>Age:</strong> {user.age}</li>
              </React.Fragment>
            ))}
          </ul>
        </>
      </section>

      {/* Summary Section - SỬA: THAY DIV BẰNG FRAGMENT */}
      <section className="section" style={{ borderLeftColor: '#e74c3c' }}>
        <h2>📝 Summary - FRAGMENT DEMO AREA</h2>
        
        {/* THAY div.content-box BẰNG Fragment */}
        <>
          <p className="summary-item">
            <strong>ES6:</strong> Modern JavaScript syntax and features
          </p>
          <p className="summary-item">
            <strong>JSX:</strong> JavaScript XML for UI composition
          </p>
          <p className="summary-item">
            <strong>Fragments:</strong> Group elements without extra DOM nodes
          </p>
        </>
      </section>
    </div>
  );
}

export default App;