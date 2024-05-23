import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Search() {
  const [searchParams , setSearchparams] = useSearchParams();
   const handleSearch = (e) => {
    e.preventDefault();
    alert(searchParams.get('q'));
   }
  return (
    <div>
      <h1>This is a Search page</h1>
      <form onSubmit={handleSearch} >
        <label htmlFor="">Seach</label>
        <input type="text" placeholder='Search'onChange={(e) => setSearchparams({q:e.target.value})} />
        <br /> <br />
        <input type="submit" value="Search" />
      </form>
    </div>
  )
}

export default Search
