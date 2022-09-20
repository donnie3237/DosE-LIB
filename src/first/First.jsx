import React from 'react'
import './first.css'
import mylogo from './logo.png'
import textlogo from './305848359_804645737625108_8966807087779226718_n.png'

function First() {
    function Close(){
        const closee =document.getElementById('firstt')

        closee.style.transform = 'translateX(-100vw)'
        closee.style.transition = 'all 0.5s'
    }
    function refresh(){
      const reswidth = Screen.width;

      if(reswidth>550){
        Location.reload()
      }else{}
    }
    setInterval(refresh,5000)
  return (
    <div className='first' id='firstt'>
        <img className='ilogo' src={mylogo}  />
        <img className='tlogo' src={textlogo}/>
        <p className='version'>WELCOME TO DOSE VERSION 1.0.0</p>
        <button id='fbtn' onClick={Close}>EXPLORE!!</button>
        <p className='mw'>เราไม่สนับสนุนdevice ของคุณ หากคุณใช้แนวนอน กรุณาใช้มือถือแนวตั้ง</p>
    </div>
  )
}

export default First