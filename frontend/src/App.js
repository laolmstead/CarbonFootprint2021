import * as React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import Form from './Form';
import FormwithSidebar from './FormwithSidebar.js'


class App extends React.Component {

  // The remainder of the HTML
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <FormwithSidebar/>
        {/* <Form/> */}
        {/* <Dashboard/> */}
      </header>
    </div>
  );
}}

export default App;
