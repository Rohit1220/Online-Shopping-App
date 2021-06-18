import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import C11 from './Components/Communications/Phones/BasicPhones/Beetel/C11';
import BacupPlusSlim2tb from './Components/Electronics/Hardisk/External/Segate/BackupPlusSlim2TB';
import Dlink650 from './Components/Networking/Routers/Dlink/650';

export default function App() {
  return <AppContainer />;
}

const switchNavigator = createSwitchNavigator({
  LoginScreen: { screen: LoginScreen },
  HomeScreen: { screen: HomeScreen },
  BeetelC11: { screen: C11 },
  SegateBackupPlusSlim2TB: { screen: BacupPlusSlim2tb },
  Dlink650: { screen: Dlink650 },
});

const AppContainer = createAppContainer(switchNavigator);
