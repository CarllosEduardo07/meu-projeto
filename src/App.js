
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import Navbar from './components/Navbar';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/empresa' element={<Empresa/>}/>
          <Route path='/Contato' element={<Contato/>}/>
          <Route path='*' element={<h1>Rota não encontrada!</h1>} />
        </Routes>
        <Footer/>
    </Router>

  )
} 

