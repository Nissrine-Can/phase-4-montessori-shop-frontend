import React from 'react'
import { Container, Grid, Segment, Header, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div sytle={{ paddingTop: "500px"}}>
      <Container >
          <Segment vertical>
            <Grid stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: "2em"}}>
                  Who We Are?
                </Header>
                <p style={{ fontSize: "1.33em"}}> 
                We are a Montessori inspired community of people looking to buy or sell materials. Lorem ipsum dolor sit amet. Qui quisquam reprehenderit id iste omnis ex placeat facere et doloremque fugit nam recusandae quod hic velit aut ducimus mollitia. <br/><br />Sed asperiores sed accusamus iste non nihil autem hic quod veniam est consectetur accusamus ut consequatur autem. Quo officiis quos vel eius omnis et nesciunt soluta 33 voluptate totam sit eaque ducimus eum facilis optio.
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={8}> 
                <Image size ="large" src="https://cdn.shopify.com/s/files/1/2386/2119/products/MotessorriShelf-Rotation7.png?v=1625583647" alt="montessori toy shelf" />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row> 
              <Grid.Column textAlign ="left"> 
                <br />
                <br />
                <Grid.Row>
                  <Grid.Column>
                     <Image size="large" floated="left" src="https://reachformontessori.com/wp-content/uploads/2021/02/Copy-of-Reflection-of-Your-Choices-Inspiration-Quote-Template.png.webp" alt="quote play is the work of a child"/>
                  </Grid.Column>
                  <Grid.Column floated="right">
                  <Header as="h3" style={{ fontSize: "2em"}}>
                  Our Mission
                </Header>
                <p style={{ fontSize: "1.33em"}}> 
                To provide Montessori products at an afordable price. Due to their highest quality, Montessori toys have a great resale value. Lorem ipsum dolor sit amet. Qui quisquam reprehenderit id iste omnis ex placeat facere et doloremque fugit nam recusandae quod hic velit aut ducimus mollitia. <br /> <br />
                Sed asperiores sed accusamus iste non nihil autem hic quod veniam est consectetur accusamus ut consequatur autem. Quo officiis quos vel eius omnis et nesciunt soluta 33 voluptate totam sit eaque ducimus eum facilis optio.
                </p><br/> <br/> 
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                <Link to="/items">
                  <Button size="huge" color="yellow"> Browse Items</Button>
                </Link>
                </Grid.Row>

              </Grid.Column>
            </Grid.Row>
            </Grid>
          </Segment>
      </Container>
    </div>
  )
}

export default About