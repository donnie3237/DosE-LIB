import React from 'react'
import { useState,useEffect } from 'react';
import './css/elecstyle.css'
function Basic1() {
    const p =document.getElementById("p")
    const [paragraph,setParagraph]= useState("")
    
    function Search(){
        let input =document.getElementById("input").value;
        if (input !== ""){
            setParagraph(input)
        }
        if(paragraph !== ""){
            let regExp =new RegExp(input, "gi")
            p.innerHTML = (p.textContent).replace(regExp,"<mark>$&</mark>")
        }
    }
  return (
    <div className='main'>
        <div className="cmain">
            <div className="search">
                <input type="text" id='input' placeholder='Search' />
                <input type="submit" value='Search' id='search-btn' onClick={Search} />
            </div>
            <p id='p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe nihil laudantium rem assumenda voluptate vel ut dolores sit maiores aperiam voluptas, tenetur explicabo et doloremque nam inventore autem reiciendis id. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque doloribus voluptatem illum provident perferendis unde ab laborum. Laudantium vel, mollitia sunt, dolor numquam veritatis qui amet aliquam vitae consequatur officiis ratione laborum, ex ipsum distinctio suscipit? Architecto earum praesentium provident.</p>
        </div>
    </div>
  )
}

export default Basic1

//Main class Div for Big PaGe 
//mini-text For Mini text
//Twopart For Two part flex
//size-100 For 100% img size
//adiv for 1 element