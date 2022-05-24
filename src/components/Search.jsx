import React, { useState } from 'react'

const Search = ({ searchItems }) => {

    const[name, setName] = useState("")

    const handleChange = e => {
        setName(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        searchItems(name)
    }

 return (
     <form onSubmit={ handleSubmit } className="search-bar" >
     <div className="ui search">
        <div className="ui icon input">
            <input 
                type="text"
                id="name"
                name="name"
                placeholder="Type a name to search..."
                value={ name }
                onChange={handleChange}
    
            />
            <i className="search icon" type="submit" value="Search" />
        </div>
    </div>
    </form>
  )
}

export default Search