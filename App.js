import React from 'react';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';

import Contacts from './src/screens/Contacts';
import ContactCreate from './src/screens/ContactCreate';
import Chats from './src/screens/Chats';
import store from './src/publics/redux/store';


const AppNavigator = createBottomTabNavigator({
  Contact: createStackNavigator({
    ContactList: {
      screen: Contacts,
      navigationOptions: {
        title: 'Contacts'
      }
    },
    ContactCreate: {
      screen: ContactCreate,
      navigationOptions: {
        title: 'Create Contact'
      }
    },
  }),
  Chats: {
    screen: Chats,
    navigationOptions: {
      title: 'Chats'
    }
  }
});

const AppRoot = createAppContainer(AppNavigator);

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppRoot />
      </Provider>
    )
  }
}