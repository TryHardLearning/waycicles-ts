import React from 'react'
import styled from '@emotion/styled';

const Button = styled.button`
    padding: 10px 15px;
    font-size: 15px;
    font-weight: 500;
    color: #ff00ee;
    border: 2px solid #ff00ee;
    background-color: rgba(0,0,0,0.35);
    transition: 0.7s ease;
    cursor: pointer;
    &:hover{
     background-color: rgba(0,0,0,0.9);
    }
`

const ButtonDark =({ text }: { text: string }) => {
  return (
    <Button className='button'>{text}</Button>
  )
}

export default ButtonDark