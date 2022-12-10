import {React,useState,useEffect} from 'react'
import './elec.css'
import faraday from './img/Faraday-4.png'
import frank from './img/frank.jpg'
import volta from './img/Alessandro_Volta.jpeg'
import elon from './img/Elon-Musk-PNG-Isolated-Photo.png'
import elon2 from './img/elon.jpg'
import HashLoader from 'react-spinners/HashLoader'
import {NavLink} from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import nkl from './img/nkl.jpg'
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
              </div>
              <div className="intro erir" id='intro' data-aos='zoom-left-up' data-aos-duration='1500'>
                
                <div className="ei" >
                <img src={frank} alt="" data-aos='zoom-in' data-aos-duration='1000'/>  
                <div className="eie" data-aos='fade-up' data-aos-duration='1500'>
                <h1>ไฟฟ้าคืออะไร</h1>
                <NavLink to='/electric/howfrom'>ไฟฟ้าเกิดขึ้นมาได้อย่างไร?</NavLink>
                <NavLink to='/electric/howlike'>ไฟฟ้ามีหน้าตายังไง?</NavLink>
                </div>
                </div>
              </div>
              <div className="basic erir" id='basic' data-aos='zoom-right-down' data-aos-duration='1500'>
                <div className="eir" data-aos='fade-up' data-aos-duration='1500'>
                <h1>พื้นฐานไฟฟ้า </h1>
                <NavLink to='/electric/basic1'>ประจุ กระแส แรงดัน กำลังไฟฟ้า</NavLink>
                <NavLink to='/electric/basic2'>แหล่งจ่ายไฟฟ้า</NavLink>
                <NavLink to='/electric/basic3'>ตัวต้านทานไฟฟ้า</NavLink>
                <NavLink to='/electric/basic4'>การวิเคราะห์วงจรไฟฟ้า</NavLink>
                </div>
                <img src={volta} alt="" data-aos='zoom-in' data-aos-duration='1000'/>
              </div>
              <div className="founder erir" id='founder' data-aos='zoom-left-up' data-aos-duration='1500'>
                  <h1>การค้นพบในอดีต</h1>
                  <img src={faraday} alt="" data-aos='flip-left' data-aos-duration='1500'/>
                  <NavLink to='/electric/founder1' data-aos='fade-left' data-aos-duration='1000'>แบตเตอรี่ก้อนแรก</NavLink>
                  <NavLink to='/electric/founder2' data-aos='fade-left' data-aos-duration='1000'>เครื่องกำเนิดไฟฟ้าชิ้นแรก</NavLink>
                  <NavLink to='/electric/founder3' data-aos='fade-left' data-aos-duration='1000'>หม้อแปลงไฟฟ้าเครื่องแรก</NavLink>
                  <NavLink to='/electric/founder4' data-aos='fade-left' data-aos-duration='1000'>มอเตอร์ไฟฟ้าเครื่องแรก</NavLink>
                  <NavLink to='/electric/founder5' data-aos='fade-left' data-aos-duration='1000'>การค้นพบความสัมพันธ์ระหว่างสนามแม่เหล็กกับสนามไฟฟ้า(สนามแม่เหล็กไฟฟ้า)</NavLink>
                  <NavLink to='/electric/founder6' data-aos='fade-left' data-aos-duration='1000'> ไดโอดเปล่งแสง</NavLink>
              </div>
              <div className="future erir" id='future' data-aos='zoom-in' data-aos-duration='3500'>
                <h1>ไฟฟ้าในอนาคต</h1>
                <img src={elon} alt="" data-aos='zoom-in-up' data-aos-duration='1500'/>
                <NavLink to='/electric/future1'><div className="a" data-aos='zoom-in' data-aos-duration='1200'></div> ระบบไฟฟ้าไร้สาย(wireless energy)</NavLink>
                <NavLink to='/electric/future2'><div className="b" data-aos='zoom-in' data-aos-duration='1200'></div> การประยุกต์การเขียนโปรแกรมกับไฟฟ้า</NavLink>
                <NavLink to='/electric/future3'><div className="c" data-aos='zoom-in' data-aos-duration='1200'></div> ไฟฟ้ากับระบบประสาท(Neuralink)</NavLink>
                <NavLink to='/electric/future4'><div className="d" data-aos='zoom-in' data-aos-duration='1200'></div> การขับเคลื่อนโลกครั้งยิ่งใหญ่ด้วยไฟฟ้า</NavLink>
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
                    <summary>Nikola Tesla</summary>
                     <img src={nkl} alt="" />
                    <p>นิโคล่า เทสล่า ทุกคนอาจรู้จักกันในนามของชายผู้พัฒนาระบบกระแสสลับ และมอเตอร์ไฟฟ้า นอกจากนี้เขายังพัฒนาสิ่งอื่นๆด้วยเช่น การเอกซเรย์ การบังคับเรือด้วยรีโมทวิทยุจากคลื่นแม่เหล็กไฟฟ้า และระบบอื่นๆอีกมากมาย เขาเป็นนักประดิษฐิ์ที่เยี่ยมยอดมาก ชื่อของเขาอยู่บนหน่วยความเข้มสนามแม่เหล็ก(เทสล่า,T)</p>
                  </details>
                  <details>
                    <summary>Alexandro Volta</summary>
                    <img src={volta} alt="" />
                    <p>อเล็กซานโดร โวลตา เป็นชายผู้เปลี่ยนแปลงวงการไฟฟ้าอีกคนหนึ่ง ที่อธิบายเรื่องของความต่างศักย์ไฟฟ้าหรือแรงดันไฟฟ้า เขาคิดค้นแบตเตอรี่ก้อนแรก ที่ชื่อว่า โวลตาอิกพาย และชื่อของเขาถูกตั้งเป็นหน่วยของความต่างศักย์หรือแรงดันไฟฟ้า มีหน่วยเป็น(โวลต์,volt)</p>
                  </details>
                  <details>
                    <summary>Benjamin Franklin</summary>
                    <img src={frank} alt="" />
                    <p>เบญจามิน แฟรงคลิน เราอาจพบเขาได้ในธนบัตร 100ดอลล่าร์US เพราะเขาเป็นผู้เริ่มก่อตั้งประเทศสหรัฐอเมริกา และมีผลงานด้านไฟฟ้าคือ ส่งว่าวไปเป็นสายล่อฟ้า และคิดค้นระบบสายดิน สำหรับป้องกันอันตรายจากฟ้าผ่า และเขายังเป็นผู้ค้นพบไฟฟ้ากระแสสลับอีกด้วย</p>
                  </details>
                  <details>
                    <summary>Elon Musk</summary>
                    <img src={elon2} alt="" />
                    <p>อีลอน มักส์ ชายผู้ที่ร่ำรวยที่สุดในยุค2022นี้ เขามีส่วนร่วมในการผลักดัน รถยนต์ไฟฟ้า หุ่นยนต์HumanoidOptimus รถไฟฟ้าระบบความเร็วสูง(hyperloop) และการเชื่อมไฟฟ้าเข้ากับสมองมนุษย์(Neuralink) อย่างแน่นอน เขารวมทักษะการเขียนโปรแกรม+พลังงาน+ไฟฟ้า เข้าด้วยกันได้อย่างน่าเหลือเชื่อ</p>
                  </details>
                  <details>
                    <summary>Michael Faraday</summary>
                    <img src={faraday} alt="" />
                    <p>ไมเคิล ฟาราเดย์ ชายผู้คิดค้นวิธีผลิตกระแสไฟฟ้าได้สำเร็จ ด้วยการนำขดลวดวิ่งตัดผ่านสนามแม่เหล็ก หรือสิ่งที่เรารู้จักกันในชื่อ ไดนาโม(Dinamo) นี่คือการค้นพบครั้งยิ่งใหญ่ในประวัติศาสตร์ของไฟฟ้า</p>
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