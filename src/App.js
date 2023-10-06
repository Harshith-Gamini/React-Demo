import {HashRouter,Routes,Route}from "react-router-dom";
import {Home, About} from "./components/F2";
import Contact from "./components/Contact";
import './App.css';
import Nav from './components/Nav';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <HashRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
        </Routes>
      </HashRouter>
    </div>
    
  );
}

export default App;
