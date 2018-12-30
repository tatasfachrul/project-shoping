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


export default class ListComponen extends Component {
 
  render(){

    return(
        <List >
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square source={{ uri: this.props.image_url }} />
                </Left>
                <Body>
                  <Text>{ this.props.name }</Text>
                  <Text note numberOfLines={1}>
                    Rp. { this.props.price }
                  </Text>
                </Body>
                <Right>
                  <Button
                    outline
                    rounded
                    transparent
                    // onPress={() => this.handleClick(product.id, product.price)}
                  > 
                    
                    {/* <NumericInput
                      initValue={this.state.value}
                      value={this.state.value}
                      editable
                      minValue={0}
                      step={1}
                      onChange={(value) => this.setState({ value })}
                      
                //   rightButtonBackgroundColor="#EA3788"
                //   leftButtonBackgroundColor="#E56B70"
                  /> */}
                  </Button>
                </Right>
              </ListItem>
            </List>
    )

  }
            

}
