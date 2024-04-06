import React, { useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { Colors, Images } from '../contants';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor='#0E122B' translucent />

      <View style={styles.imageContainer}>
        <Image
          source={Images.PLATE}
          resizeMode='contain'
          style={styles.Image}
        />
      </View>

      <View style={styles.markerContainer}>
        <Animatable.View
          animation='rotate'
          iterationCount='infinite'
          duration={2000}
          style={styles.marker}
        />
      </View>

      <View style={styles.backgroundCurvedContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image: {
    height: 400,
    width: 280,
  },
  markerContainer: {
    position: 'absolute',
    bottom: 40,
    left: '50%',
    marginLeft: -25,
    alignItems: 'center',
  },
  marker: {
    backgroundColor: '#c6cc51',
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  backgroundCurvedContainer: {
    backgroundColor: '#0E122B',
    height: 1950,
    position: 'absolute',
    top: -1 * (2000 - 230),
    width: 2000,
    borderRadius: 2000,
    alignSelf: 'center',
    zIndex: -1,
  },
});

export default SplashScreen;
