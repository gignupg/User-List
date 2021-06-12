import * as React from 'react';
import { View, Text, Button } from 'react-native';
import {Props} from '../App'

export default function UserDetails({navigation}: Props) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>User Details</Text>
        <Button
          title="Go to the User List"
          onPress={() => navigation.navigate('User List')}
        />
      </View>
    );
  }