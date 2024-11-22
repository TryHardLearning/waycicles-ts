import React from 'react'
import { Container } from 'react-bootstrap'
import styled from '@emotion/styled';

// #TODO Fix te container / announciment styled
const announcement = styled.span`
    height: 30px;
    background-color: #ee00dd; 
    font-size: 14px;
    position: fixed;
    top: 0px;
    z-index: 1000000;
`


const Announcement = () => {
  return (
    <Container fluid className='announcement text-white d-flex align-items-center justify-content-center fw-500'>
        Super Deal! Free Shipping on Orders Over $50
    </Container>
  )
}

export default Announcement