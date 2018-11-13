import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import {
  Card,
  CardItem,
  Container,
  Content,
} from 'native-base';

const barCode = require('./assets/images/barCode.png');
const qrCode = require('./assets/images/qrCode.png');

export default class Main extends Component {
  static navigationOptions = {
    title: 'Super Scanner',
  };

  render() {
    return (
      <Container>
        <Content>
          <Card style={{ alignItems: 'center' }}>
            <CardItem bordered>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('CameraScreen')}
              >
                <Image
                  source={barCode}
                  style={{ height: 200, width: 200, flex: 1 }}
                />
              </TouchableOpacity>
            </CardItem>
          </Card>
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
      </Container>
    );
  }
}
