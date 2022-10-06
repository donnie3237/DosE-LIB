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
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init();

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
              <div className="intro erir" id='intro' data-aos='zoom-left-up' data-aos-duration='1500'>
                
                <div className="ei" >
                <img src={frank} alt="" data-aos='zoom-in' data-aos-duration='1000'/>  
                <div className="eie" data-aos='fade-up' data-aos-duration='1500'>
                <h1>ไฟฟ้าคืออะไร</h1>
                <NavLink>ไฟฟ้าเกิดขึ้นมาได้อย่างไร?</NavLink>
                <NavLink>ไฟฟ้ามีหน้าตายังไง?</NavLink>
                </div>
                </div>
              </div>
              <div className="basic erir" id='basic' data-aos='zoom-right-down' data-aos-duration='1500'>
                <div className="eir" data-aos='fade-up' data-aos-duration='1500'>
                <h1>พื้นฐานไฟฟ้า </h1>
                <NavLink>ประจุ กระแส แรงดัน กำลังไฟฟ้า</NavLink>
                <NavLink>แหล่งจ่ายไฟฟ้า</NavLink>
                <NavLink>ตัวต้านทานไฟฟ้า</NavLink>
                <NavLink>การวิเคราะห์วงจรไฟฟ้า</NavLink>
                </div>
                <img src={volta} alt="" data-aos='zoom-in' data-aos-duration='1000'/>
              </div>
              <div className="founder erir" id='founder' data-aos='zoom-left-up' data-aos-duration='1500'>
                  <h1>การค้นพบในอดีต</h1>
                  <img src={faraday} alt="" data-aos='flip-left' data-aos-duration='1500'/>
                  <NavLink data-aos='fade-left' data-aos-duration='1500'>แบตเตอรี่ก้อนแรก</NavLink>
                  <NavLink data-aos='fade-left' data-aos-duration='1500'>เครื่องกำเนิดไฟฟ้าชิ้นแรก</NavLink>
                  <NavLink data-aos='fade-left' data-aos-duration='1500'>หม้อแปลงไฟฟ้าเครื่องแรก</NavLink>
                  <NavLink data-aos='fade-left' data-aos-duration='1500'>มอเตอร์ไฟฟ้าเครื่องแรก</NavLink>
                  <NavLink data-aos='fade-left' data-aos-duration='1500'>การค้นพบความสัมพันธ์ระหว่างสนามแม่เหล็กกับสนามไฟฟ้า(สนามแม่เหล็กไฟฟ้า)</NavLink>
                  <NavLink data-aos='fade-left' data-aos-duration='1500'> ไดโอดเปล่งแสง</NavLink>
              </div>
              <div className="future erir" id='future' data-aos='zoom-in' data-aos-duration='3500'>
                <h1>ไฟฟ้าในอนาคต</h1>
                <img src={elon} alt="" data-aos='zoom-in-up' data-aos-duration='1500'/>
                <NavLink><div className="a" data-aos='zoom-in' data-aos-duration='1500'></div> ระบบไฟฟ้าไร้สาย(wireless energy)</NavLink>
                <NavLink><div className="b" data-aos='zoom-in' data-aos-duration='1500'></div> การประยุกต์การเขียนโปรแกรมกับไฟฟ้า</NavLink>
                <NavLink><div className="c" data-aos='zoom-in' data-aos-duration='1500'></div> ไฟฟ้ากับระบบประสาท(Neuralink)</NavLink>
                <NavLink><div className="d" data-aos='zoom-in' data-aos-duration='1500'></div> การขับเคลื่อนโลกครั้งยิ่งใหญ่ด้วยไฟฟ้า</NavLink>
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
                  <div className="details">
                  <details>
                    <summary>Nikol Tesla</summary>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, laudantium.</p>
                  </details>
                  <details>
                    <summary>Alexandro Volta</summary>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, laudantium.</p>
                  </details>
                  <details>
                    <summary>Benjamin Franklin</summary>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, laudantium.</p>
                  </details>
                  <details>
                    <summary>Elon Musk</summary>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, laudantium.</p>
                  </details>
                  <details>
                    <summary>Mikle Faraday</summary>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, laudantium.</p>
                  </details>
                  </div>
                </div>
          </div>
        </div>
    }
    </div>
  )
}

export default Elec