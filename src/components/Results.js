import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Container,
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
const datamatrixCodeImage = require('../assets/images/datamatrix.jpg');
const aztecCodeImage = require('../assets/images/aztec.jpg');
const code128CodeImage = require('../assets/images/code128.jpg');
const code39CodeImage = require('../assets/images/code39.jpg');
const code39mod43CodeImage = require('../assets/images/code39mod43.jpg');
const code93CodeImage = require('../assets/images/code93.jpg');
const ean13CodeImage = require('../assets/images/ean13.jpg');
const ean8CodeImage = require('../assets/images/ean8.jpg');
const interleaved2of5CodeImage = require('../assets/images/interleaved2of5.jpg');
const itf14CodeImage = require('../assets/images/itf14.jpg');
const qrCodeImage = require('../assets/images/qr.jpg');
const pdf417CodeImage = require('../assets/images/pdf417.jpg');
const upceCodeImage = require('../assets/images/upce.jpg');

export default class Results extends Component {
  static navigationOptions = {
    title: 'Super Scanner',
  };

  render() {
    const scanResultType = this.props.navigation.getParam('scanResultType', 'Falha na leitura');
    const scanResultData = this.props.navigation.getParam('scanResultData', 'Falha na leitura');

    let codeImage;
    switch (JSON.stringify(scanResultType)) {
      case 'DATAMATRIX_CODE':
        codeImage = datamatrixCodeImage;
        break;

      case 'AZTEC_CODE':
        codeImage = aztecCodeImage;
        break;

      case 'CODE128_CODE':
        codeImage = code128CodeImage;
        break;

      case 'CODE39_CODE':
        codeImage = code39CodeImage;
        break;

      case 'CODE39MOD43_CODE':
        codeImage = code39mod43CodeImage;
        break;

      case 'CODE93_CODE':
        codeImage = code93CodeImage;
        break;

      case 'EAN13_CODE':
        codeImage = ean13CodeImage;
        break;

      case 'EAN8_CODE':
        codeImage = ean8CodeImage;
        break;

      case 'INTERLEAVED2OF5_CODE':
        codeImage = interleaved2of5CodeImage;
        break;

      case 'ITF14_CODE':
        codeImage = itf14CodeImage;
        break;

      case 'QR_CODE':
        codeImage = qrCodeImage;
        break;

      case 'PDF417_CODE':
        codeImage = pdf417CodeImage;
        break;

      case 'UPCE_CODE':
        codeImage = upceCodeImage;
        break;
    
      default:
        codeImage = logoBarCode;
        break;
    }

    return (
      <Container>
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
