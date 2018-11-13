import React, { Component } from 'react';
import {
  Body,
  Card,
  CardItem,
  Container,
  Content,
  Text
} from 'native-base';

export default class Results extends Component {
  static navigationOptions = {
    title: 'Super Scanner',
  };

  render() {
    const scanResult = this.props.navigation.getParam('scanResult', 'Falha na leitura');
    const scanResultType = this.props.navigation.getParam('scanResultType', 'Falha na leitura');
    const scanResultData = this.props.navigation.getParam('scanResultData', 'Falha na leitura');

    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>Resultados</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>Saída: {JSON.stringify(scanResult)}</Text>
                <Text>Tipo de código: {JSON.stringify(scanResultType)}</Text>
                <Text>Tipo de dado: {JSON.stringify(scanResultData)}</Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>[--##--]</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
