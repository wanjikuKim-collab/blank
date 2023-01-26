import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import Series from './pages/Series';
import Movies from './pages/Movies';
import MyList from './pages/MyList';

function App() {

  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<HomeScreen/>}/> 
      <Route path="/series" element={<Series/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/mylist" element={<MyList/>}/>
     </Routes>
    </div>
  );
}

export default App;
