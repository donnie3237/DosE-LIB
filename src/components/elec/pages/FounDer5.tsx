import React from 'react'
import { useState,useEffect } from 'react';
import './css/elecstyle.css'
function FounDer5() {
    const p =document.getElementById("p")
    const p1=document.getElementById("p1")
    const [paragraph,setParagraph]= useState("")
    
    function Search(){
        let input =document.getElementById('input').value;
        if (input !== ""){
            setParagraph(input)
        }
        if(paragraph !== ""){
            let regExp =new RegExp(input, "gi")
            p.innerHTML = (p.textContent).replace(regExp,"<mark>$&</mark>")
            p1.innerHTML = (p1.textContent).replace(regExp,"<mark>$&</mark>")
        }
    }
  return (
    <div className='main'>
        <div className="cmain">
            <div className="search">
                <input type="text" id='input' placeholder='Search here!!' />
                <a onClick={Search}><svg xmlns="http://www.w3.org/2000/svg" width="70%" height="70%" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></a>
            </div>
            <div className="eleccontent">
                <h2>สนามไฟฟ้า เกี่ยวข้องกับสนามแม่เหล็กอย่างไร?</h2>
                <p id='p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe nihil laudantium rem assumenda voluptate vel ut dolores sit maiores aperiam voluptas, tenetur explicabo et doloremque nam inventore autem reiciendis id. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque doloribus voluptatem illum provident perferendis unde ab laborum. Laudantium vel, mollitia sunt, dolor numquam veritatis qui amet aliquam vitae consequatur officiis ratione laborum, ex ipsum distinctio suscipit? Architecto earum praesentium provident.</p>
                <p id='p1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe nihil laudantium rem assumenda voluptate vel ut dolores sit maiores aperiam voluptas, tenetur explicabo et doloremque nam inventore autem reiciendis id. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque doloribus voluptatem illum provident perferendis unde ab laborum. Laudantium vel, mollitia sunt, dolor numquam veritatis qui amet aliquam vitae consequatur officiis ratione laborum, ex ipsum distinctio suscipit? Architecto earum praesentium provident.</p>
            </div>
        </div>
    </div>
  )
}

export default FounDer5