import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
     <Navbar />
    </div>
  );
}

export default App;
