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
            <h3>MQTT</h3>
            <p>Mqtt คือระบบให้บริการเซิฟเวอร์ยอดนิยมสำหรับสายIOT ที่จะส่งข้อมูลและรับข้อมูลจากอุปกรณ์ไปบนโลกอินเทอร์เน็ต ซึ่งถ้าจะทำHttp เองก็ได้เหมือนกัน</p>
            <h3>เริ่มติดตั้งNode-red</h3>
            <p>เข้าไปที่ คอมมมานด์ แล้วใช้คำสั่ง npm i node-red สำหรับเริ่มติดตั้ง หลังจากนั้นใช้คำสั่ง node-red เพื่อทำการรันเซิร์ฟเวอร์ และหลังจากนั้นให้เข้าไปที่ localhost:1880 ของบราวเซอร์ จะพบกับหน้าต่าง ลากๆวางๆ และลองลากมั่วกันเลย</p>
            <h3>ติดตามข้อมูลเพิ่มเติม</h3>
            <p> Website : www.nodered.org <br />Twitter : Node-Red <br />Github : ไปหาในเว็บเลย มันน่าจะโฮเพ่นซอร์ส</p>
        </div>
    </div>
  )
}

export default NodeRed