'use strict'

import React, { PureComponent } from 'react'
import YTSearch from 'youtube-api-search'

import SearchBar from 'components/search-bar'
import VideoList from 'components/video-list'
import VideoDetail from 'components/video-detail'
import { YOUTUBE_API_DATA_KEY as KEY } from './credentials'

class App extends PureComponent {
  constructor () {
    super()
    this.state = {
      searchValue: '',
      videos: [],
      selectedVideo: null
    }

    YTSearch({ key: KEY, term: 'surfboards' }, (videos) => {
      this.setState({ videos })
    })

    this.handleInputSearch = (e) => {
      this.setState({ value: e.target.value })
    }
  }
  render () {
    return (
      <div>
        <SearchBar
          value={this.state.searchValue}
          handleInputSearch={this.handleInputSearch}
        />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

export default App
