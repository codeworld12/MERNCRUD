import logo from './logo.svg';
import './App.css';

//Components
import Navbar from './components/Navbar';
import Worldmatch from './components/Worldmatch';
import Allplayer from './components/Allplayers';
import Addplayer from './components/AddPlayer';
import EditPlayer from './components/EditPlayer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
      <Route path='/' element={<Worldmatch />} />
      <Route path='/add' element={<Addplayer />} />
      <Route path='/all' element={<Allplayer />} />
      <Route path='/edit/:id' element={<EditPlayer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
