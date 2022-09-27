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
          <p>Welcome To Energy world!! <a> Cr:Tesla(Youtube)</a></p>
          
        </div>
      <div className="fsolar">
        <img src={solar} />
        <div className="detailsolar">
          <p>แสงและโฟตอน <p>{'>'}</p></p>
          <p>ไดโอด พี-{'>'}เอ็น<p>{'>'}</p></p>
          <p>เซมิคอนดักเตอร์<p>{'>'}</p></p>
          <p>การถ่ายเทพลังงาน<p>{'>'}</p></p>
          <p>แบบจำลองโซลาร์เซลล์<p>{'>'}</p></p>
          <p>การดูดกลืนแสงของสารอนินทรีย์<p>{'>'}</p></p>
          <p>Porovskite<p>{'>'}</p></p>
          <p>ประสิทธิภาพ<p>{'>'}</p></p>
        </div>
      </div>
      <div className="sbatter">
        <img src={batterry}/>
        <div className="detailbat">
          <p >ตัวเก็บประจุ<p>{'>'}</p></p>
          <p >ความต่างศักย์ไฟฟ้า<p>{'>'}</p></p>
          <p >ลิเธียม<p>{'>'}</p></p>
          <p >โซเดียมในเกลือ<p>{'>'}</p></p>
          <p >Solid State<p>{'>'}</p></p>
          <p >DC fast Charge<p>{'>'}</p></p>
          <p>Batterry Module<p>{'>'}</p></p>
          </div>
      </div>
      </div>
      }
    </div>
  )
}

export default Solar