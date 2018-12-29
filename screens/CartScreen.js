import React, { Component } from "react";
import {
  Container,
  Content,
  Body,
  Text,
  Left,
  Right,
  List,
  ListItem,
  Thumbnail,
  Form,
  Button
} from "native-base";
import { Image } from "react-native";
import NumericInput from "react-native-numeric-input";

// Redux Dependencies
import axios from "axios";
import { connect } from "react-redux";
import { ALL_ORDERS } from "../redux/actions/order";

class CartScreen extends Component {
  state = {
    value: {}
  };
  componentDidMount() {
    this.props.dispatch(ALL_ORDERS());
  }

  // handleClick(id, price) {
  //   axios.post('http://192.168.43.58:3333/api/v1/order', {
  //       product_id: id,
  //       qty: 1,
  //       price: price,
  //       transaction_id: 1
  //   }).then(res => {
  //     this.props.dispatch(ALL_PRODUCTS());
  //   });
  // }

  render() {
    return (
      <Container>
        <Content>
          {this.props.order.results.map((order, index) => (
            <List key={index}>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square source={{ uri: order.product.image_url }} />
                </Left>
                <Body>
                  <Text>{order.product.name}</Text>
                  <Text note numberOfLines={1}>
                    Rp. {order.product.price}
                  </Text>
                </Body>
                <Right>
                  <Button
                    outline
                    rounded
                    transparent
                    // onPress={() => this.handleClick(product.id, product.price)}
                  >
                    
                    <Text>Qty. &nbsp;{order.qty}</Text>
                  </Button>
                </Right>
              </ListItem>
            </List>
          ))}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  order: state.orderReducer
});

export default connect(mapStateToProps)(CartScreen);
