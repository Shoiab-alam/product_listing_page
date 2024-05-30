import React from 'react'

const SearchBar = ({setSearchProduct}) => {
  return (
    <div className="mb-4">
    <input
      type="text"
      placeholder="Search products..."
      className="border p-2 w-full rounded-lg"
      onChange={(e)=>{
        setSearchProduct(e.target.value);
      }}
    />
    </div>
  )
}

export default SearchBar