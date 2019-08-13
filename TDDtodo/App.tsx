import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { number } from 'prop-types';


export const add = (a: number, b: number) => a + b;
const App = () => {
  
  return (
    <View style={styles.appContent}>
      <Text> hi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  appContent: {
    backgroundColor:'gray',
  }
});

export default App;
