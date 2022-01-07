import React from 'react'

const PhoneNumber=({number, type})=> {
    return (
        <div className='phone-number'>
            <p>{type}: {number}</p>
        </div>
    )
}

export default PhoneNumber
