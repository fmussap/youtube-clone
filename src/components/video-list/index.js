'use strict'

import React from 'react'

import VideoItem from './video-item'

const VideoList = ({ videos }) => (
  <ul className='col-md-4 list-group'>
    {videos.map((video, index) => (
      <VideoItem key={video.etag} video={video.snippet} />
    ))}
  </ul>
)

export default VideoList
