import './App.css';
import NavBar from './component/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import TV_Shows from './pages/TV_Shows';
import Movies from './pages/Movies';
import Latest from './Latest';
import Languages from './pages/Languages';
import MyList from './pages/MyList';

function App() {

  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<HomeScreen/>}/> 
      <Route path="/series" element={<TV_Shows/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/new&popular" element={<Latest/>}/> 
      <Route path="/mylist" element={<MyList/>}/>
      <Route path="/languages" element={<Languages/>}/>
     </Routes>
    </div>
  );
}

export default App;
