import React from 'react'
import { Container } from 'react-bootstrap'
import { Product } from './index'

import {popularProducts} from '../Data'

const Products = () => {
  return (
    <Container fluid className='products p-2 d-flex justify-content-between flex-wrap' style={{background: '#f5fafd'}}>
        {popularProducts.map((item) =>(
            <Product key={item.id} item={item}/>
        ))}
    </Container>
  )
}

export default Products