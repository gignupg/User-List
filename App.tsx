import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import UserList from './navigation/UserList';
import UserDetails from './navigation/UserDetails';
import NewUser from './navigation/NewUser';

type RootStackParamList = {
  'User List': undefined;
  'User Details': undefined;
  'New User': undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'User List'
>;
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'User Details'>;

export type Props = {
  navigation: ProfileScreenNavigationProp;
  route: ProfileScreenRouteProp;
};

const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName={'User List'}>
        <Screen
          name="User List"
          component={UserList}
          options={{title: 'User List Application'}}
        />
        <Screen
          name="User Details"
          component={UserDetails}
          options={{title: 'Details about Users'}}
        />
        <Screen
          name="New User"
          component={NewUser}
          options={{title: 'Create a new user'}}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;
