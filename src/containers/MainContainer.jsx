import React, {useState, useEffect } from 'react'
import { Container } from 'semantic-ui-react'
import ItemsContainer from './ItemsContainer'
import SearchBar from '../components/SearchBar'

const MainContainer = () => {
 
    const [items, setItems] = useState([])
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("/items")
        .then((resp) => resp.json())
        .then((data) => {
            setItems(data)
        })
    }, [])

    const displayedItems = items.filter((item) => {
        return item.name.toLowerCase().includes(searchTerm.toLowerCase())
    })

  return (
    <div>
        <Container>
            <br />
            <h2>Our Inventory</h2>
            <br />
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <ItemsContainer items={displayedItems}/>
        </Container>
    </div>
  )
}

export default MainContainer