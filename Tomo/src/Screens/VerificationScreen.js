import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Separator } from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors, Fonts } from '../contants';
import { Display } from '../utils';
import { Auth } from 'aws-amplify';
import Feather from 'react-native-vector-icons/Feather';
import { useForm, userForm } from 'react-hook-form';
import { useRoute } from '@react-navigation/native';

const VerificationScreen = ({navigation}) => {
  const route = useRoute(); // הגדר את המשתנה route כאן
  const { control, handleSubmit } = useForm({
    defaultValues: { username: route?.params?.username },
  });
  const [username, setUsername] = useState('');
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const fiveInput = useRef();
  const sexInput = useRef();
  const [verificationCode, setVerificationCode] = useState('');
  const [otp, setOtp] = useState();

  const handleVerification = async (data) => {
    try {
      setUsername(data.username);
      const response = await Auth.confirmSignUp(data?.username, otp);

      // אני מניח שאתה רוצה לעבור לדף "Vscreen" כאן
      navigation.navigate('Vscreen');
      console.log('האימות הצליח!');
    } catch (e) {
      console.error('האימות נכשל:', e);
    }
  };
  

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View style={styles.headerContainer}>
        <Ionicons
          name="chevron-back-outline"
          size={30}
          onPress={() => navigation.goBack()}
          
        />
        <Text style={styles.headerTitle}>אימות OTP</Text>
      </View>
      <Text style={styles.title}>אימות OTP</Text>
      <Text style={styles.content}>
  הזן קוד אימות שנשלח אלייך לטלפון{' '}
</Text>
      <View style={styles.inputContainer}>
      <View style={styles.inputSubContainer}>
          <Feather name="phone" size={22} style={{ marginRight: 10 }} />
          <TextInput
            placeholder="מספר טלפון"
            placeholderTextColor={'#C2C2CB'}
            selectionColor={'#5EF38C'}
            style={styles.inputText}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        </View>
        <View style={styles.inputContainer}>
      <View style={styles.inputSubContainer}>
          <Feather name="lock" size={22} style={{ marginRight: 10 }} />
          <TextInput
            placeholder="קוד אימות"
            placeholderTextColor={'#C2C2CB'}
            selectionColor={'#5EF38C'}
            style={styles.inputText}
            onChangeText={(text) => setOtp(text)}
          />
        </View>
        </View>
      <TouchableOpacity
  style={styles.signinButton}
  onPress={() => { handleVerification({ username: username, code: verificationCode }); }}
>
  <Text style={styles.signinButtonText}>לאמת</Text>
</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  inputSubContainer: {
    flexDirection: "row",
    alignItems: "center",

  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: 'black',
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'bold',
    lineHeight: 20 * 1.4,
    width: Display.setWidth(80),
    textAlign: 'center',
    color: 'black',
  },
  title: {
    fontSize: 20,
    fontFamily: 'bold',
    lineHeight: 20 * 1.4,
    marginTop: 50,
    marginBottom: 10,
    marginHorizontal: 20,
    color: 'black',
  },
  content: {
    fontSize: 20,
    fontFamily: 'bold',
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 20,
    color: 'black',
  },
  phoneNumberText: {
    fontSize: 18,
    fontFamily: 'bold',
    lineHeight: 18 * 1.4,
    color: '#FCE6CD',
    color: 'black',
  },

  signinButton: {
    backgroundColor: '#5EF38C',
    borderRadius: 8,
    marginHorizontal: 20,
    height: Display.setHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    color: '#FFFFFF',
  },
  signinButtonText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: '#FFFFFF',
    fontFamily: 'bold',
  },
  inputContainer: {
    backgroundColor: '#F8F7F7',
    paddingHorizontal: 10,
    marginHorizontal: 20,
    borderRadius: 8,
    borderWidth: 0.5,
    justifyContent: 'center',
    marginBottom: 8,

  },
});

export default VerificationScreen;
