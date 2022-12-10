import React from 'react'
import { NavLink } from 'react-router-dom'
import './mynote.scss'

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
            <NavLink to='list1'>หลักการทำงานของระบบเว็บไซต์</NavLink>
            <NavLink to='list1'>หลักการทำงานของระบบฐานข้อมูลและML</NavLink>
            <NavLink to='list1'>หลักการของแบตเตอรี่และโซล่าร์เซลล์</NavLink>
        </div>
    </>
  )
}

export default MyNote