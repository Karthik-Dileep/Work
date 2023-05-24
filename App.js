import './App.css';
import Add from './Component/Add';
import Bar from './Component/Bar';
import Table1 from './Component/Table1';
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Bar /> 
        <Routes>
          <Route path="/Table1" element={<Table1 />}/>
          <Route path="/Add" element={<Add />}/>
        </Routes>
    </div>
  );
}

export default App;
