import React from 'react'
import './style/style.css'
function Cyber() {
  return (
    <div className="jsmain">
        <div className="jsheader">Cyber</div>
        <div className="jscontents">
            <h2>Cyber?</h2>
            <p>Cyber คือการโจมตีทางซอฟต์แวร์ ที่ทำได้หลายรูปแบบ และพัฒนาอย่างต่อเนื่อง ไม่ว่าจะทางSQL ทางเซิร์ฟเวอร์ ทางการทำซอฟต์แวร์ฝังตัวเพื่อโจมตีข้อมูล(รันซัมแวร์) หรือแม้แต่การเดารหัสผ่านถูก</p>
            <h2>Security</h2>
            <p>คือการอุดช่องโหว่ของแอพ ในการโจมตี เช่น ทำให้ SQLมันlean มากที่สุด การป้องกันการโดนโจมตีเซอร์ฟเวอร์ และการป้องกันการ ถูกฝังรันซัมแวร์ นอกจากนี้การทำให้รหัสผ่านดูรัดกุม การรหัสผ่าน2ชั้นก็เป็นวิธีที่เยี่ยมยอด</p>
            <h3>JWT</h3>
            <p>JWT คือการแปลงไฟล์ ในรูปแบบJavaScript ที่จะทำการencodeลแะdecode และระบบโทเค่น ที่จะทำให้ข้อมูลรัดกุมมากขึ้น เพราะรหัสผ่านของคุณจะมีวันหมดอายุและต้องใส่รหัสผ่านใหม่เพื่อล็อคอิน</p>
        </div>
    </div>
  )
}

export default Cyber