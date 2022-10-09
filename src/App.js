import './App.css';
import {HashRouter as Router,Route,Routes} from "react-router-dom"
import Header from './header/Header';
import Mainpage from './components/mainpage/Mainpage.tsx';
import Jspage from './components/jspage/Jspage.tsx';
import Solar from './components/solarpage/Solar.tsx';
import Elec from './components/elec/Elec.tsx';
import Reactt from './components/jspage/pages/Reactt.tsx';
import Next from './components/jspage/pages/Next.tsx';
import Electron from './components/jspage/pages/Electron.tsx';
import Err from './Err/Err.tsx';
import HowFrom from './components/elec/pages/HowFrom.tsx';
import Basic1 from './components/elec/pages/Basic1.tsx';
import Nest from './components/jspage/pages/Nest.tsx';
import Express from './components/jspage/pages/Express.tsx';
import Tfjs from './components/jspage/pages/Tfjs.tsx';
import NodeRed from './components/jspage/pages/Nodered.tsx';
import Raspi from './components/jspage/pages/Raspi.tsx';
import Basic2 from './components/elec/pages/Basic2.tsx';
import HowLike from './components/elec/pages/HowLike.tsx';
import Basic3 from './components/elec/pages/Basic3.tsx';
import Basic4 from './components/elec/pages/Basic4.tsx';
import FounDer1 from './components/elec/pages/FounDer1.tsx';
import FounDer2 from './components/elec/pages/FounDer2.tsx';
import FounDer3 from './components/elec/pages/FounDer3.tsx';
import FounDer4 from './components/elec/pages/FounDer4.tsx';
import FounDer5 from './components/elec/pages/FounDer5.tsx';
import FounDer6 from './components/elec/pages/FounDer6.tsx';
import Future1 from './components/elec/pages/Future1.tsx';
import Future2 from './components/elec/pages/Future2.tsx';
import Future3 from './components/elec/pages/Future3.tsx';
import Future4 from './components/elec/pages/Future4.tsx';
import Solar1 from './components/solarpage/pages/Solar1.tsx';

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
              <Route path='/javascript/nest' element={<Nest/>}></Route>
              <Route path='/javascript/express' element={<Express/>}></Route>
              <Route path='/javascript/tensorflowjs' element={<Tfjs/>}></Route>
              <Route path='/javascript/nodered' element={<NodeRed/>}></Route>
              <Route path='/javascript/raspberrypi' element={<Raspi/>}></Route>
            <Route path='/solar' element={<Solar/>}></Route>
              <Route path='/solar/phothon' element={<Solar1/>}></Route>
            <Route path='/electric' element={<Elec/>}></Route>
              <Route path='/electric/howfrom' element={<HowFrom/>}></Route>
              <Route path='/electric/howlike' element={<HowLike/>}></Route>
              <Route path='/electric/basic1' element={<Basic1/>}></Route>
              <Route path='/electric/basic2' element={<Basic2/>}></Route>
              <Route path='/electric/basic3' element={<Basic3/>}></Route>
              <Route path='/electric/basic4' element={<Basic4/>}></Route>
              <Route path='/electric/founder1' element={<FounDer1/>}></Route>
              <Route path='/electric/founder2' element={<FounDer2/>}></Route>
              <Route path='/electric/founder3' element={<FounDer3/>}></Route>
              <Route path='/electric/founder4' element={<FounDer4/>}></Route>
              <Route path='/electric/founder5' element={<FounDer5/>}></Route>
              <Route path='/electric/founder6' element={<FounDer6/>}></Route>
              <Route path='/electric/future1' element={<Future1/>}></Route>
              <Route path='/electric/future2' element={<Future2/>}></Route>
              <Route path='/electric/future3' element={<Future3/>}></Route>
              <Route path='/electric/future4' element={<Future4/>}></Route>
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
