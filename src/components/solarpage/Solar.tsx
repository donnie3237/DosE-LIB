import {useState,useEffect} from 'react'
import solar from './solar.jpg'
import batterry from './batterry.jpg'
import './solar.css'
import HashLoader from 'react-spinners/HashLoader'
import 'aos/dist/aos.css'
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
      <div className="fsolar">
        <img src={solar} />
        <p>แสงและโฟตอน</p>
        <p>ไดโอด พี-{'>'}เอ็น</p>
        <p>เซมิคอนดักเตอร์</p>
        <p>การถ่ายเทพลังงาน</p>
        <p>แบบจำลองโซลาร์เซลล์</p>
        <p>การดูดกลืนแสงของสารอนินทรีย์</p>
        <p>Porovskite</p>
        <p>ประสิทธิภาพ</p>
      </div>
      <div className="sbatter">
        <img src={batterry} />
        <p >ตัวเก็บประจุ</p>
        <p >ความต่างศักย์ไฟฟ้า</p>
        <p >ลิเธียม</p>
        <p >โซเดียมในเกลือ</p>
        <p >Solid State</p>
        <p >DC fast Charge</p>
        <p >Batterry Module</p>
      </div>
      </div>
      }
    </div>
  )
}

export default Solar