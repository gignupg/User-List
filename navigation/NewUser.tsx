import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Props} from '../App';
import {Input, Button} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';

interface IUser {
  name: string;
  email: string;
  phone: string;
}

export default function NewUser({navigation}: Props) {
  const [user, setUser] = useState<IUser>({
    name: '',
    email: '',
    phone: '',
  });

  function handleInput(input: string, name: keyof IUser) {
    setUser(prevState => ({
      ...prevState,
      [name]: input,
    }));
  }

  async function handleSubmit() {
    console.log('hello');

    const userDocument = await firestore()
      .collection('users')
      .doc('6KpbuCN9W0l0fojOE8yz')
      .get();

    console.log(userDocument);

    // Validate User Input
    let key: keyof IUser;
    for (key in user) {
      if (!user[key]) {
        Alert.alert(`No ${key} provided. Please fill out all fields!`);
        return null;
      }
    }

    // Navigate
    navigation.navigate('User List');
  }

  return (
    <View style={styles.container}>
      <Input
        value={user.name}
        placeholder="Name"
        onChangeText={input => handleInput(input, 'name')}
      />
      <Input
        value={user.email}
        placeholder="Email"
        onChangeText={input => handleInput(input, 'email')}
      />
      <Input
        value={user.phone}
        placeholder="Phone"
        onChangeText={input => handleInput(input, 'phone')}
      />
      <Button
        onPress={handleSubmit}
        title="Create"
        type="outline"
        raised
        titleStyle={styles.text}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  text: {
    fontSize: 20,
    width: '90%',
  },
});
