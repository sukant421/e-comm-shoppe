import React from 'react'

export default function Banner({imageSource=""}) {
  return (
    <div className='m-2' style={{height: "8vh", width: "100vw"}}>
        <img style={{objectFit: "cover"}} width="100%" height="100%" alt='somePhoto' src={imageSource} />
    </div>
  )
}
