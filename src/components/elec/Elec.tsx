import {React,useState,useEffect} from 'react'
import './elec.css'
import nkl from './nikolaTasla.png'
import HashLoader from 'react-spinners/HashLoader'
import { NavLink } from 'react-router-dom'

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
          <div className="elecnav">
            <li><a href="">introdution</a></li>
            <li><a href="">Basic</a></li>
            <li><a href="#founder">Founder</a></li>
            <li><a href="">Future</a></li>
          </div>
          <div className="contentelec">
              <div className="mmel">
                <p>Welcome To Electric World!!</p>
              </div>
              <div className="intro">
                ไฟฟ้าคืออะไร
              </div>
              <div className="basic">
                พื้นฐานไฟฟ้า
              </div>
              <div className="founder" id='founder'>
                  <h1>การค้นพบในอดีต</h1>
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
          </div>
        </div>
        
    </div>
    }
    </div>
  )
}

export default Elec