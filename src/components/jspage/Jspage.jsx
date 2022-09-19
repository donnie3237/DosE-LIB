import {React,useState,useEffect} from 'react'
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
        <div className="sec sec0" data-aos='fade-up'>
            <div className="fj">
                <img src={jslogo} alt="" />
                <p>Javascript คือภาษาโปรแกรมชนิดหนึ่งซึ่งปรากฎตัวครั้งแรกเมื่อ วันที่ 4 ธันวาคม 2538</p>
            </div>
            <div className="sj">
                <div  className="fe"><a href="#second"></a></div>
                <div  className="be"><a href="#backend"></a></div>
                <div className="minisj">
                    <div className="ml"><a href="#mljs"></a></div>
                    <div className="iot"><a href="#iiotjs"></a></div>
                </div>
            </div>
        </div>
        <div className="sec sec1" id='second'>
            <h1>ClientSide Javascript</h1>
            <div className="react" >
                <img src={reactpic}  />
                reactJS,React Native for IOS,Android,Web app 
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
        <div className="sec sec2" id='backend'>
            <h1>ServerSide Javascript</h1>
            <div className="nest">
                <img src={nestjs} />
                TypeScript language for good server.
            </div>
            <div className="exp">
                <img src={expresss} />
                most popular back-end framework for Javascript
            </div>
        </div>
        <div className="sec sec3" id='mljs'>
            <h2>MachineLearning Javascript</h2>
            <img src={tfjs}/>
            <p>Machine Learning open Source By Google</p>
        </div>
        <div className="sec sec4" id='iiotjs'>
            <h1>IOT Javascript</h1>
            <div className="ndre">
                <img src={nodered} />
                javascript framework run on nodeJS for good micro controller
            </div>
            <div className="raspi">
                <img src={rapi} />
                Good board for use Machine Learning and IOT work on localhost
                , it is micor controller RAM>1GB ROM>1GB 
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