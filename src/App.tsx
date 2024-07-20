import './styles/App.css'
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import PlayerPage from './pages/PlayerPage';

function App() {

  return (
    <div style={{width: '100%'}}>  
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/playerpage/:name" element={<PlayerPage/>}/>
      </Routes>
    </div>
  )
}

export default App
