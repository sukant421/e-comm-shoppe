import React from 'react'

export default function CategoryTabs() {
  return (
    <div className='d-flex'>
        <div className='cat-btn'>Men</div>
        <div className='cat-btn cat-active'>Women</div>
        <div className='cat-btn'>Kids</div>
        <div className='cat-btn'>Beauty</div>
    </div>
  )
}
