import './App.css'
import Footer from './components/Home/Footer';
import Header from './components/Header/Header.jsx';
import Home from './pages/Home'
import LocomotiveScroll from 'locomotive-scroll';
import { Outlet } from 'react-router-dom'
import { LoadingProvider } from './context/LoadingProvider.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';


function App() {

  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <LoadingProvider>
      <ScrollToTop />
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </LoadingProvider>
  )
}

export default App
