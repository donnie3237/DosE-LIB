import React from 'react'
import './style/style.css'
function Raspi() {
  return (
    <div className="jsmain">
        <div className="jsheader">RaspberrtPi</div>
        <div className="jscontents">
            <h2>What is RaspberryPi?</h2>
            <p>RaspberryPi คือบอร์ดสำหรับทำอุปกรณ์ IOTต่างๆคล้ายๆกับบอร์ดArduino ตแ่มันมีข้อดีคือ มันมีแรมกับรอมที่เยอะกว่า แถมยังรองรับการใส่การ์ดSD ถึงแม้ปัจจุบันเรามักเก็บข้อมูลไว้บนคลาวด์กันแล้ว และพี่กยังเชื่อมต่อ Wifi หรือ bluetooth เพื่อรับการสั่งการจากระยะไกล หรือรับอินพุตจากแอพหรือเว็บในมือถือได้อีกด้วย แต่พี่แกมีข้อเสียคือแพงกว่าarduino นิดหน่อย แต่ประสิทธิภาพของบอร์ดนี่ค่อนข้างล้ำหน้ามาก มันรองรับการเขียนโปรแกรมหลายภาษา เช่น Scratch,python,javascript,java,C++ และอีกมากมาย</p>
            <h3>Version,model</h3>
            <p>ในปี 2022 raspberryPi มี 4เวอร์ชั่นแล้ว แถมยังมี โมเดล pico,A,B,B+ ซึ่ง โมเดล 4 B+ มีแรมมากถึง 16GB เลยทีเดียว แถมยังเป็นระบบปฏิบัติการLinux อีกด้วย</p>
            <h3>ติดตามข้อมูลเพิ่มเติม</h3>
            <p>Website : www.raspberrypi.org <br /> Twitter : radpberryPi <br />Youtube : raspberrypi</p>
        </div>
    </div>
  )
}

export default Raspi