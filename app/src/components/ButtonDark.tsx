import React from 'react'
import './css/ButtonDarkHover.css'


function ButtonDarkHover({ text }: { text: string }) {
  return (
    <button className='button'>{text}</button>
  )
}

export default ButtonDarkHover