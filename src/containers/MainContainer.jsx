import React, {useState, useEffect } from 'react'

import { Container } from 'semantic-ui-react'
import ItemsContainer from './ItemsContainer'
import Search from '../components/Search'
import Filter from '../components/Filter'
import ItemDetails from '../components/ItemDetails'

const MainContainer = () => {
 
    const [items, setItems] = useState([]);
    const [itemList, setItemList] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    
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
    
    const itemSelected = (id) => {
        setSelectedItem(items.find((item) => item.id === id))
    }

    const backToItems = () => {
        setSelectedItem(null)
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
            { !selectedItem ? (
                <ItemsContainer items={itemList} itemSelected={itemSelected} />
            ) : (
                <ItemDetails 
                selectedItem={selectedItem}
                backToItems={backToItems}
                />
            )}
            
         </Container>
    </div>
  )
}

export default MainContainer