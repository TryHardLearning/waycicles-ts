import React from 'react'
import styled from '@emotion/styled'
import { ButtonDark } from '../components'

const Categoryitem = styled.section`
  flex: 1;
  margin: 5px;
  height: 70vh;
  border-radius: 0 5px;
  position: relative;
  transition: all 1s ease;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0 5px;
`

const Info =styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3));
  border-radius: 0 5px;
  transition: all 1s ease;
  border-right: 2.5px solid transparent;
  border-bottom: 2.5px solid transparent;
  ${Categoryitem}:hover{
    border-right: 2.5px solid #ff00ee;
    border-bottom: 2.5px solid #ff00ee;
  }
`


const CategoryItem = ({item} : {item: any}) => {
  return (
    <Categoryitem className='category-item'>
      <Image src={item.img}/>
      <Info className='d-flex align-items-center justify-content-center flex-column'>
        <h1 className='text-white mb-4 fws500'>{item.title}</h1>
        <ButtonDark text="Show Now"/>
      </Info>
    </Categoryitem>
  )
}

export default CategoryItem