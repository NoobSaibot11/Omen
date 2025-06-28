import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';

const Home = () => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Text style={{ color: 'purple', fontSize: 25 }}>Home</Text>
      <TouchableOpacity onPress={() => console.log('Hello')}>
        <Text>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
