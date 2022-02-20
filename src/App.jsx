import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Footer from './components/layout/Footer';
import Menu from './components/pages/Menu';
import About from './components/pages/About';
import Contact from './components/pages/Contact';



function App() {

return (
    <div className="App">
      
      <Router>
        
        <Navbar />
        
        <Switch>
          
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/menu'>
            <Menu />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
         
        </Switch>
        
        <Footer />

      </Router>
    
    </div>
      
  );
}

export default App;
