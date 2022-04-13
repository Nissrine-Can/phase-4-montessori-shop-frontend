import React, {useState, useEffect } from 'react'
import { Container } from 'semantic-ui-react'
import ItemsContainer from './ItemsContainer'


const MainContainer = () => {
 
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch("/items")
        .then((resp) => resp.json())
        .then((data) => {
            setItems(data)
        })
    }, [])

  return (
    <div>
        <Container textAlign="center">
            <br />
            <h2>Our Inventory</h2>
            <br />
            <ItemsContainer items={items}/>
        </Container>
    </div>
  )
}

export default MainContainer