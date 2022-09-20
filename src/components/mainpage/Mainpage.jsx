import React from 'react'
import { useState,useEffect} from 'react';
import './main.css'
import { NavLink } from 'react-router-dom';
import gith from './img/IMG_20220915_225203.jpg'
import twtr from './img/Screenshot_2022-09-15-22-53-09-77_f9ee0578fe1cc94de7482bd41accb329.jpg'
function Mainpage() {
    setInterval(myTime,1000);
    function myTime(){
      const d = new Date();
      document.getElementById('time').innerHTML = d.toLocaleTimeString();
    }

  return (
    <div className='mainp'>
      <div className="parallax">
          <h2 id='time'></h2>
          <p>Scroll Down </p> </div>
        <div className="path">
          <p>
            สวัสดี วันนี้เราจะมาเชื่อมโยงระหว่าง 
            วิศวกรรมไฟฟ้า วิศวกรรมซอฟต์แวร์/ฮาร์ดแวร์ และพลังงานกัน
          </p>
          <NavLink to='/javascript' className="jss">
            <h1>Javascript</h1>
          </NavLink>
          <NavLink to='/solar' className="ene">
            <h1>Solar,Batterry</h1>

          </NavLink>
          <NavLink to='/electric' className="thu">
            <h1>Electric</h1>
          </NavLink>
        </div>
        <div className="parallax1">
        </div>
        <div className="ebook">
          <h2>ฉันมีหนังสือ ไฟล์PDF มาแนะนำคุณ คุณอาจจะชอบมัน</h2>
          <div className="cropbook">
            <div className="ccbook">
              <div className="bline1">
                <div className="book book1"><a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fdrive.google.com%2Fdrive%2Ffolders%2F18Eww7WpOVfimI2O5xfYH-P2jZ8grzPvc%3Ffbclid%3DIwAR1m3qabqdNz5JVUGDUt6_hZuisSEUXsfRBIY3ulRHNgMUHbvHmuY4NmlLo&h=AT3Zn75IRU8J4S39FNR342F1FIZ3XNt6-ffkagC0odRKmBJp2RwbFLf4sdtsXSPEWqqqmWMl57N5-m9fpT8f8fuu8JKNnr_zxS4uocNwZwWtqmtZ7M5ol3vNSRMGs70v5tMFWw">Electric</a></div>
                <div className="book book2"></div>
              </div>
              <div className="bline2">
                <div className="book book3"></div>
                <div className="book book4"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="parallax2">
          <p>About Me!!</p>
        </div>
        <div className="about">
          <div className="gicon">
          <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          </div>
          <img src={gith}/>
          <div className="ticon">
          <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
          </svg>
          </div>
          <img src={twtr}/>
        </div>
    </div>
  )
}

export default Mainpage