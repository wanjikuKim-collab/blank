import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import Series from './pages/Series';
import Movies from './pages/Movies';
import Latest from './Latest';
import Languages from './pages/Languages';
import MyList from './pages/MyList';

function App() {

  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<HomeScreen/>}/> 
      <Route path="/series" element={<Series/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/new&popular" element={<Latest/>}/> 
      <Route path="/mylist" element={<MyList/>}/>
      <Route path="/languages" element={<Languages/>}/>
     </Routes>
    </div>
  );
}

export default App;
