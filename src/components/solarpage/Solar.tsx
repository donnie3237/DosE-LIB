import {useState,useEffect} from 'react'
import solar from './img/solar.jpg'
import batterry from './img/batterry.jpg'
import './solar.css'
import HashLoader from 'react-spinners/HashLoader'
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
          <p>Solar And Batterry</p>
        </div>
      <div className="fsolar">
        <img src={solar} />
        <div className="row">
          <p>แสงและโฟตอน</p>
          <p>ไดโอด พี-{'>'}เอ็น</p>
          <p>เซมิคอนดักเตอร์</p>
        </div>
        <div className="row">
          <p>การถ่ายเทพลังงาน</p>
          <p>แบบจำลองโซลาร์เซลล์</p>
          <p>การดูดกลืนแสงของสารอนินทรีย์</p>
        </div>
        <div className="row">
          <p>Porovskite</p>
          <p>ประสิทธิภาพ</p>
        </div>
      </div>
      <div className="sbatter">
        <img src={batterry} />
        <div className="row">
          <p >ตัวเก็บประจุ</p>
          <p >ความต่างศักย์ไฟฟ้า</p>
          <p >ลิเธียม</p>
        </div>
        <div className="row">
          <p >โซเดียมในเกลือ</p>
          <p >Solid State</p>
          <p >DC fast Charge</p>
        </div>
        <p >Batterry Module</p>
      </div>
      </div>
      }
    </div>
  )
}

export default Solar