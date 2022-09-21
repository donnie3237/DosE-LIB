import {useState,useEffect} from 'react'
import './js.css'
import jslogo from './logojs.png'
import reactpic from './react.png'
import electron from './electron.png'
import nextjs from './next.png'
import nestjs from './nest.png'
import expresss from './express.png'
import tfjs from './tfjs.png'
import nodered from './nedered.png'
import rapi from './rapi.png'
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
                more expert with server side rendering framework
            </div>
            <div className="electron">
                <img src={electron} />
                for desktop App (Windows,MacOS,Linux system)
            </div>
        </div>
        <div className="sec sec2" >
            <h1>ServerSide Javascript</h1>
            <div className="nest" id='backend'>
                <img src={nestjs} />
                TypeScript language for good server.
            </div>
            <div className="exp">
                <img src={expresss} />
                most popular back-end framework for Javascript
            </div>
        </div>
        <div className="sec sec3" >
            <h2 id='mljs'>MachineLearning Javascript</h2>
            <img src={tfjs}/>
            <p>Machine Learning open Source By Google</p>
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