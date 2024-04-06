import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { WelcomeScreen,
   SplashScreen,
    SigninScreen,
    SignupScreen,
    ForgotPasswordScreen,
    RegisterPhoneScreen,
    SucessNewPassword,

    } from '../Screens';
import VerificationScreen from '../Screens/VerificationScreen'; // Adjust the path if needed
import RegistrationSuccessScreen from '../Screens/RegistrationSuccessScreen';
import NewPasswordScreen from '../Screens/NewPasswordScreen';


const Stack = createStackNavigator();

const Navigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="RegisterPhone" component={RegisterPhoneScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen name="Vscreen" component={RegistrationSuccessScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="sucesspass" component={SucessNewPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
