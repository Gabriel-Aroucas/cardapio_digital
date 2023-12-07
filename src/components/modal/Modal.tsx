'use client'
import React from 'react'
import './modal.css'
interface props_types{
  name:string,
  description:string,
  button:string
}
const Modal = ({name,description,button} :props_types) => {
  const close_modal =()=>{
    const modal = document.querySelector('.modal_bg') as HTMLElement;
      modal.style.transform="scale(0%)"
  }
  
  return (
    <section className='modal_bg'>
    <div className='Modal'>
      <span onClick={()=>{close_modal()}}>x</span>
      <h1>{name}</h1>
      <p>{description}</p>
      <button type='button' onClick={()=>{close_modal()}}>{button}</button>
    </div>
    </section>
  )
}

export default Modal