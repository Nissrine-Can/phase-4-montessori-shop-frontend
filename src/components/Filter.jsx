import React, { useState } from 'react'

const Filter = ({ items, filterItems }) => {

    const [filteredCategories, setFilteredCategories] = useState("")

   
   const categories = items.map(item => item.categories)
   const uniqueCategories = categories.filter((category, index, self) => self.indexOf(category) === index); 
   const options = uniqueCategories.map(((uniqueCategory, idx) => <option key={ idx } value={ uniqueCategory }> { uniqueCategory } </option>))

   const handleChange = e => {
    setFilteredCategories(e.target.value)
    filterItems(e.target.value)
  }

  return (
    <div className="category-filter">
        <select 
               value={ filteredCategories } onChange={ handleChange }
               className="ui compact menu"
               >
            <option value="">All</option>
            { options }
        </select>
    </div>
  )
}

export default Filter