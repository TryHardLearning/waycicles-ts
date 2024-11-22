import React from 'react'
import {categories} from '../Data'
import { CategoryItem } from './index'
import { Container, Row } from 'react-bootstrap'


const Categories = () => {
  return (
    <Container fluid className='Categories d-flex justify-content-space-between ps-4 pe-4'> 
      {categories.map(({item}: any)=>(
         <CategoryItem key={item.id} item={item}/>
      ))}
    </Container>
  )
}

export default Categories
