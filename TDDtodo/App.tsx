import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';


export interface MyChildComProps {
  handleButtonPress?:()=> void,
  text?:string
};

export class MyChildCom extends React.Component<MyChildComProps> {
 constructor(props: MyChildComProps) {
    super(props);
    this.state = {
      text: props.text || ""
    }
  }

 
  render() {
    return (
      <View style={styles.appContent}>
        <Text>{this.state.text}</Text>
        <Button testID ={"helloiii"} title={"Press me"} onPress={this.props.handleButtonPress}> </Button>
      </View>

    )
  }
}


export const add = (a: number, b: number) => a + b;



export class App extends React.Component {

  constructor(props: any) {
    super(props);
    this.state = {
      test: props.test || false,
      text: props.text || ""
    }
  }

  internalAdd(a: number, b: number) {
    return a + b;
  }

  componentDidMount() {
    this.setState({ test: false })
  }

  changeTest(val: boolean) {
    this.setState({ test: val })
  }
  handleTextChange = (val: string) => {
    this.setState({ text: val })
  }
  handleButtonPress = () => {
    this.setState({ text: "ButtonPressed" })
  }
  stateChangeFromChild = () => {
    this.setState({ text: "ChildButtonPressed" })

  }
  render() {
    const test: boolean = this.state.test || false
    return (
      test ? <View style={styles.appContent}>
        <Text> Test is please case</Text>
      </View> : <View style={styles.appContent}>
          <Text> hi</Text>
          <TextInput onChangeText={this.handleTextChange} value={this.state.text}></TextInput>
          <TextInput onChangeText={this.handleTextChange} value={this.state.text}></TextInput>

          <Button title={"Press me"} onPress={this.handleButtonPress}> </Button>
          <MyChildCom text = {"newChild"} handleButtonPress={this.stateChangeFromChild} />
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
