import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Créations from './Pages/Créations';
import Error from './Pages/Error';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <header id='header'>
      <Navigation />
      </header>
      <main className='main'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Creations/:id' element={<Créations />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
