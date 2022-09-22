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
import 'aos/dist/aos.css'
import AOS from 'aos'
import HashLoader from 'react-spinners/HashLoader'
import { NavLink } from 'react-router-dom'

AOS.init();

function Jspage() {
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
                <img src={jslogo} alt="" />
                <p>Javascript คือภาษาโปรแกรมชนิดหนึ่งซึ่งปรากฎตัวครั้งแรกเมื่อ วันที่ 4 ธันวาคม 2538</p>
            </div>
        </div>
        <div className="sec sec1" >
            <h1>ClientSide Javascript</h1>
            <div className="react" id='second'>
                <img src={reactpic}  />
                <div className="cropre">
                    <p>reactJS,React Native for IOS,Android,Web app</p>
                    <NavLink to='/javascript' className='clbtn'>EiEi</NavLink>
                </div>
                
            </div>
            <div className="next" >
                <img src={nextjs}/>
                <div className="cropre">
                    <p>more expert with server side rendering framework</p>
                    <NavLink to='/javascript' className='clbtn'>EiEi</NavLink>
                </div>
            </div>
            <div className="electron">
                <img src={electron} />
                
                <div className="cropre">
                    <p>for desktop App (Windows,MacOS,Linux system)</p>
                    <NavLink to='/javascript' className='clbtn'>EiEi</NavLink>
                </div>
            </div>
        </div>
        <div className="sec sec2" >
            <h1>ServerSide Javascript</h1>
            <div className="nest mt10vh" id='backend' >
                <img src={nestjs} />
                TypeScript language for good server.
            </div>
            <div className="exp">
                <img src={expresss} />
                most popular back-end framework for Javascript
            </div>
        </div>
        <div className="sec sec3" >
            <h1 id='mljs'>MachineLearning Javascript</h1>
            <img src={tfjs}/>
            <p>Machine Learning open Source By Google</p>
            <video autoPlay loop muted playsInline src='./img/VID_20220922113359.mp4'>
            </video>
        </div>
        <div className="sec sec4" >
            <h1>IOT Javascript</h1>
            <div className="ndre" id='iiotjs'>
                <img src={nodered} />
                javascript framework run on nodeJS for good micro controller
            </div>
            <div className="raspi">
                <img src={rapi} />
                Good board for use Machine Learning and IOT work on localhost
                , it is micor controller RAM{'>'}1GB ROM{'>'}1GB 
            </div>
        </div>
        <div className="sec sec5" >
            การเชื่อมโยงการเขียนโปรแกรม กับโซล่าร์เซลล์และไฟฟ้า
        </div>
        <div className="sec sec6" ><p>Certificate</p>
        <input type="text" />
        <button>รับPDF Cert.</button>
        </div>
        </div>
    }   
    </div>
  )
}

export default Jspage