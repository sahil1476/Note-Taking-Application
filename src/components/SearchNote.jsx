import React from "react";
import SearchIcon from '@mui/icons-material/Search';

function SearchNote({ searchQuery, setSearchQuery, onSearch }){
   function handleSearch(event){
    setSearchQuery(event.target.value);
   }

    return (
    <div className="searchArea">
        <input type="text" 
               value={searchQuery}
               onChange={handleSearch}
               placeholder="Search..." 
        />
        <button className="search-button" onClick={onSearch}>
        <SearchIcon />
        </button>
    </div>
        
    );
}
export default SearchNote;