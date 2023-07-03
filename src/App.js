import logo from './logo.svg';
import './App.css';
import CsvParser from './Utils/CsvParser';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Here is the  <code>Dashboard</code>
        </p>
        <CsvParser/>
      </header>
      
    </div>
  );
}

export default App;
