import React from 'react'
import { NavLink } from 'react-router-dom'
import './style/style.css'

function Next() {
      return (
        <div className="jsmain">
            <div className="jsheader">NextJS</div>
            <div className="jscontents">
                <h2>What is NextJS?</h2>
                <p>NextJS อาจเรียกได้ว่า เป็นReactJS เวอร์ชั่นอัพเกรด เพราะผู้พัฒนาเจ้าเดียวกัน สิ่งที่มันดีกว่าคือ SSR Server-side-rendering ที่จะทำให้เว็บติดหน้าBeowser เมื่อSearchได้ง่ายขึ้น และปวดหัวกับเรื่องRouterน้อยลง //หรือเพิ่มขึ้นวะ เอาเป็นว่ามันอาจปวดหัวน้อยกว่า แล้วแต่ความถนัดของแต่ละคน</p>
                <h3>NextJS Api</h3>
                <p>NextJS มันไม่ใช่ Back-end framework หรือ FullStack framework ด้วยตัวมันเองได้ แต่มันก็พอใช้ได้อยู่นิดหน่อย แต่ อย่าหาทำดีกว่า รอมันอัพเดทดีๆก่อน</p>
                <div className="therminal">
                  <p>npx create-next-app</p>
                  <div className="comment">
                    //สำหรับติดตั้งNextJS
                  </div>
                </div>
                <h3>Auto Router</h3>
                <p>React-router-dom อาจจำเป็นต้องรู้น้อยลง เปลี่ยนเป็นการรู้วิธีสร้างไฟล์ ในDir ต่างๆแทน แต่มันเจ๋งอยู่นะ ซึ่งผมก็ไม่ค่อยจะชินกับมันหรอก เพราะมันมี params Id ให้ใช้ด้วย</p>
                <h3>NextJS กับ ReactJS</h3>
                <p>การใช้งานNextJS สามารถนำความรู้ของReactJS มาใช้ได้แทบทุกอย่าง เพราะมันเป้นตัวที่พัฒนาต่อมาจาก ReactJS แต่มีที่แตกต่างอยู่ เช่น การRun localhost จะใช้คำสั่ง "npm run dev" ในกรณีที่สคริปต์ให้มา ศึกษาเพิ่มเติมได้ที่ <NavLink to="/javascript/react">ReactJS</NavLink></p>
                <h3>ติดตามข่าวสาร</h3>
            <p>Website: www.nextjs.org <br />Twitter: @nextjs </p>
            </div>
        </div>
      )
    }

export default Next