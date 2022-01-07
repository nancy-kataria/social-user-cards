import React from 'react'
import Location from'./Location'
import PhoneNumber from './PhoneNumber'

const SocialCard = ({user}) => {
    return (
        <div className='card'>
            <div className='card-title'>{user.name.first} {user.name.last}</div>
            <div className='card-body'>
                <Location location={user.location} />
                <PhoneNumber type='Home' number={user.phone} />
                <PhoneNumber type='Mobile' number={user.cell} />
                <div className='card-image'><img src={user.picture.medium} alt='client-pic' /></div>
            </div>
        </div>
    )
}

export default SocialCard
