import './App.css'
import Home from './pages/Home.jsx'
import Header from './components/Header.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <>
   <Router>
    <Header  path="/" />
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
   </Router>
    </>
  )
}

export default App;
