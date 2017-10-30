'use strict'

import React, { PureComponent } from 'react'
import YTSearch from 'youtube-api-search'
import _ from 'lodash'

import SearchBar from 'components/search-bar'
import VideoList from 'components/video-list'
import VideoDetail from 'components/video-detail'
import { YOUTUBE_API_DATA_KEY as KEY } from './credentials'

class App extends PureComponent {
  constructor () {
    super()
    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.handleSelectedVideo = (selectedVideo) => () => {
      this.setState({ selectedVideo })
    }

    this.videoSearch = (term = 'ReactJs') => {
      YTSearch({ key: KEY, term }, (videos) => {
        this.setState({
          videos,
          selectedVideo: videos[0]
        })
      })
    }

    this.videoSearch()
  }
  render () {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term)
    }, 750)
    return (
      <div>
        <SearchBar handleInputSearch={videoSearch} />
        <div className='app-videos'>
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            videos={this.state.videos}
            handleSelectedVideo={this.handleSelectedVideo}
          />
        </div>
      </div>
    )
  }
}

export default App
