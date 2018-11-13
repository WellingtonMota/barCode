import React, { Component } from 'react';
import {
  Button,
  Body,
  Container,
  Footer,
  FooterTab,
  Header,
  Icon,
  Left,
  Right,
  Text,
  Title
} from 'native-base';
import CardBarCode from './components/CardBarCode';
import CardQrCode from './components/CardQrCode';

export default class Main extends Component {
  static navigationOptions = {
    title: 'MainScreen',
  };

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Super Scanner</Title>
          </Body>
          <Right />
        </Header>
        <CardBarCode />
        <CardQrCode />
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Wellington Mota</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
