import React from 'react'
import { img1,img2,img3,img4,img5 } from './utills'

const Avatar = ({person,size,imageId}) => {
  return (
    <div style={{display:'flex', flexWrap:"wrap",margin:'100px',gap:30}}>
    
    <div>
      <h1>{person.name}</h1>
      <img src={person.src} style={{ width: `${size}px`, height: `${size}px` }} alt="" />

      <h3>{imageId}</h3>
    </div>
    <div>
      <h1>{person.name}</h1>
      <img src={img1} style={{ width: `${size}px`, height: `${size}px` }} alt="" />

      <h3>{imageId}</h3>
    </div>
    <div>
      <h1>{person.name}</h1>
      <img src={img2} style={{ width: `${size}px`, height: `${size}px` }} alt="" />

      <h3>{imageId}</h3>
    </div>
    <div>
      <h1>{person.name}</h1>
      <img src={img3} style={{ width: `${size}px`, height: `${size}px` }} alt="" />

      <h3>{imageId}</h3>
    </div>
    <div>
      <h1>{person.name}</h1>
      <img src={img4} style={{ width: `${size}px`, height: `${size}px` }} alt="" />

      <h3>{imageId}</h3>
    </div>
    <div>
      <h1>{person.name}</h1>
      <img src={img5} style={{ width: `${size}px`, height: `${size}px` }} alt="" />

      <h3>{imageId}</h3>
    </div>
    </div>
  )
}

export default Avatar
