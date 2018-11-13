import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import {
  Content,
  Card,
  CardItem
} from 'native-base';

const qrCode = require('../assets/images/qrCode.png');

export default class CardQrCode extends Component {
  render() {
    return (
      <Content>
        <Card style={{ alignItems: 'center' }}>
          <CardItem bordered>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('CameraScreen')}
            >
              <Image
                source={qrCode}
                style={{ height: 200, width: 200, flex: 1 }}
              />
            </TouchableOpacity>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
