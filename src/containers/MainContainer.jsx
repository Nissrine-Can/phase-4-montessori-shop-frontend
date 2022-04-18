import React, {useState, useEffect } from 'react'

import { Container } from 'semantic-ui-react'
import ItemsContainer from './ItemsContainer'
import Search from '../components/Search'
import Filter from '../components/Filter'

const MainContainer = () => {
 
    const [items, setItems] = useState([]);
    const [itemList, setItemList] = useState([]);
    
    useEffect(() => {
        fetch("/items")
        .then((resp) => resp.json())
        .then((data) => {
            setItems(data)
            setItemList(data)
        })
    }, [])

    const searchItems = term => {
        fetch("/items?search=" + term)
        .then(resp => resp.json())
        .then(data => setItemList(data))
    }

    const filterItems = filter => {
        if (filter === "") {
            setItemList(items)
        } else {
            fetch("/items?filter=" + filter)
            .then(resp => resp.json())
            .then(data => setItemList(data))
         }
    
    }
    


    
   return (
    <div>
        <Container>
            <br />
            <h2>Our Inventory</h2>
            <br />
            <Search searchItems={searchItems} />
            <Filter items={items} filterItems={filterItems} />
            <br />
            <ItemsContainer items={itemList} />
         </Container>
    </div>
  )
}

export default MainContainer