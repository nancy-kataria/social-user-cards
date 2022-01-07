import React from 'react'

const Location = ({location}) => {
    return (
        <div className='location'>
            <p>{location.street.number}, {location.street.name}</p>
            <p>{location.city}</p>
            <p>{location.state}</p>
            <p>{location.postcode}</p>
        </div>
    )
}

export default Location
