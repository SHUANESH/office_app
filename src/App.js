import logo from './logo.svg';
import {BrowserRouter as Router,  Switch, Route , Link} from 'react-router-dom';
import './App.css';
import Routing from './Components/Routing/Routing';
import Employee from './Components/Employee/Employee'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
       <Header/>
        <Router>
            <Routing/>
        </Router>
      <Footer/>
    </div>
  );
}

export default App;
