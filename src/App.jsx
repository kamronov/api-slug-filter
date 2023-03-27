import { Route, Routes } from 'react-router-dom';
import './App.css';
import Users from './pages/Users/Users';
import Home from './pages/Home/Home';
import Eror from './pages/Eror/Eror';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/post/:slug' element={<Users/>}/>
        <Route path='/*' element={<Eror/>}/>
      </Routes>
    </div>
  );
}

export default App;
