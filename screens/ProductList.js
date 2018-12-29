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
import NumericInput from "react-native-numeric-input";

// Redux Dependencies
import axios from "axios";
import { connect } from "react-redux";
import { ALL_PRODUCTS } from "../redux/actions/product";

// Set server
import {ip} from '../setServer'

class ProductList extends Component {
  state = {
    value: 0
  };
  componentDidMount() {
    this.props.dispatch(ALL_PRODUCTS());
  }

  handleSubmit() {
    axios.patch(ip+"/api/v1/order", {
        
    }).then(res => {
      this.props.dispatch(ALL_PRODUCTS());
    });
    this.state.value(0)
  }

  render() {
    return (
      <Container>
        <Content>
          {this.props.product.results.map((product, index) => (
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

              {/* Qty Section */}
              <CardItem bordered style={{ justifyContent: "center" }}>
                <NumericInput
                  value={this.state.value}
                  // onChange={value => this.setState({value})}
                //   rightButtonBackgroundColor="#EA3788"
                //   leftButtonBackgroundColor="#E56B70"
                />
              </CardItem>

              {/* Button Section */}
              <CardItem>
                <Body>
                  <Button
                    full
                    warning
                    rounded
                    onPress={() => this.handleSubmit()}
                  >
                    <Text style={{ fontSize: 20 }}>
                      Add to Cart &nbsp;{" "}
                      <Icon style={{ color: "white" }} name="cart" />
                    </Text>
                  </Button>
                </Body>
              </CardItem>
            </Card>
          ))}
        </Content>
        
        {/* <Footer>
          <Button full transparent>
            <Text style={{ fontSize: 20, color: "white" }}>
              View Cart &nbsp; <Icon style={{ color: "white" }} name="cash" />
            </Text>
          </Button>
        </Footer> */}


      </Container>
    );
  }
}

const mapStateToProps = state => ({
  product: state.productReducer
});

export default connect(mapStateToProps)(ProductList);
