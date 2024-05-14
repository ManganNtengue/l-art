import React from 'react'

const Title = ({title}) => {
  return (
    <div className="section-title">
        <h2>
            {title.split(' ')[0]} <span>{title.split(' ')[1]}  </span>
        </h2>

    </div>
  )
}

export default Title