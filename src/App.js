import './App.css';
import {useState} from 'react'
import Routesep from './components/Routesep'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [darkTheme, setDarkTheme] = useState(false) 
  return (
    <div className={darkTheme? "dark" : ''}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Routesep />
        <Footer />
      </div>
    </div>
  );
}

export default App;
