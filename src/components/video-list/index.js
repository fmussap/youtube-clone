'use strict'

import React from 'react'

const VideoList = (props) => (
  <ul className='col-md-4 list-group'>
    {console.log('props', props)}
    {props.videos.length}
  </ul>
)

export default VideoList
