import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'


const ItemCard = ({ item }) => {
  return (
    <div className="item-card">
        <Card color='blue' >
            <div className="image">
                <Image src="https://montessorimethd-kbmmarketingltd.netdna-ssl.com/wp-content/uploads/2020/01/wooden-montessori-rattle.jpg" alt="toy" wrapped />
            </div>
            <Card.Content>
                <Card.Header>{item.name}</Card.Header>
                <Card.Description>{item.price}</Card.Description>
                <span style={{paddingLeft: "240px"}}><Icon bordered name="Add to cart" color="blue" area-label="add to cart"/></span>
            </Card.Content>
        </Card>
    </div>
  )
}

export default ItemCard