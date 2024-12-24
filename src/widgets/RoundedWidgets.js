import React from 'react'

export default function RoundedWidgets({imageSource = ""}) {
  return (
    <div className='d-block-center'>
    <div className='m-2' style={{width: "18vw", height: "18vw", borderRadius: "50%", overflow: "hidden"}}>
        <img style={{objectFit: "contain"}} width="100%" height="100%" alt='somePhoto' src={imageSource} />
    </div>
    <h6 className='d-flex-center'>Name</h6>
    </div>
  )
}
