import {useState,useEffect} from 'react'
import solar from './img/solar.jpg'
import batterry from './img/batterry.jpg'
import './solar.css'
import HashLoader from 'react-spinners/HashLoader'
import {HashLink} from 'react-router-hash-link'
import {NavLink} from 'react-router-dom'
import 'aos/dist/aos.css'
import vdotitle from './img/2022-09-27_1664257960589.mp4'
import AOS from 'aos'
AOS.init();
function Solar() {
  const [loading, setLoading] = useState(false);
useEffect(()=>{
  setLoading(true);
  setTimeout(()=>{setLoading(false);}
  ,1400)
},[])
  return (
    <div className='solar'>
      {loading? 
        <div className="load">
          <HashLoader
          color="#000000"
          size={90}
          />
        </div>
      :
      <div className="cropeiei">
        <div className="mainsolar">
          <video src={vdotitle} autoPlay loop muted></video>
          <p>Welcome To Energy world!! <a> Cr:Tesla(Youtube)</a></p>
          
        </div>
      <div className="fsolar">
        <div className="solar">
          <details>
            <summary>Solar</summary>
            <div className="mydet">
              <NavLink>แสงและโฟตอน</NavLink>
              <NavLink>ไดโอด พีเอ็น</NavLink>
              <NavLink>เซมิคอนดักเตอร์</NavLink>
              <NavLink>การถ่ายเทพลังงาน</NavLink>
              <NavLink>แบบจำลองโซลาร์เซลล์</NavLink>
              <NavLink>การดูดกลืนแสงของสารอนินทรีย์</NavLink>
              <NavLink>perovskite</NavLink>
              <NavLink>ประสิทธิภาพ</NavLink>
            </div>
          </details>
          <details>
            <summary>Battery</summary>
            <div className="mydet">
              <NavLink>ตัวเก็บประจุ</NavLink>
              <NavLink>ความต่างศักย์ไฟฟ้า</NavLink>
              <NavLink>ลิเธียม</NavLink>
              <NavLink>โซเดียมในเกลือ</NavLink>
              <NavLink>Solid state</NavLink>
              <NavLink>DC fast charge</NavLink>
              <NavLink>Module</NavLink>
            </div>
          </details>
        </div>
      </div>
      </div>
      }
    </div>
  )
}

export default Solar