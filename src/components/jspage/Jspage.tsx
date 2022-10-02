import {useState,useEffect} from 'react'
import './js.css'
import jslogo from './img/logojs.png'
import reactpic from './img/react.png'
import electron from './img/electron.png'
import nextjs from './img/next.png'
import nestjs from './img/nest.png'
import expresss from './img/express.png'
import tfjs from './img/tfjs.png'
import nodered from './img/nedered.png'
import rapi from './img/rapi.png'
import userin from './img/FEE.png'
import server from './img/server.png'
import mljs from './img/mljs.png'
import iotjs from './img/iotjs.png'
import 'aos/dist/aos.css'
import AOS from 'aos'
import HashLoader from 'react-spinners/HashLoader'
import { NavLink } from 'react-router-dom'
import mlVideo from './img/VID_20220922203922.mp4'
import {HashLink} from 'react-router-hash-link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


AOS.init();

function Jspage() {
    const notify = () => toast.warn("ระบบนี้ยังใช้งานไม่ได้!");
    const [loading, setLoading] = useState(false);
useEffect(()=>{
  setLoading(true);
  setTimeout(()=>{setLoading(false);}
  ,1400)
},[])
  return (
    <div className="contain"  >
        {loading? 
        <div className="load">
        <HashLoader
        color="#000000"
        size={90}
      />
    </div>
      :
      <div className="cropeiei"> 
        <div className="sec sec0">
            <div className="fj">
                <div className="mainjsp">
                    <img src={jslogo} alt="" />
                    <p>Javascript คือภาษาโปรแกรมชนิดหนึ่งซึ่งปรากฎตัวครั้งแรกเมื่อ วันที่ 4 ธันวาคม 2538</p>
                </div>
                <div className="front-end">
                    <img src={userin} alt="" />
                    <div className="flex-column">
                        <p>User interface Javascript. </p>
                        <p>ยูเซอร์อินเตอเฟส</p>
                        <HashLink>Client</HashLink>
                    </div>
                </div>
                <div className="back-end">
                    <div className="flex-column">
                        <p>Server Javascript. </p>
                        <p>การจัดการเซิร์ฟเวอร์</p>
                        <HashLink>Server</HashLink>
                    </div>
                    <img src={server} alt="" />
                </div>
                <div className="machine">
                    <img src={mljs} alt="" />
                    <div className="flex-column">
                        <p>AI and Machine learning</p>
                        <p>AI และ ปัญญาประดิษฐ์</p>
                        <HashLink>ML</HashLink>
                    </div>
                </div>
                <div className="iotrasp">
                    <div className="flex-column">
                        <p>im iot js</p>
                        <p>เครื่องจักรกลอัจฉริยะ</p>
                        <HashLink>IOT</HashLink>
                    </div>
                    <img src={iotjs} alt="" />
                </div>
            </div>
        </div>
        <div className="sec sec1" >
            <h1>ClientSide Javascript</h1>
            <div className="react" id='second'>
                <img src={reactpic}  />
                <div className="cropre">
                    <p>reactJS,React Native for IOS,Android,Web app</p>
                    <NavLink to='/javascript/react' className='clbtn'>ReactJS</NavLink>
                </div>
                
            </div>
            <div className="next">
                <img src={nextjs}/>
                <div className="cropre">
                    <p>more expert with server side rendering framework</p>
                    <NavLink to='/javascript/next' className='clbtn'>NextJS</NavLink>
                </div>
            </div>
            <div className="electron">
                <img src={electron} />
                
                <div className="cropre">
                    <p>for desktop App (Windows,MacOS,Linux system)</p>
                    <NavLink to='/javascript/electron' className='clbtn'>ElectronJS</NavLink>
                </div>
            </div>
        </div>
        <div className="sec sec2" >
            <h1>ServerSide Javascript</h1>
            <div className="nest mt10vh" id='backend' >
                <img src={nestjs} />
                <p> TypeScript language for good server.</p>
                <NavLink to='/javascript/nest'>NestJS</NavLink>
            </div>
            <div className="exp">
                <img src={expresss} />
                <p> most popular back-end framework for Javascript</p>
                <NavLink to='/javascript/express'>ExpressJS</NavLink>
            </div>
        </div>
        <div className="sec sec3" >
            <h1 id='mljs'>MachineLearning Javascript</h1>
            <img src={tfjs}/>
            <p>Machine Learning open Source By Google</p>
            <NavLink to='/javascript/tensorflowjs'>TFJS</NavLink>
            <video src={mlVideo} autoPlay muted loop/>
        </div>
        <div className="sec sec4" >
            <h1>IOT Javascript</h1>
            <div className="iotcrop">
                <div className="ndre" id='iiotjs'>
                    <img src={nodered} />
                    <p> javascript framework run on nodeJS for good micro controller</p>
                    <NavLink to='/javascript/nodered'>NodeRed</NavLink>
                </div>
                <div className="raspi">
                    <img src={rapi} />
                    <p>Good board for use Machine Learning and IOT work on localhost
                    , it is micor controller RAM{'>'}1GB ROM{'>'}1GB </p>
                    <NavLink to='/javascript/raspberripi'>RaspberryPi</NavLink>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="30%" height="30%" fill="currentColor" class="bi bi-robot" viewBox="0 0 16 16">
                <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z"/>
                <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z"/>
            </svg>
        </div>
        <div className="sec sec5" >
            <h2>การเชื่อมโยงการเขียนโปรแกรม กับโซล่าร์เซลล์และไฟฟ้า</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quis consequatur dolores repellat. Error, vero nesciunt possimus dignissimos dolorum ducimus deleniti nobis quas iusto doloribus hic repellendus modi expedita sint.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quis consequatur dolores repellat. Error, vero nesciunt possimus dignissimos dolorum ducimus deleniti nobis quas iusto doloribus hic repellendus modi expedita sint.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quis consequatur dolores repellat. Error, vero nesciunt possimus dignissimos dolorum ducimus deleniti nobis quas iusto doloribus hic repellendus modi expedita sint.</p>

        </div>
        <div className="sec sec6" >
        <svg xmlns="http://www.w3.org/2000/svg" width="30%" height="30%" fill="currentColor" class="bi bi-award" viewBox="0 0 16 16">
  <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"/>
  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
</svg>
            <p>Certificate</p>
        <input type="text" placeholder='ชื่อขนามสกุลของคุณ' className='input'/>
        <button onClick={notify}>รับPDF Cert.</button>
        </div>
        </div>
    }   
    <ToastContainer />
    </div>
  )
}

export default Jspage