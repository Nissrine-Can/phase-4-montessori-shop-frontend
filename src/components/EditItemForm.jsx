import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Header, Form, Grid, Segment, Dropdown } from 'semantic-ui-react'

const ageRangeOptions = [
    {
      key: '0 - 6 Months',
      text: '0 - 6 Months',
      value: '0 - 6 Months',
    },
    {
      key: '6 - 12 Months',
      text: '6 - 12 Months',
      value: '6 - 12 Months',
    },
    {
      key: '1 Year',
      text: '1 Year',
      value: '1 Year',
    },
    {
      key: '2 Years',
      text: '2 Years',
      value: '2 Years',
    },
    {
      key: '3 Years',
      text: '3 Years',
      value: '3 Years',
    }
  ]
const EditItemForm = ({ handleUpdateListing, listingToEdit }) => {

    const [formData, setFormData] = useState({...listingToEdit})
  
     function handleChange(e) {
         setFormData({
           ...formData, 
           [e.target.name]: e.target.value
          })
      }

      function handleSelectChange(e, obj) {
         setFormData({
        ...formData, 
        [obj.name]: obj.value
       })
      }

      const navigate = useNavigate()

      const priceArr = formData.price.split("$")
      const price = priceArr[1] ? parseFloat(priceArr[1]) : parseFloat(priceArr[0])

      function handleSubmit(e) {
        e.preventDefault();

        fetch(`/listings/${listingToEdit.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({...formData,
            price: price })
        })
            handleUpdateListing(formData)
            navigate("/items")
        
     }

  return (
    <div style= {{ paddingTop: "50px" }}>
          <Grid textAlign="center" verticalAlign="middle">
            <Grid.Column style= {{ maxWidth: 800 }}>
              
               <Header as="h1" textAlign='center'>Create an Item</Header>
              
                <Form onSubmit={handleSubmit}>
    
                    <Segment>
                        <Form.Input 
                            placeholder='Name'
                            name='name'
                             type="text"
                             id="name"
                             value={formData.name} 
                             onChange={handleChange}
                            />
                        <Form.Input 
                           placeholder='Image'
                           name='image'
                            type='text'
                            id='image'
                            value={formData.image}
                            onChange={handleChange}
                            />
                        <Form.Input 
                            placeholder="Price 00.00"
                            name='price'
                            type='text'  
                            id='price'
                            value={formData.price}
                            onChange={handleChange}
                             />
                         <Form.TextArea
                            placeholder="Description"
                            name='description'
                            type='text'  
                            id='description'
                            value={formData.description}
                            onChange={handleChange}
                         />
                         <Dropdown
                            placeholder="Age Range"
                            name='categories'
                           
                            id='categories'
                            value={formData.categories}
                           options={ageRangeOptions}
                            selection
                            onChange={handleSelectChange}
                         />
                    </Segment>
    
                    <Segment>
                        <Button  color='red' fluid type='submit'>Edit Item</Button>
                        
                    </Segment>
    
                </Form>
                  
          </Grid.Column>
        </Grid>
      </div>
  )
}



export default EditItemForm