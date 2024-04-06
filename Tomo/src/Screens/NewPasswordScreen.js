import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Auth } from 'aws-amplify';
import { Fonts } from '../contants';
import Separator from '../components/Separator';
import Feather from 'react-native-vector-icons/Feather';
import { Display } from '../utils';

const NewPasswordScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [newcode, setCode] = useState('');
  const [password, setPassword] = useState('');

  const handleResetPassword = async () => {
    try {
      await Auth.forgotPasswordSubmit(username, newcode, password); // Submit new password
      navigation.navigate('sucesspass');
    } catch (e) {
      Alert.alert('האימות נכשל:', e.message); // Display the error message
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>איפוס סיסמה</Text>
      <Text style={styles.title}>צור סיסמה חדשה</Text>
      <Text style={styles.content}>תמלא את הפרטים</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <Feather name="user" size={22} style={{ marginRight: 10 }} />
          <TextInput
            placeholder="שם משתמש"
            placeholderTextColor={'#C2C2CB'}
            selectionColor={'#c6cc51'}
            style={styles.inputText}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
      </View>
      <Separator height={15} />
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <Feather name="lock" size={22} style={{ marginRight: 10 }} />
          <TextInput
            placeholder="קוד אימות"
            placeholderTextColor={'#C2C2CB'}
            selectionColor={'#c6cc51'}
            style={styles.inputText}
            onChangeText={(text) => setCode(text)}
          />
        </View>
      </View>
      <Separator height={15} />
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <Feather name="lock" size={22} style={{ marginRight: 10 }} />
          <TextInput
            placeholder="סיסמה חדשה"
            placeholderTextColor={'#C2C2CB'}
            selectionColor={'#c6cc51'}
            style={styles.inputText}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true} // הוסף את השורה הזו
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.signinButton}
        onPress={handleResetPassword}
      >
        <Text style={styles.signinButtonText}>איפוס סיסמה</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'Ariel',
    fontWeight: 'bold',
    lineHeight: 20 * 1.4,
    width: Display.setWidth(80),
    textAlign: 'center',
    color: '#0E122B',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Ariel',
    fontWeight: 'bold',
    lineHeight: 20 * 1.4,
    marginBottom: 10,
    marginTop: 50,
    marginHorizontal: 20,
    color: '#0E122B',
  },
  content: {
    fontSize: 20,
    fontFamily: 'Ariel',
    marginBottom: 20,
    marginTop: 10,
    marginHorizontal: 20,
    color: '#0E122B',
  },
  inputContainer: {
    backgroundColor: '#F8F7F7',
    paddingHorizontal: 10,
    marginHorizontal: 20,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#F8F7F7',
    justifyContent: 'center',
  },
  inputSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 18,
    textAlignVertical: 'center',
    padding: 0,
    height: Display.setHeight(6),
    color: '#0E122B',
    flex: 1,
  },
  signinButton: {
    backgroundColor: '#c6cc51',
    borderRadius: 8,
    marginHorizontal: 20,
    height: Display.setHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signinButtonText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: '#FFFFFF',
  },
});

export default NewPasswordScreen;
