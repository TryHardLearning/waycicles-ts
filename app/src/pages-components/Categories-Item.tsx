import React from 'react'
import { ButtonDark } from '../components/ButtonDark'
import './css/CategoryItem.css'


const CategoryItem = ({item} : {item: any}) => {
  return (
    <div className='category-item'>
      <img src={item.img} className=''/>
      <div className='info d-flex align-items-center justify-content-center flex-column'>
        <h1 className='text-white mb-4 fws500'>{item.title}</h1>
        <ButtonDark text="Show Now"/>
      </div>
    </div>
  )
}

export default CategoryItem