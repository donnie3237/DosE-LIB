import {useState,useEffect} from 'react'
import solar from './img/solar.jpg'
import batterry from './img/batterry.jpg'
import './solar.scss'
import HashLoader from 'react-spinners/HashLoader'
import {NavLink} from 'react-router-dom'
import 'aos/dist/aos.css'
import AOS from 'aos'
import React from 'react'
const vdotitle = require('./img/2022-09-27_1664257960589.mp4')
AOS.init();

type Props = {}

const Solar = (props: Props) => {
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
        <div className="mainsolar" data-aos-duration='1000' data-aos='zoom-in-up'>
          <video src={vdotitle} autoPlay loop muted></video>
          <p  data-aos-duration='1500'>Welcome To Energy world!! <h1> Cr:Tesla(Youtube)</h1></p>
        </div>
      <div className="fsolar">
        <div className="solarr">
          <div className="introsolar">
            <h1>Renewable Energy </h1>
            <p>Energy for the future</p>
            <p>Dr.dose(ผู้ปกครองดาวนาเม็ก)</p>
            <NavLink to="/solar/news">ติดตามข่าวสารเพิ่มเติม</NavLink>
          </div>
            <div className="mydet" data-aos-duration='1000' data-aos='fade-left'>
              <img src={solar} alt="" />
              <div className="banner">
              <NavLink to='/solar/phothon'>แสงและโฟตอน</NavLink>
              <NavLink to='/solar/pn'>ไดโอด พีเอ็น</NavLink>
              <NavLink to='/solar/semi'>เซมิคอนดักเตอร์</NavLink>
              <NavLink to='/solar/ener'>การถ่ายเทพลังงาน</NavLink>
              <NavLink to='/solar/model'>แบบจำลองโซลาร์เซลล์</NavLink>
              <NavLink to='/solar/lightt'>การดูดกลืนแสงของสารอนินทรีย์</NavLink>
              <NavLink to='/solar/perov'>perovskite</NavLink>
              <NavLink to='/solar/eff'>ประสิทธิภาพ</NavLink>
            </div>
            </div>
            <div className="mydet"data-aos-duration='1000' data-aos='fade-right'>
              <img src={batterry} alt="" />
              <div className="banner">
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
      </div>
      }
    </div>
  )
}

export default Solar