import React from 'react'
import './style/style.css'
function Express() {
  return (
    <div className="jsmain">
        <div className="jsheader">ExpressJS</div>
        <div className="jscontents">
            <h2>What is ExpressJS?</h2>
            <p>ExpressJS คือเฟรมเวิร์คฝั่ง Back-end หรือ เซิร์ฟเวอร์ มักนำมาประมวลผลฝั่งหน้าเว็บ เพื่อ จัดการกับฐานข้อมูล หรือ รับRequest จากฝั่ง Back-end และ Renponse ข้อมูลส่งกลับไปยังฝั่ง front-end เพื่อแสดงผลหน้าเว็บ และExpressJS คือเฟรเวิร์คที่นิยมที่สุดในการพัฒนาฝั่งServer javascript เพราะมันเข้าใจง่าย และมีคอมมูนิตี้หรือคนคอยสอนเยอะ ติดตั้งโดย "npm i express"</p>
            <h3>cors</h3>
            <p>cors คือ lib ที่น่าสนใจ//หากคุณไม่อยากติดบัคอ่ะนะ มันเอาไว้ใช้ในการอนุญาต การ ดึงข้อมูลข้ามเว็บไซต์ หรือ การดึงapi จากแหล่งอื่นมานั่นเอง ติดตั้งโดย "npm i cors" หลังติดตั้งมา อย่าลืมใช้พี่แกด้วยหล่ะ โดยกำหนดตัวแปร const cors =require('cors') และใช้ app.use(cors())
              ส่วน method app คืออะไร ดูได้ที่หัวข้อ  basic
            </p>
            <h3>Nodemon</h3>
            <p>Nodemon เป็น lib ตัวช่วยที่จะทำให้คุณนั้นพัฒนาserver ได้ดี และรวดเร็วยิ่งขึ้น เพราะ มันจะ อัพเดทการเปลี่ยนแปลงไปยังlocalhost ทุกๆครั้งที่มีการเปลี่ยนแปลงไฟล์ ติดตั้งได้โดยใช้ "npm i nodemon" ใช้พี่แกได้ โดย ไปใส่สคริปต์ ที่ไฟล์ Package.json ของฝั่งServer "start":"nodemon ("ชื่อไฟล์ของหน้าหลักเซิฟเวอร์")" หลังจากนั้น ใช้ npm start จากฝั่งของเซิฟเวอร์</p>
            <h3>dotenv</h3>
            <p>dotenv จะช่วยซ่อน localhost รหัสฐานข้อมูล หรือสิ่งต่างๆที่ต้องการซ่อนไว้ เพื่อป้องกันการถูกแฮ็ค ติดตั้งด้วยคำสั่ง "npm i dotenv" และเรียกใช้พี่แกโดย require('dotenv').config(); และต้องใช้พี่ในบรรทัดบนสุดของโค้ด เพราะมันจะเออเร่อได้ การเรียกใช้ตัวแปรที่เก็บทำได้โดย "process.env.('ชื่อตัวแปรในไฟล์.env')"</p>
            <h3>Router</h3>
            <p>router ฝั่งServerจะเป็นตัวกำหนดว่า จะให้front-end เรียกfetchด้วยลิงค์ไหน และมันกำลังจะทำอะไรอยู่ในrouteนั้นๆ โดยมันจะอยู่หลังจาก"/"ของไซต์หลัก เช่น www.doseeiei.com/login</p>
            <h3>model</h3>
            <p>การทำโมเดลสำหรับฝั่งเซิร์ฟเวอร์ จะทำให้เข้าใจว่าจะเก็บชุดข้อมูลในไทป์ไหน ลักษณะยังไง สิ่งใช้คือ mongoose และ Schema โดยติดตั้ง mongoose ด้วยคำสั่ง "npm i mongoose" ใช้พี่แกในไฟล์ models.blablabla.js จะทำให้แยกและดูง่ายขึ้น โดยกำหนดตัวแปร let mongoose =require('mongoose') และใช้ let Schema = mongoose.Schema เพื่อสร้าง Schema</p>
            <h3>controller</h3>
            <p>controller เอาไว้ควบคุมว่า ตัวแปรไหนจะเอาไปทำอะไรในกรณีแยก เช่น ตัวแปร createUser เอาไว้สร้างผู้ใช้ใหม่ในระบบ getUsers เอาไว้สำหรับ ดูข้อมูลของผู้ใช้เพื่อตอบสนองยังหน้าเว็บ เป็นต้น</p>
            <h3>basic</h3>
            <p>โดยเบสิคเลย เราจะต้องมีไฟล์หลัก ส่วนใหญ่มักชื่อ index.js หรือ server.js แต่มันไม่ฟิกนะ จะใช้ชื่ออะไรก็ได้ แต่ไปใส่ใน Package.json ให้ถูกละกัน เราจะต้องเรียก Express โดย const express =require('express'), const app =express();//เป็นการเรียกใช้ฟังก์ชั่น Express และต้องมีพอร์ต โดยกำหนดตัวแปร const PORT = ('เลขพอร์ต')หรือ process.env.('ตัวแปร') หรือใช้2อย่างกันเซิฟล่มโดย ใช้เครื่องหมาย"||"คั่นไว้ 
              เรียกใช้โดย app.listen("ตัวแปรพอร์ต" หรือใส่เลขไปโต้งๆได้เลย)เพื่อ กำหนด localhosePort ของ server และอาจทดสอบว่ามันเวิร์คไหมด้วยการลอง ใช้ app.get('/', send("hello server!!")) และลองรัน "npm start"จากฝั่งเซิฟเวอร์ดู และเข้าบราวเซอร์ เข้าลิงค์ localhost:("หมายเลขของพอร์ตที่สั่งรัน")
            </p>
        </div>
    </div>
  )
}

export default Express