import {React,useState,useEffect} from 'react'
import './elec.css'
import nkl from './nikolaTasla.png'
import faraday from './Faraday-4.png'
import frank from './frank.jpg'
import volta from './Alessandro_Volta.jpeg'
import elon from './Elon-Musk-PNG-Isolated-Photo.png'
import HashLoader from 'react-spinners/HashLoader'
import {NavLink} from 'react-router-dom'
import elecvdo from './VID_20221002214944.mp4'

function Elec() {
  const [loading, setLoading] = useState(false);
useEffect(()=>{
  setLoading(true);
  setTimeout(()=>{setLoading(false);}
  ,1400)
},[])
  return (
    <div>
      {loading? 
        <div className="load">
        <HashLoader
        color="#000000"
        size={90}
      />
      </div>
      :
      <div className="cropeiei">
        <div className="cropcon">
          
          <div className="contentelec">
              <div className="mmel">
                <p>Welcome To Electric World!!</p>
                <video src={elecvdo} autoPlay loop muted></video>
                <img src={nkl} alt="" />
              </div>
              <div className="intro" id='intro'>
              <h3>ไฟฟ้าคืออะไร</h3>
                <img src={frank} alt="" />
                
                <NavLink>ไฟฟ้าเกิดขึ้นมาได้อย่างไร</NavLink>
                <NavLink>ไฟฟ้ามีหน้าตายังไง</NavLink>
              </div>
              <div className="basic" id='basic'>
                <img src={volta} alt="" />
                พื้นฐานไฟฟ้า
              </div>
              <div className="founder" id='founder'>
                  <h1>การค้นพบในอดีต</h1>
                  <img src={faraday} alt="" />
                  <div className="fbat">
                    แบตเตอรี่ก้อนแรก
                  </div>
                  <div className="fele">
                    เครื่องกำเนิดไฟฟ้าชิ้นแรก
                  </div>
                  <div className="ftran">
                    หม้อแปลงไฟฟ้าเครื่องแรก
                  </div>
                  <div className="fmotor">
                    มอเตอร์ไฟฟ้าเครื่องแรก
                  </div>
                  <div className="fgen">
                    การค้นพบความสัมพันธ์ระหว่างสนามแม่เหล็กกับสนามไฟฟ้า(สนามแม่เหล็กไฟฟ้า)
                  </div>
                  <div className="diote">
                    ไดโอดเปล่งแสง
                  </div>
              </div>
              <div className="future" id='future'>
                <h1>ไฟฟ้าในอนาคต</h1>
                <img src={elon} alt="" />
                <div className="warden">
                    ระบบไฟฟ้าไร้สาย
                </div>
                <div className="proelec">
                  การประยุกต์การเขียนโปรแกรมกับไฟฟ้า
                </div>
                <div className="peodu">
                  การผลิตไฟฟ้ากับไดโอด
                </div>
              </div>
              <div className="ab">
                  <h1>พวกเขาเกี่ยวข้องกับไฟฟ้าอย่างไร</h1>
                  <div className="nkl">
                    <img src={nkl} alt="" />
                  </div>
                  <div className="smaller">
                    <div className="small1">
                      <img src={faraday} alt="" />
                      <img src={elon} alt="" />
                    </div>
                    <div className="small2">
                      <img src={volta} alt="" />
                      <img src={frank} alt="" />
                    </div>
                  </div>
                </div>
          </div>
        </div>
        
    </div>
    }
    </div>
  )
}

export default Elec