import './App.css';
import {HashRouter as Router,Route,Routes} from "react-router-dom"
import Header from './header/Header';
import First from './first/First.tsx';
import Mainpage from './components/mainpage/Mainpage.tsx';
import Jspage from './components/jspage/Jspage.tsx';
import Solar from './components/solarpage/Solar.tsx';
import Elec from './components/elec/Elec.tsx';

function App() {
  function CloseFirst(){
    const close = document.getElementById('close');

    close.style.display = 'none'

  }
  return (
    <div className="App">
        <Router>
          
          <First/>

          <Routes>
            <Route path='/' element={<Mainpage/>}></Route>
            <Route path='/home' element={<Mainpage/>}></Route>
            <Route path='/javascript' element={<Jspage/>}></Route>
            <Route path='/solar' element={<Solar/>}></Route>
            <Route path='/electric' element={<Elec/>}></Route>
          </Routes>
          <div className='crophead'>
            <Header/>
          </div>
        </Router>
    </div>
  );
}

export default App;
