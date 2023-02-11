
import './App.css';
import Navigation from "./Components/Navigation/Navigation";
import Main from './Components/Main/Main';
import Details  from './Components/Details/Details';
import Started from './Components/Started/Started';
import Services from './Components/Services/Services'; 
import Form from './Components/Form/Form';
import Footer from './Components/Footer/Footer';  
import About  from './Components/About/About';


function App() {
  return (
    <div className="App">
    
         <Navigation/>
         <Main/>
         <Details/>
         <Started/>
         <Services/>
         <Form/>
         <About/>
         <Footer/>
              
    
    </div>
  );
}

export default App;
