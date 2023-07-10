import {BiSearch} from 'react-icons/bi'
import './SearchBar.css'
import { useState } from 'react'
function SearchBar(){
    const [searchValue , setSearchValue] = useState("")
    return(
        <form className='search-bar'>
            <input onChange={(e)=>{setSearchValue(e.target.value)}} value={searchValue} type="search" placeholder="Buscar produtos" className="search__input" />
            
            <button type="submit" className="search__button"> <BiSearch/> </button>
        </form>
    )
}

export default SearchBar