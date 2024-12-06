// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Tasks from './Tasks';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <h3>Demo Project</h3>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/tasks" element={<Tasks />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
