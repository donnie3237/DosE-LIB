import React from 'react'
import { NavLink } from 'react-router-dom'
import './style/style.css'
function Nest() {
  return (
    <div className="jsmain">
        <div className="jsheader">NestJS</div>
        <div className="jscontents">
            <h2>What is NestJS?</h2>
            <p>NestJS เป็นเฟรมเวิร์คที่ น่าจะนิยมรองลงมาจาก ExpressJS (ในฝั่งServerของJavascript) และมันเป็นเฟรมเวิร์คที่มีประสิทธิภาพสูงกว่าExpressJs อีกด้วย จากการใช้TypeScript ทำให้มันใช้งานได้ง่ายขึ้น</p>
            <h3>What is TypeScript?</h3>
            <p>TypeScript คือภาษาที่พัฒนาต่อมาจากJavascript มันมีข้อแตกต่างคือมันมีการประกาศประเภทของตัวแปร :number สำหรับตัวเลข :array สำหรับชุดข้อมูล :string สำหรับข้อความ และ :any สำหรับอะไรก้ได้  และมีแท็กเพิ่ม เช่น enum typeOf เป็นต้น แต่จะเขียนJavaScript เพียวๆ ลงในTypeScript ก็ได้นะ</p>
            <h3>Server system</h3>
            <p>ระบบเซิฟเวอร์จะมีอะไรคล้ายๆกัน เช่น รันบนlocalhost อะไร หลักการทำงานประมาณไหน เช่น การ Post Get Update Delete ดูหลักการเบื้องต้นได้ที่ ExpressJS <NavLink to="/javascript/express">ExpressJS</NavLink></p>
        </div>
    </div>
  )
}

export default Nest