import React, { Component } from 'react';
import {
  Container,
  Content,
  Text
} from 'native-base';

export default class Results extends Component {
  static navigationOptions = {
    title: 'Super Scanner',
  };

  render() {
    return (
      <Container>
        <Content>
          <Text>
            Resultados
          </Text>
        </Content>
      </Container>
    );
  }
}
