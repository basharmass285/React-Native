import React from 'react';
import Navigators from './src/navigators';
import { Amplify , Auth } from 'aws-amplify';
import {withAuthenticator} from 'aws-amplify-react-native';
import config from './src/aws-exports';

Amplify.configure(config);


const App = () => <Navigators />;
const signUpConfig = {
    header: "My Customized Sign Up",
    hideAllDefaults: true,
    signUpFields: [
      {
        label: "Full name",
        key: "name",
        required: true,
        displayOrder: 1,
        type: "string",
      },
      {
        label: "Email",
        key: "email",
        required: true,
        displayOrder: 2,
        type: "string",
      },
      {
        label: "Username",
        key: "preferred_username",
        required: true,
        displayOrder: 3,
        type: "string",
      },
      {
        label: "Phone Number",
        key: "phone_number",
        required: true,
        displayOrder: 4,
        type: "string",
      },
      {
        label: "Password",
        key: "password",
        required: true,
        displayOrder: 5,
        type: "password",
      },
    ],
  };
  
  export default App;
  