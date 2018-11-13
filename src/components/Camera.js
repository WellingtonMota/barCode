import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { BarcodeFinder } from './BarcodeFinder';

export default class Camera extends Component {
  static navigationOptions = {
    title: 'Super Scanner',
  };

  constructor(props) {
    super(props);
    this.camera = null;
    this.barcodeCodes = [];

    this.state = {
      camera: {
        type: RNCamera.Constants.Type.back,
        flashMode: RNCamera.Constants.FlashMode.auto,
        barcodeFinderVisible: true
      }
    };
  }

  onBarCodeRead(scan) {
    if (scan.data != null) {
      if (!this.barcodeCodes.includes(scan.data)) {
        this.barcodeCodes.push(scan.data);

        this.props.navigation.navigate('ResultsScreen', {
          scanResultType: scan.type,
          scanResultData: scan.data
        });
      }
    }
    return;
  }

  async takePicture() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  }

  pendingView() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'lightgreen',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Waiting</Text>
      </View>
    );
  }

  render() {
    const scanReadType = this.props.navigation.getParam('scanReadType', 'Falha na leitura');

    return (
      <View style={styles.container}>
        <RNCamera
          ref={cam => {
            this.camera = cam;
          }}
          style={styles.preview}
          onBarCodeRead={data => this.scannedBarcode(data)}
          defaultTouchToFocus
          flashMode={this.state.camera.flashMode}
          mirrorImage={false}
          onBarCodeRead={this.onBarCodeRead.bind(this)}
          onFocusChanged={() => { }}
          onZoomChanged={() => { }}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
          style={styles.preview}
          type={this.state.camera.type}
          barCodeTypes={
            [
              scanReadType === 'qr' ? 
                RNCamera.Constants.BarCodeType.qr ||
                RNCamera.Constants.BarCodeType.datamatrix
                :
                RNCamera.Constants.BarCodeType.aztec || 
                RNCamera.Constants.BarCodeType.code128 || 
                RNCamera.Constants.BarCodeType.code39 || 
                RNCamera.Constants.BarCodeType.code39mod43 ||
                RNCamera.Constants.BarCodeType.code93 || 
                RNCamera.Constants.BarCodeType.ean13 || 
                RNCamera.Constants.BarCodeType.ean8 ||
                RNCamera.Constants.BarCodeType.interleaved2of5 || 
                RNCamera.Constants.BarCodeType.itf14 ||
                RNCamera.Constants.BarCodeType.pdf417 || 
                RNCamera.Constants.BarCodeType.upce
            ]
          }
        >
          <BarcodeFinder width={280} height={220} borderColor="red" borderWidth={2} />
        </RNCamera>
        <View style={[styles.overlay, styles.topOverlay]}>
          <Text style={styles.scanScreenMessage}>Por favor, aponte para o código de barras.</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    backgroundColor: '#ededed',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  overlay: {
    position: 'absolute',
    padding: 16,
    right: 0,
    left: 0,
    alignItems: 'center'
  },
  topOverlay: {
    backgroundColor: '#00b4e8',
    top: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bottomOverlay: {
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  enterBarcodeManualButton: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 40
  },
  scanScreenMessage: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
