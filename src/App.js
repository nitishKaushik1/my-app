import './App.css';
import Header from './Header';
import Dashboard from './Dashboard';
import Footer from './Footer';
import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div class="wrapper" style={{ backgroundColor: "#0d0620" }}>
     <Header/>
      <Dashboard />
      <Footer/> 
    </div>
    </BrowserRouter>
  );
}

export default App;
