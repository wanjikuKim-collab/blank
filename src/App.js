import './App.css';
import NavBar from './component/NavBar/NavBar';
import BillBoard from './component/BillBoard';
import Footer from './component/Footer';
import Row from './component/Row';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BillBoard />
      <Row />
      <Footer/>
    </div>
  );
}

export default App;
