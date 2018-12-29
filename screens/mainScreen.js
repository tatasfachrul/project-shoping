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
  Button
} from "native-base";
import { Image } from "react-native";
import axios from "axios";
// import ReactDOM from "react-dom";


export default class homeScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            products: []
        }
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
        <Header />
        <Content>
          {this.state.products.map(product => (
            <Card style={{ padding: 10 }}>
              <CardItem cardBody>
                <Image
                  source={{
                    uri: product.image_url
                  }}
                  style={{ height: 200, width: "100%", flex: 1 }}
                />
              </CardItem>
              <CardItem bordered>
                <Text>{product.name}</Text>
              </CardItem>
              <CardItem bordered>
                <Text>{product.price}</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Button full warning rounded>
                    <Text>Purchase</Text>
                  </Button>
                </Body>
              </CardItem>
            </Card>
          ))}
        </Content>
      </Container>
    );
  }
}
