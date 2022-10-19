import React from 'react'
import { NavLink } from 'react-router-dom'
import './mynote.css'

function MyNote() {
  return (
    <>
        <div className="catagory">
            <h1>สารบัญ</h1>
        </div>
        <div className="catalist">
            <NavLink to='list1'>องค์ประกอบวงจรไฟฟ้า</NavLink>
            <NavLink to='list1'>การวิเคราะห์วงจร</NavLink>
            <NavLink to='list1'>อุปกรณ์ไฟฟ้าเชิงกล</NavLink>
            <NavLink to='list1'>ระบบคอมพิวเตอร์ฝังตัว</NavLink>
            <NavLink to='list1'>การออกแบบเเละพัมนาซอฟต์แวร์</NavLink>
            <NavLink to='list1'>การต่อพ่วงและอินเตอเฟสกับเวลา</NavLink>
        </div>
    </>
  )
}

export default MyNote