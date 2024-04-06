import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors, Fonts } from '../contants';
import { Images } from '../contants';
import { Display } from '../utils';

const SucessNewPassword = ({ navigation }) => {
  return (
    <View style={styles.container}>
     <Image source={Images.VSCREEN1} style={styles.image} />
      <Text style={styles.successText}>הסיסמה השתנתה בהצלחה</Text>
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Signin')}>
        <Text style={styles.loginButtonText}>להתחברות</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: 150,
    height: 150,
  },
  successText: {
    fontSize: 24,
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginTop: 20,
    color:'black',
  },
  loginButton: {
    backgroundColor: '#5EF38C',
    borderRadius: 8,
    marginHorizontal: 25,
    height: Display.setHeight(6),
    width: Display.setWidth(80),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:50,
    
  },
  loginButtonText: {
    fontSize: 18,
    fontFamily: Fonts.POPPINS_MEDIUM,
    color: '#FFFFFF',
  },
});

export default SucessNewPassword;
