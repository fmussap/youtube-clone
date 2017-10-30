'use strict'

import React from 'react'

const VideoItem = ({ video }) => (
  <li className='list-group-item'>
    <div className='video-list media'>
      <div className='media-left'>
        <img
          className='media-object'
          src={video.thumbnails.default.url}
        />
      </div>
      <div className='media-body'>
        <div className='media-heading'>
          {video.title}
        </div>
      </div>
    </div>
  </li>
)

export default VideoItem
