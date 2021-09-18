import * as React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';

class App extends React.Component {

  // The remainder of the HTML
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <Dashboard/>
      </header>
    </div>
  );
}}

export default App;
