import React from 'react'
import { NavLink } from 'react-router-dom'
import './mynote.css'

function MyNote() {
  return (
    <>
        <div className="catagory">
            <h1>สารบัญ</h1>
        </div>
        <div className="catalist">
            <NavLink to='list1'>list1</NavLink>
            <NavLink to='list1'>list2</NavLink>
            <NavLink to='list1'>list3</NavLink>
            <NavLink to='list1'>list4</NavLink>
            <NavLink to='list1'>list5</NavLink>
            <NavLink to='list1'>list6</NavLink>
        </div>
    </>
  )
}

export default MyNote