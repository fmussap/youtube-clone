'use strict'

import React from 'react'

const SearchBar = ({ handleInputSearch, value }) => {
  return (
    <input value={value} onChange={handleInputSearch} />
  )
}

export default SearchBar
