import React, { Fragment, useState } from 'react'

const EventKeycode = () => {
  const [key, setKey] = useState({})

  window.addEventListener('keydown', (event) => {
    setKey(event)
  })

  return (
    <div id='insert'>
      <div className='key'>Press any key to get the keyCode</div>
      {key.key && (
        <Fragment>
          <div className='key'>
            {key.key === ' ' ? 'Space' : key.key}
            <small>event.key</small>
          </div>
          <div className='key'>
            {key.keyCode}
            <small>event.keyCode</small>
          </div>
          <div className='key'>
            {key.code}
            <small>event.code</small>
          </div>
        </Fragment>
      )}
    </div>
  )
}

export default EventKeycode
