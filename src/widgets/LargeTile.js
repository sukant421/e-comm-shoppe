import React from 'react'

export default function LargeTile({imageSource=""}) {
  return (
    <div className='m-2 flex-wrap' style={{minWidth: "42vw", height: "52vw"}}>
        <img style={{objectFit: "cover"}} width="100%" height="100%" alt='somePhoto' src={imageSource} />
    </div>
  )
}
