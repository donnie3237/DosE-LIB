import {React,useState,useEffect} from 'react'
import './elec.css'
import nkl from './nikolaTasla.png'
import faraday from './Faraday-4.png'
import frank from './frank.jpg'
import volta from './Alessandro_Volta.jpeg'
import elon from './Elon-Musk-PNG-Isolated-Photo.png'
import elon2 from './elon.jpg'
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
          <div className="contentelec">
              <div className="mmel erir">
                <p>Welcome To Electric World!!</p>
                <img src={nkl} alt="" />
              </div>
              <div className="intro erir" id='intro'>
                
                <div className="ei">
                <img src={frank} alt="" />  
                <div className="eie">
                <h1>ไฟฟ้าคืออะไร</h1>
                <NavLink>ไฟฟ้าเกิดขึ้นมาได้อย่างไร?</NavLink>
                <NavLink>ไฟฟ้ามีหน้าตายังไง?</NavLink>
                </div>
                </div>
              </div>
              <div className="basic erir" id='basic'>
                <div className="eir">
                <h1>พื้นฐานไฟฟ้า </h1>
                <NavLink>ประจุ กระแส แรงดัน กำลังไฟฟ้า</NavLink>
                <NavLink>แหล่งจ่ายไฟฟ้า</NavLink>
                <NavLink>ตัวต้านทานไฟฟ้า</NavLink>
                <NavLink>การวิเคราะห์วงจรไฟฟ้า</NavLink>
                </div>
                <img src={volta} alt="" />
              </div>
              <div className="founder erir" id='founder'>
                  <h1>การค้นพบในอดีต</h1>
                  <img src={faraday} alt="" />
                  <NavLink>แบตเตอรี่ก้อนแรก</NavLink>
                  <NavLink>เครื่องกำเนิดไฟฟ้าชิ้นแรก</NavLink>
                  <NavLink>หม้อแปลงไฟฟ้าเครื่องแรก</NavLink>
                  <NavLink>มอเตอร์ไฟฟ้าเครื่องแรก</NavLink>
                  <NavLink>การค้นพบความสัมพันธ์ระหว่างสนามแม่เหล็กกับสนามไฟฟ้า(สนามแม่เหล็กไฟฟ้า)</NavLink>
                  <NavLink>ไดโอดเปล่งแสง</NavLink>
              </div>
              <div className="future erir" id='future'>
                <h1>ไฟฟ้าในอนาคต</h1>
                <img src={elon} alt="" />
                <NavLink><div className="a"></div> ระบบไฟฟ้าไร้สาย(wireless energy)</NavLink>
                <NavLink><div className="b"></div> การประยุกต์การเขียนโปรแกรมกับไฟฟ้า</NavLink>
                <NavLink><div className="c"></div> ไฟฟ้ากับระบบประสาท(Neuralink)</NavLink>
                <NavLink><div className="d"></div> การขับเคลื่อนโลกครั้งยิ่งใหญ่ด้วยไฟฟ้า</NavLink>
              </div>
              <div className="ab erir">
                  <h1>พวกเขาเกี่ยวข้องกับไฟฟ้าอย่างไร</h1>
                  <div className="nkl">
                  </div>
                  <div className="smaller">
                    <div className="small1">
                      <img src={faraday} alt="" />
                      <img src={elon2} alt="" />
                    </div>
                    <div className="small2">
                      <img src={volta} alt="" />
                      <img src={frank} alt="" />
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