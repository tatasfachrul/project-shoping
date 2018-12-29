import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Left,
  Right,
  Icon,
  Button,
  Fab,
  Footer
} from "native-base";
import { Image } from "react-native";
import axios from "axios";
// import ReactDOM from "react-dom";

export default class homeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      active: "true"
    };
  }

  //   state = {
  //     products: []
  //   };

  async componentDidMount() {
    const response = await fetch(`http://192.168.43.58:3333/api/v1/products`);
    const json = await response.json();
    this.setState({ products: json });
  }

  render() {
    return (
      <Container>
        <Content>
          {this.state.products.map((product, index) => (
            <Card key={index} style={{ padding: 10 }}>

              {/* Image Section */}
              <CardItem cardBody>
                <Image
                  source={{
                    uri: product.image_url
                  }}
                  style={{ height: 200, width: "100%", flex: 1 }}
                />
              </CardItem>

              {/* Detail Section */}
              <CardItem bordered>
                <Text>{product.name}</Text>
              </CardItem>
              <CardItem bordered>
                <Text>{product.price}</Text>
              </CardItem>

              {/* Button Section */}
              <CardItem>
                <Body>
                  <Button full warning rounded>
                   <Text style={{fontSize: 20}}>Add to Cart &nbsp; <Icon style={{color: 'white'}} name="cart" /></Text>
                  </Button>
                </Body>
              </CardItem>
            </Card>
          ))}
          {/* <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })} >

            </Fab> */}
        </Content>
        <Footer />
      </Container>
    );
  }
}
