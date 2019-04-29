import React from "react";
import {
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  Picker,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  Button,
} from "react-native";
import axios from "axios";
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    name: "",
    q1: "0",
    q2: "0",
    q3: "0",
    q4: "0",
    q5: "0",
    ta: "",
    rh: "",
  };

  onSubmit = e => {
    e.preventDefault();
    let url =
      "https://script.google.com/macros/s/AKfycbyfASpGVzHZ2w9yT9sii_pmTvui2RIw7LL08RnS9cdHTZBWAM4/exec?name=" +
      this.state.name +
      "&q1=" +
      this.state.q1 +
      "&q2=" +
      this.state.q2 +
      "&q3=" +
      this.state.q3 +
      "&q4=" +
      this.state.q4 +
      "&q5=" +
      this.state.q5 +
      "&ta=" +
      this.state.ta +
      "&rh=" +
      this.state.rh;
    console.log(this.state);
    axios({
      method: "GET",
      url: url,
      dataType: "json",
    })
      .then(e => {
        Alert.alert("sucess");
      })
      .catch(e => {
        Alert.alert(e);
      });
  };

  render() {
    return (
      <KeyboardAvoidingView behaviour="padding">
      <Text>Before</Text>
        <ScrollView style={styles.container}>
          <Text>Name :</Text>
          <TextInput
            style={styles.input}
            onChangeText={(itemValue, itemIndex) =>
              this.setState({ name: itemValue })
            }
          />

          <Text>Ta :</Text>
          <TextInput
            style={styles.input}
            onChangeText={(itemValue, itemIndex) =>
              this.setState({ ta: itemValue })
            }
          />

          <Text>RH :</Text>
          <TextInput
            style={styles.input}
            onChangeText={(itemValue, itemIndex) =>
              this.setState({ rh: itemValue })
            }
          />

          <Text>
            How do you feel about thermal environment about this room ?
          </Text>
          <Picker
            selectedValue={this.state.q1}
            style={styles.input}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ q1: itemValue })
            }
          >
            <Picker.Item label="Slightly Cool" value="-1" />
            <Picker.Item label="Cool" value="-2" />
            <Picker.Item label="Cold" value="-3" />
            <Picker.Item label="Very Cold" value="-4" />
            <Picker.Item label="Neutral" value="0" />
            <Picker.Item label="Slightly Warm" value="1" />
            <Picker.Item label="Warm" value="2" />
            <Picker.Item label="Hot" value="3" />
            <Picker.Item label="Very Hot" value="4" />
          </Picker>

          <Text>How do you prefer environment to be ?</Text>
          <Picker
            selectedValue={this.state.q2}
            style={styles.input}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ q2: itemValue })
            }
          >
            <Picker.Item label="Need Cooler" value="-1" />
            <Picker.Item label="No Change" value="0" />
            <Picker.Item label="Need Warmer" value="1" />
          </Picker>

          <Text>How do you express the thermal environment</Text>
          <Picker
            selectedValue={this.state.q3}
            style={styles.input}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ q3: itemValue })
            }
          >
            <Picker.Item label="Cold" value="-4" />
            <Picker.Item label="Much Too Cool" value="-3" />
            <Picker.Item label="Too Cool" value="-2" />
            <Picker.Item label="Comfortably Cool" value="-1" />
            <Picker.Item label="Comfortable" value="0" />
            <Picker.Item label="Comfortably Warm" value="-1" />
            <Picker.Item label="Too Warm" value="-2" />
            <Picker.Item label="Much Too Warm" value="-3" />
            <Picker.Item label="Hot" value="-4" />
          </Picker>

          <Text>How do you feel about humidity to be?</Text>
          <Picker
            selectedValue={this.state.q4}
            style={styles.input}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ q4: itemValue })
            }
          >
            <Picker.Item label="Too Dry" value="-3" />
            <Picker.Item label="Dry" value="-2" />
            <Picker.Item label="Slightly Dry" value="-1" />
            <Picker.Item label="Neutral" value="0" />
            <Picker.Item label="Slightly Humid" value="-1" />
            <Picker.Item label="Humid" value="-2" />
            <Picker.Item label="Too Humid" value="-3" />
          </Picker>

          <Text>How do you prefer humidity to be ?</Text>
          <Picker
            selectedValue={this.state.q5}
            style={styles.input}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ q5: itemValue })
            }
          >
            <Picker.Item label="Need dry" value="-1" />
            <Picker.Item label="No Change" value="0" />
            <Picker.Item label="Need humid" value="1" />
          </Picker>

          <Button onPress={this.onSubmit} title="Submit" />

          <Text>
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    paddingTop: 50,
  },
  input: {
    height: 30,
    borderColor: "black",
    marginBottom: 20,
    marginTop: 5,
    borderWidth: 0.5,
    borderRadius: 10,
    paddingLeft: 10,
  },
});
