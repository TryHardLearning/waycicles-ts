import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import { sliders } from '../Data'
import {ButtonDefault} from '../components/ButtonDefault'
import './css/Slider.css'

export const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction: string) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : slideIndex + 1);
    } else {
      setSlideIndex(slideIndex < (sliders.length - 1) ? slideIndex + 1 : 0);
    }
  }

  return (
    <Container fluid className='slider d-flex position-relative overflow-hidden'>
      <div className='arrow m-auto d-flex justify-content-center align-items-center position-absolute' style={{ left: '10px' }} onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </div>
      <div className='wrapper d-flex h-100'style={{transform: `translateX(${slideIndex * -100}vw)`}}>
        {sliders.map((item: any) => (
          <div className='slide h-100 vw-100 d-flex align-items-center' key={item.id} style={{background: `${item.bg}`}}>
            <div className='img-container h-100 d-flex justify-content-center align-items-center'>
              <img src={item.img} style={{borderColor: `#${item.color}`}} className='img'/>
            </div>
            <div className='info-container h-100 ps-4 d-flex flex-column justify-content-center align-items-start'>
              <h1 style={{color: `${item.color}`}}>{item.title}</h1>
              <div className='description fw-500 mt-4 mb-4'>{item.desc}</div>
              <ButtonDefault text='Show Now' color={item.color}/>
            </div>
          </div>
        ))}
      </div>
      <div className='arrow m-auto d-flex justify-content-center align-items-center position-absolute' style={{right: '10px' }} onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </div>
    </Container>
  )
}
