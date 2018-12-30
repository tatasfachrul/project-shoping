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
  Button,
  Card,
  CardItem,
  Icon,
  Segment,
  Header,
  Tab,
  Tabs
} from "native-base";
import { Image } from "react-native";
import NumericInput from "react-native-numeric-input";

import _ from "lodash";

import { ip } from "../setServer";
// Redux Dependencies
import axios from "axios";
import { connect } from "react-redux";
import { ALL_ORDERS } from "../redux/actions/order";

class CartScreen extends Component {
  state = {
    sumAll: 0,
    value: 0,
    price: 0,
    key: []
  };
  componentDidMount() {
    this.props.dispatch(ALL_ORDERS());
  }

  handleCheckout = async order => {
    await this.setState({
      sumAll: _.sumBy(this.props.order.results, e => parseInt(e.price))
    });

    let total = this.state.sumAll;
    let err = false;
    let res = null;

    axios
      .post(`${ip}/api/v1/transaction/`, {
        total: total
      })
      .then(res => {
        this.checkout(res.data.id);
      });
  };

  checkout(transaction_id) {
    let res = null;
    let err = false;

    this.props.order.results.map(async rescart => {
      try {
        res = await axios.patch(`${ip}/api/v1/order/` + rescart.id, {
          transaction_id: transaction_id
        });
      } catch (error) {
        err = error.message;
        console.warn(err);
      }

      if (err) {
        alert("Checkout Failed");
      } else {
        alert("Checkout Success");
      }
    });
  }

  handleDelete = event => {
    axios
      .delete(`http://192.168.43.58:3333/api/v1/order/${event}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .then(res => {
        this.props.dispatch(ALL_ORDERS());
      });
  };

  render() {
    return (
      <Container>
        {/* <Tabs>
          <Tab heading="Cart">
            
          </Tab>
          <Tab heading="History">
            
          </Tab>
          
        </Tabs> */}
        <Content>
          {this.props.order.results.map((order, key) => (
            <List key={key}>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square source={{ uri: order.product.image_url }} />
                </Left>
                <Body>
                  <Text>{order.product.name}</Text>
                  <Text note numberOfLines={1}>
                    Rp. {order.product.price}
                  </Text>
                  <Text>Qty. &nbsp;{order.qty}</Text>
                  <NumericInput
                    key={key}
                    initValue={this.state["value" + key] || order.qty}
                    editable
                    minValue={0}
                    step={1}
                    onChange={value =>
                      this.setState({ ["value" + key]: value })
                    }
                  />
                </Body>
                <Right>
                  
                  <Button
                    outline
                    rounded
                    onPress={() => this.handleDelete(order.id)}
                  >
                    <Text>Delete</Text>
                  </Button>
                </Right>
              </ListItem>
            </List>
          ))}
          <Card>
            <CardItem>
              <Body>
                <Button
                  full
                  warning
                  rounded
                  onPress={() => this.handleCheckout()}
                >
                  <Text style={{ fontSize: 20 }}>
                    Checkout &nbsp;
                    <Icon style={{ color: "white" }} name="cash" />
                  </Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  order: state.orderReducer
});

export default connect(mapStateToProps)(CartScreen);
