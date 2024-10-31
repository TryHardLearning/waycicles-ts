import React from 'react'
import {categories} from '../Data'
import {CategoryItem} from './Categories-Item'
import { Container, Row } from 'react-bootstrap'


export const Categories = () => {
  return (
    <Container fluid className='Categories d-flex justify-content-space-between ps-4 pe-4'> 
      {categories.map(({item}: any)=>(
         <CategoryItem key={item.id} item={item}/>
      ))}
    </Container>
  )
}
