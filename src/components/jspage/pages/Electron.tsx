import React from 'react'
import './style/style.css'
function Electron() {
  return (
    <div className="jsmain">
        <div className="jsheader">ElectronJS</div>
        <div className="jscontents">
            <h2>What is ElectronJS?</h2>
            <p>ElectronJS คือเฟรมเวิร์ค สำหรับทำ DesktopApp สำหรับระบบปฏิบัติการ Windows,MacOS,Linux แต่ในการสร้าง มันใช้ Html,css,javascript ทั่วไป ซึ่ง เอาReactJS หรือเฟรมเวิร์คทำเว็บอื่นๆมาทำงานร่วมกับมันก็ได้ สามารรันดูก่อนbuild ด้วยคำสั่ง "npm start"</p>
            <h2>dist,build</h2>
            <p>การbuild Fileเราจะต้อง จัดการไฟล์บางอย่างใน Package.json อย่าลืมใช้คำสั่งnpm init ก่อนนะ หลังจากเซตไอคอน ไฟล์ต่างๆที่ต้องการbuild แล้ว ให้ใส่สคริปต์ "dist" เป็นการBuildFile ซะก่อน หลังจากนั้นใช้คำสั่ง "npm run dist"</p>
            <h2>ipc</h2>
            <p>เอาไว้สำหรับการจัดการสิ่งอื่นๆมากขึ้น เช่น ปุ่มปิดแอป ปุ่มย่อแอป ปุ่มรีแอป แท็บลากแอป และสิ่งอื่นๆอีกมากมาย โดยมี ipcMain สำหรับไฟล์หลัก และ ipcRenderer สำหรับไฟล์แยก</p>
            <h3>loadFile,loadURL</h3>
            <p>นอกจากจะทำเว็บเองเพื่อเอาออกมาเป็นแอปDesktopได้แล้ว ยังสามารถ นำลิงค์จากเว็บที่Host แล้วมาทำเป็นอพได้อีกด้วย</p>
            <h3>BrowserWindow</h3>
            <p>เป็นตัวเลือกเพิ่มเติม สำหรับ preload หรือ สิ่งอื่นๆ เช่น เท็บบนเริ่มต้น และสิ่งอื่นๆอีกมากมาย ว่าจะเซ็ตค่าให้ true หรือ false รวมถึงความกว้าง,ยาว ของแอป ว่าเล็กสุดเท่าไหร่และใหญ่สุดเท่าใหร่</p>
            <h2></h2>
        </div>
    </div>
  )
}

export default Electron