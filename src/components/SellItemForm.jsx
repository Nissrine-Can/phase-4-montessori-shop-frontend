import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
 import { Button, Header, Form, Grid, Segment, Dropdown } from 'semantic-ui-react'
import { BASE_URL } from '../Globals'
 

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

const SellItemForm = ({ addItem }) => {
  
      const [formData, setFormData] = useState({
          name: "",
          image: "",
          price: "",
          description: "",
          categories: ""
      })
      

      const navigate = useNavigate()

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
    
      function handleSubmit(e) {
        e.preventDefault();
        

        const paramsData ={
            item: formData
        }
        fetch(BASE_URL + "/items", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(paramsData),
        }).then((res) => {
          
          if (res.ok) {
            res.json()
            .then(data => {
              addItem(data)
                navigate("/items")
            }) 
          } else {
            res.json()
            .then(data => {
              console.log(data.errors)
            })
          }
        });
      }

      
      
      return (
        <div style= {{ paddingTop: "50px", marginBottom:"300px" }}>
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
                            placeholder="Price $ 0.00"
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
                        <Button  color='blue'fluid type='submit'>Sell Item</Button>
                        
                    </Segment>
    
                </Form>
                  
          </Grid.Column>
        </Grid>
      </div>
      )
    }
    


export default SellItemForm