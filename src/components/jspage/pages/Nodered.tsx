import React from 'react'
import './style/style.css'
function NodeRed() {
  return (
    <div className="jsmain">
        <div className="jsheader">Node-Red</div>
        <div className="jscontents">
            <h2>What is Node-Red?</h2>
            <p>Node-Red คือ เฟรมเวิร์คสำหรับทำเกี่ยวกับIOT ที่รันบน NodeJs run time ซึ่งมันไวระดับหนึ่ง แต่มันไม่ไวมากถ้าเทียบกับ CหรือC++</p>
            <h3>NodeJS อีกละ??</h3>
            <p>เนื่องจากNodeJS เป็นเครื่องมือที่ค่อนข้างสำคัญสำหรับ ชาว JavaScript และไอ่ตัวนี้ก็รันบน NodeJS อีกละฮ่าๆ</p>
            <h3>Low-Code??</h3>
            <p>ในการเรียนรู้Node-red มันถูกจัดให้ใช้งานง่าย และเป็นมิตรต่อผู้ใช้ มันจึงเป็นเหมือน FlowChart ที่มีส่วน input process และoutput ให้เข้าใจง่าย แถมยังมีตัวดีบักแบบเก๋ๆอีกด้วย</p>
            <h3>ติดตามข้อมูลเพิ่มเติม</h3>
            <p> website : www.nodered.org <br />Twitter : Node-Red <br />Github : ไปหาในเว็บเลย มันน่าจะโฮเพ่นซอร์ส</p>
        </div>
    </div>
  )
}

export default NodeRed