import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './components/HomePage/HomePage';
import { MatchData } from './components/MatchData/MatchData';

function App() {

  
  return (
    <Routes>
      <Route path='*' element={<HomePage/>}/>
      <Route path='/match/:id' element={<MatchData/>}/>
    </Routes>
  );
}

export default App;
