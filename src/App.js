import './App.css';
import {HashRouter as Router,Route,Routes} from "react-router-dom"
import Header from './header/Header';
import Mainpage from './components/mainpage/Mainpage.tsx';
import Jspage from './components/jspage/Jspage.tsx';
import Solar from './components/solarpage/Solar.tsx';
import Elec from './components/elec/Elec.tsx';
import Reactt from './components/jspage/More/React/Reactt.tsx';
import Next from './components/jspage/More/Next/Next.tsx';
import Electron from './components/jspage/More/Electron/Electron.tsx';
import Err from './Err/Err.tsx';
import HowFrom from './components/elec/pages/HowFrom.tsx';
import Basic1 from './components/elec/pages/Basic1.tsx';

function App() {
  function CloseFirst(){
    const close = document.getElementById('close');

    close.style.display = 'none'

  }
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Mainpage/>}></Route>
            <Route path='/home' element={<Mainpage/>}></Route>
            <Route path='/javascript' element={<Jspage/>}></Route>
              <Route path='/javascript/react' element={<Reactt/>}></Route>
              <Route path='/javascript/next' element={<Next/>}></Route>
              <Route path='/javascript/electron' element={<Electron/>}></Route>
              <Route path='/javascript/nest' element={<Next/>}></Route>
              <Route path='/javascript/express' element={<Next/>}></Route>
              <Route path='/javascript/tensorflowjs' element={<Next/>}></Route>
              <Route path='/javascript/nodered' element={<Next/>}></Route>
              <Route path='/javascript/raspberrypi' element={<Next/>}></Route>
            <Route path='/solar' element={<Solar/>}></Route>
            <Route path='/electric' element={<Elec/>}></Route>
              <Route path='/electric/howfrom' element={<HowFrom/>}></Route>
              <Route path='/electric/howlike' element={<HowFrom/>}></Route>
              <Route path='/electric/basic1' element={<Basic1/>}></Route>
              <Route path='/electric/basic2' element={<HowFrom/>}></Route>
              <Route path='/electric/basic3' element={<HowFrom/>}></Route>
              <Route path='/electric/basic4' element={<HowFrom/>}></Route>
              <Route path='/electric/founder1' element={<HowFrom/>}></Route>
              <Route path='/electric/founder2' element={<HowFrom/>}></Route>
              <Route path='/electric/founder3' element={<HowFrom/>}></Route>
              <Route path='/electric/founder4' element={<HowFrom/>}></Route>
              <Route path='/electric/founder5' element={<HowFrom/>}></Route>
              <Route path='/electric/founder6' element={<HowFrom/>}></Route>
              <Route path='/electric/future1' element={<HowFrom/>}></Route>
              <Route path='/electric/future2' element={<HowFrom/>}></Route>
              <Route path='/electric/future3' element={<HowFrom/>}></Route>
              <Route path='/electric/future4' element={<HowFrom/>}></Route>
              <Route path='/electric/about1' element={<HowFrom/>}></Route>
              <Route path='/electric/about2' element={<HowFrom/>}></Route>
              <Route path='/electric/about3' element={<HowFrom/>}></Route>
              <Route path='/electric/about4' element={<HowFrom/>}></Route>
              <Route path='/electric/about5' element={<HowFrom/>}></Route>

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
