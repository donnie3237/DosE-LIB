import './App.css';
import {HashRouter as Router,Route,Routes} from "react-router-dom"
import Header from './header/Header';
import First from './first/First.tsx';
import Mainpage from './components/mainpage/Mainpage.tsx';
import Jspage from './components/jspage/Jspage.tsx';
import Solar from './components/solarpage/Solar.tsx';
import Elec from './components/elec/Elec.tsx';
import Reactt from './components/jspage/More/React/Reactt.tsx';
import Next from './components/jspage/More/Next/Next.tsx';
import Electron from './components/jspage/More/Electron/Electron.tsx';
import Err from './Err/Err.tsx';

function App() {
  function CloseFirst(){
    const close = document.getElementById('close');

    close.style.display = 'none'

  }
  return (
    <div className="App">
        <Router>
        
          {/* <First/> */}

          <Routes>
            <Route path='/' element={<Mainpage/>}></Route>
            <Route path='/home' element={<Mainpage/>}></Route>
            <Route path='/javascript' element={<Jspage/>}></Route>
              <Route path='/javascript/react' element={<Reactt/>}></Route>
              <Route path='/javascript/next' element={<Next/>}></Route>
              <Route path='/javascript/electron' element={<Electron/>}></Route>
            <Route path='/solar' element={<Solar/>}></Route>
            <Route path='/electric' element={<Elec/>}></Route>
            <Route path='*' element={<Err/>}></Route>
          </Routes>
          <div className='crophead'>
            <Header/>
          </div>
          <div class="hidd">
            <div class="hid">เราไม่สนับสนุนอุปกรณ์ของคุณ</div>
            <div class="hid2">หรือคุณอาจกำลังใช้มือถือแนวนอน(กรุณาใช้แนวตั้ง)</div>
        </div>
        </Router>
    </div>
  );
}

export default App;
