import * as React from 'react';
import {View, Pressable, StyleSheet, Text, Alert} from 'react-native';
import {Button} from 'react-native-elements';
import {Props} from '../App';

export default function UserList({navigation}: Props) {
  return (
    <View style={styles.container}>
      <Button
        title="Create New User"
        titleStyle={styles.text}
        raised
        onPress={() => navigation.navigate('New User')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  button: {
    margin: 10,
  },
  text: {
    fontSize: 20,
    width: '100%',
  },
});
