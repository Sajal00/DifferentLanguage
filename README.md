This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

## React native multi Language

This React Native project is a multilingual mobile application with user authentication and language selection features. It includes a login screen where users can enter their email and mobile number, generate a One-Time Password (OTP), and a home screen where users can change the app's language and sign out.

## NPM packages Installation

######

    "@react-navigation/native": "^6.1.17",
    "@react-navigation/native-stack": "^6.10.0",
    "react": "18.2.0",
    "react-i18next": "^14.1.2",
    "react-native": "0.74.3",
    "react-native-gesture-handler": "^2.17.1",
    "react-native-safe-area-context": "^4.10.7",
    "react-native-screens": "^3.32.0"

## Folder Structure

      Project Folder==> src
      src==>1.Languages----------------a.bn.json
                                       b.en.json
                                       c.hi.json
                                       d.kn.json
            2.Navigator----------------MainNavigator.js
            3.Screens------------------a.LoginScreen.js
                                       b.HomeScreen.js
            4.Services-----------------a.OTPModel.js
                                       b.i18next.js
                                       c.languagesList.json

## Login Screen

      a.Email Validation: Ensures the email is in a valid format.
      b.Mobile Number Validation: Checks if the mobile number is at least 10 digits long.
      c.OTP Generation: Generates a random 4-digit OTP for user authentication.
      d.State Management: Manages input values and OTP visibility using React useState.

## HomeScreen

      a.Language Selection: Displays a list of available languages in a modal.
      b.Sign Out: Navigates the user back to the LoginScreen and resets the language to English.
      c.Modal Interaction: Shows and hides the language selection modal, providing a list of languages from
         languageResources.

## Translation Management

       a.The app uses i18next and react-i18next for managing translations.
       b.Language Resources: Define the available languages and their translations in the languageResources file.
       c.Change Language: Use the i18next.changeLanguage function to switch between languages dynamically.



