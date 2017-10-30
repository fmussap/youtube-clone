'use strict'

import React from 'react'

const VideoItem = ({ video, handleSelectedVideo }) => (
  <li className='list-group-item' onClick={handleSelectedVideo(video)}>
    <div className='video-list media'>
      <div className='media-left'>
        <img
          className='media-object'
          src={video.snippet.thumbnails.default.url}
        />
      </div>
      <div className='media-body'>
        <div className='media-heading'>
          {video.snippet.title}
        </div>
      </div>
    </div>
  </li>
)

export default VideoItem
