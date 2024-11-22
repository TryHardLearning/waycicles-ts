import React from 'react'
import { Search, ShoppingCartOutlined , FavoriteBorderOutlined, BorderAll } from '@mui/icons-material'
import { Badge } from '@mui/icons-material'
import { Container } from 'react-bootstrap'
import './css/Navebar.css'
import { Announcement } from './index'
import styled from '@emotion/styled'

const NavbarContainer = styled.nav`
    box-shadow: 0 5px 5px rgba(57, 63, 72, 0.3);
    background-color: #fff;
    z-index: 1000000;
    position: fixed;
    top: 30px;
`

const HeartBit = styled.span`
    font-size: 14px;
    transition: all 1s ease !important;
`

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    width: 45%;
`

const Input = styled.input`
    border-radius: 2px;
    padding: 4px;
    border: none;
    max-width: 90%;
`

const Logo = styled. {
    font-size: 32px;
}

.MenuItem{
    font-size: 14px;
}

const Navebar = () => {
  return (
    <>
      <Announcement/>
      <Container fluid className='navebar ps-4 pe-4' style={{height: '60px'}}>
      <div className='wrapper h-100 w-100 d-flex justify-content-space-between align-items-center'>
          <div className='left d-flex align-items-center justify-content-flex-start h-100' style={{flex:  '1'}}>
              <span className='HeartBit link'>
                <FavoriteBorderOutlined/>
              </span>
              <div className='SearchContainer d-flex align-items-center m-2'>
                <input type='search' className='input'/>
                <Search style={{color: "#444", fontSize: 16}}/>
              </div>
          </div>
          <div className='Center d-flex justify-content-center align-items-center h-100' style={{flex:  '1'}}>
              <a href='#' className='logo fw-500 text-center text-bg-black'>WayCycles</a>
          </div>
          <div className='Right d-flex justify-content-end align-items-center h-100' style={{flex:  '1'}}>
              <div className='MenuItem ms-2 me-2'><a href='#' className='link'>Register</a></div>
              <div className='MenuItem ms-2 me-2'><a href='#' className='link'>Sing In</a></div>
              <div className='MenuItem ms-2 me-2'>
                <Badge>
                    <ShoppingCartOutlined />
                </Badge>
              </div>
              
          </div>
      </div>
    </Container>
    </>
    
  )
}

export default Navebar