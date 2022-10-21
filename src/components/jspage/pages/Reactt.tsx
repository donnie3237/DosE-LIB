import React from 'react'
import './style/style.css' 
const text: string ="import : {useState,useEffect,useRef} : from : 'react'".split(':').join('  '+' ')
function Reactt() {
  return (
    <div className="jsmain">
        <div className="jsheader">ReactJS</div>
        <div className="jscontents">
            <h2>What is ReactJS?</h2>
            <p>ReactJS คือเฟรมเวิร์คสำหรับสร้างFont-end ของเว็บแอป โดยมีตัวที่แยกอีกคือReactNative ที่เอาไว้ทำแอปมือถือโดยเฉพาะ ReactJS เป็นเฟรมเวิร์คที่มีความนิยมในการสร้างเว็บมากที่สุดมาหลายปีแล้วซึ่งตอนนี้พี่เเกก็ยังครองแชมป์อยู่ ติดตั้งโดยคำสั่ง "npx create-react-app name" และเมื่อทำงานเสร็จ ใช้คำสั่ง "npm run build" จะได้ไฟล์ build สำหรับนำไปHost หรือจะHost ผ่านGithub ก็ได้นะ และระหว่างพัฒนาสามารถรันบนlocalhost:3000 ด้วยคำสั่ง "npm start"</p>
            <div className="therminal">
              <p>npx create-react-app blablala</p>
              <div className="comment">
                //สำหรับเริ่มติดตั้ง
              </div>
            </div>
            <div className="therminal">
              <p>npm start</p>
              <div className="comment">
                //สำหรับเริ่มโปรเจค
              </div>
            </div>
            <div className="therminal">
              <p>npm run build</p>
              <div className="comment">
                //สำหรับสร้างไฟล์เพื่อไปโฮสต์
              </div>
            </div>
            <h3>React-Router</h3>
            <p>React-router คือตัวที่ทำให้เว็บไซต์สามารถลิงค์ไปยังหน้าต่างๆได้ สิ่งที่น่าจะต้องรู้หลักๆเลยคือ การทำงานของ BrowserRouter,HashRouter,Router,Route,Routes และ ตัวกดลิงค์ที่เรียกว่า NavLinkและHashLink ติดตั้งโดย "npm i react-router-dom@6"</p>
            <div className="therminal">
              <p>npm i react-router-dom</p>
              <div className="comment">
                //สำหรับติดตั้งเราเตอร์
              </div>
            </div>
            <h3>React-hook</h3>
            <p>นี่ก็เป็นสิ่งที่สำคัญอีกอย่างหนึ่งสำหรับหลักการReact-hook เพราะในการใช่React ได้import ตัวนี้มาใช้บ่อยมากๆเหมือนกัน เกี่ยวกับเรื่อง useState,useEffect,useRef สำหรับการเพิ่มฟีเจอร์ต่างๆให้สวยงาม และมันเป็นหัวใจหลักในการใช้ReactJS ที่ต้องรู้ </p>
            <div className="therminal">
              <p>{text}</p>
            </div>
            <h3>JSX,TSX File</h3>
            <p>ในการเขียน ReactJS component สำหรับมาประกอบเข้ากับหน้าหลัก การสร้างไฟล์ blablabla.jsx สำหรับ JavaScript และ blablabla.tsx ในVScodeนั้นจะทำให้การพัฒนาง่ายและสะดวกขึ้น //แต่มันไม่บังคับนะ</p>
            <h3>Axios</h3>
            <p>Axios เอาไว้สำหรับ คุยกับฝั่ง back-end หรือเซิฟเวอร์ หากต้องการเพิ่มข้อมูลไปยังฐานข้อมูล หรือจัดการอื่นๆกับฐานข้อมูล นอกจากนี้ เอาไว้ส่งข้อมูลตรวจสอบให้กับเซิฟเวอร์สำหรับระบบที่มีการล็อคอินเข้าสู่ระบบ โดยตรวจสอบว่ามีผู้ใช้นี้อยู่ในฐานข้อมูลหรือไม่ รวมถึงการ Fetch ข้อมูลมาแสดงบนหน้าเว็บได้อีกด้วย ติดตั้งด้วยคำสั่ง "npm i axios" </p>
            <div className="therminal">
              <p>npm i axios</p>
              <div className="comment">
                //สำหรับติดตั้ง Axios
              </div>
            </div>
            <h3>Component</h3>
            <p>การแยกชิ้นสอนงาน ก่อนนำมาประกอบกันเป็นเว็บ มันทำให้เว็บของเรา มีความง่ายต่อการจัดการหน้าต่างๆ แทนที่จะมีหน้าHTMLเพียงหน้าเดียวและยุ่งเหยิงในไฟล์เดียว และนี่คือประโยชน์ของการใช้มัน</p>
            <h3>React-Native</h3>
            <p>ReactNative คือ เฟรมเวิร์ครีแอคนี่แหละมีหลักการที่คล้ายคลึงกันแต่มีตัวแปรเพิ่ม เช่น View image ที่ต้องตึงมาจากไลบรารีReact-native</p>
            <h3>More</h3>
            <p>แน่นอนว่ามีอีกหลายตัว เช่น Famer-motion react-toastify Aos และอื่นๆที่น่าสนใจอีกมากมาย เพราะคอมมูนิตี้มันเยอะจริงๆ </p>
            <h3>ติดตามข่าวสาร</h3>
            <p>Website: www.reactjs.org <br />Twitter: @reactjs </p>
        </div>
    </div>
  )
}

export default Reactt