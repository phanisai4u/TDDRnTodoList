import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';


export const add = (a: number, b: number) => a + b;
export class App extends React.Component {

  constructor(props: any) {
    super(props);
    this.state = {
      test: true
    }
  }

  internalAdd(a: number, b: number) {
    return a + b;
  }

  componentDidMount() {
    this.setState({ test: false })
  }

  changeTest (val:boolean) {
    this.setState({ test: val })
  }
  render() {
    const test: boolean = this.state.test || false
    return (
      test ? <View style={styles.appContent}>
        <Text> Test is please case</Text>
       </View> : <View style={styles.appContent}>
          <Text> hi</Text>
        </View>
        
    )

  }
};



const styles = StyleSheet.create({
  appContent: {
    backgroundColor: 'gray',
  }
});

export default App;
