import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  H2,
  Thumbnail,
  Text,
  Left,
  Body
} from 'native-base';

const logoBarCode = require('../assets/images/logo.jpg');
const qrCodeImage = require('../assets/images/qr.jpg');

export default class Results extends Component {
  static navigationOptions = {
    title: 'Super Scanner',
  };

  render() {
    const scanResultType = this.props.navigation.getParam('scanResultType', 'Falha na leitura');
    const scanResultData = this.props.navigation.getParam('scanResultData', 'Falha na leitura');

    let codeImage;
    switch (JSON.stringify(scanResultType)) {
      case 'QR_OCDE':
        codeImage = qrCodeImage;
        break;
    
      default:
        codeImage = qrCodeImage;
        break;
    }

    return (
      <Container>
        <Header />
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={logoBarCode} />
                <Body>
                  <Text>Resultado</Text>
                  <Text note>Tipo {JSON.stringify(scanResultType)}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={codeImage} style={{ height: 180, width: 180, flex: 1 }} />
                <Text>
                  <H2>Código: {JSON.stringify(scanResultData)}</H2>
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
