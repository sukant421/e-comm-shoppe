import React from 'react'

export default function ProductTile({imageSource = ""}) {
  return (
    <div className='m-2' style={{minWidth: "25vw", height: "32vw"}}>
        <img style={{objectFit: "contain"}} width="100%" height="100%" alt='somePhoto' src={imageSource} />
    </div>
  )
}
