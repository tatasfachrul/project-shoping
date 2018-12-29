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

// Redux Dependencies
import axios from "axios";
import { connect } from "react-redux";
import { ALL_PRODUCTS } from "../redux/actions/product";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      active: "true"
    };
  }

  componentDidMount() {
    this.props.dispatch(ALL_PRODUCTS());
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

              {/* Button Section */}
              <CardItem>
                <Body>
                  <Button full warning rounded>
                    <Text style={{ fontSize: 20 }}>
                      Add to Cart &nbsp;{" "}
                      <Icon style={{ color: "white" }} name="cart" />
                    </Text>
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

const mapStateToProps = state => ({
  product: state.productReducer
});

export default connect(mapStateToProps)(ProductList);
