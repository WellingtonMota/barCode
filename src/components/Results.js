import React, { Component } from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from 'native-base';

export default class Results extends Component {
  static navigationOptions = {
    title: 'ResultsScreen',
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
        <Content>
          <Text>
            Resultados
          </Text>
        </Content>
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
