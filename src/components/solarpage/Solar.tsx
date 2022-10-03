import {useState,useEffect} from 'react'
import solar from './img/solar.jpg'
import batterry from './img/batterry.jpg'
import './solar.css'
import {Bar} from 'react-chartjs-2'
import HashLoader from 'react-spinners/HashLoader'
import {NavLink} from 'react-router-dom'
import 'aos/dist/aos.css'
import vdotitle from './img/2022-09-27_1664257960589.mp4'
import AOS from 'aos'
import { BarLoader } from 'react-spinners'
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
        {/* <Bar
          data={
            {
              labels:[2021,2022]
            }
          }
        /> */}
      <div className="fsolar">
        <div className="solarr">
          <div className="introsolar">
            <h1>Renewable Energy </h1>
            <p>Energy for the future</p>
            <p>Dr.dose(ผู้ปกครองดาวนาเม็ก)</p>
          </div>
            <div className="mydet">
              <img src={solar} alt="" />
              <NavLink to='/solar/light'>แสงและโฟตอน</NavLink>
              <NavLink to='/solar/pn'>ไดโอด พีเอ็น</NavLink>
              <NavLink to='/solar/semi'>เซมิคอนดักเตอร์</NavLink>
              <NavLink to='/solar/ener'>การถ่ายเทพลังงาน</NavLink>
              <NavLink to='/solar/model'>แบบจำลองโซลาร์เซลล์</NavLink>
              <NavLink to='/solar/lightt'>การดูดกลืนแสงของสารอนินทรีย์</NavLink>
              <NavLink to='/solar/perov'>perovskite</NavLink>
              <NavLink to='/solar/eff'>ประสิทธิภาพ</NavLink>
            </div>
            <div className="mydet">
              <img src={batterry} alt="" />
              <NavLink to='/solar/capaciter'>ตัวเก็บประจุ</NavLink>
              <NavLink to='/solar/voltage'>ความต่างศักย์ไฟฟ้า</NavLink>
              <NavLink to='/solar/li'>ลิเธียม</NavLink>
              <NavLink to='/solar/na'>โซเดียมในเกลือ</NavLink>
              <NavLink to='/solar/ss'>Solid state</NavLink>
              <NavLink to='/solar/fast'>DC fast charge</NavLink>
              <NavLink to='/solar/module'>Module</NavLink>
            </div>
        </div>
      </div>
      </div>
      }
    </div>
  )
}

export default Solar