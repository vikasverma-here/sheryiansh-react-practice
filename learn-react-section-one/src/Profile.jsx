import React from 'react'
import Avatar from './Avatar'

const Profile = () => {
  return (
    <div>
       <Avatar
        size={300}
        imageId={  Math.floor(Math.random())*100 }
        person={{ 
          name: 'Katsuko Saruhashi', 
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnnFf6DXcgRxe71BOQm1orHpnKjJloo9c2jg&s"
        }}
      />
    </div>
  )
}

export default Profile
