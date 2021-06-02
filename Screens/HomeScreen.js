import * as React from "react";
import {
  ImageBackground,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={{}}>
        <ScrollView scrollEnabled>
          <View>
            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => this.props.navigation.navigate("Study")}
            >
              <ImageBackground
                source={require("../Images/Study.jpg")}
                style={styles.imageBackground}
              >
                <View style={styles.textView}>
                  <Text style={styles.text}>Study</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => this.props.navigation.navigate("Relax")}
            >
              <ImageBackground
                source={require("../Images/Relax.jpg")}
                style={styles.imageBackground}
              >
                <View style={styles.textView}>
                  <Text style={styles.text}>Relax</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() =>
                this.props.navigation.navigate("Yoga & Meditation")
              }
            >
              <ImageBackground
                source={require("../Images/Yoga.jpg")}
                style={styles.imageBackground}
              >
                <View style={styles.textView}>
                  <Text style={styles.text}>Yoga & Meditation</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => this.props.navigation.navigate("Workout")}
            >
              <ImageBackground
                source={require("../Images/Workout.jpg")}
                style={styles.imageBackground}
              >
                <View style={styles.textView}>
                  <Text style={styles.text}>Workout</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => this.props.navigation.navigate("Programming")}
            >
              <ImageBackground
                source={require("../Images/Programming.jpg")}
                style={styles.imageBackground}
              >
                <View style={styles.textView}>
                  <Text style={styles.text}>Programming</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => this.props.navigation.navigate("Sleep")}
            >
              <ImageBackground
                source={require("../Images/Sleep.jpg")}
                style={styles.imageBackground}
              >
                <View style={styles.textView}>
                  <Text style={styles.text}>Sleep</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={() => this.props.navigation.navigate("Gaming")}
            >
              <ImageBackground
                source={require("../Images/Gaming.jpg")}
                style={styles.imageBackground}
              >
                <View style={styles.textView}>
                  <Text style={styles.text}>Gaming</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  touchableOpacity: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: "90%",
    height: 200,
    margin: "5%",
    borderRadius: 25,
  },
  imageBackground: {
    flexGrow: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 25,
    borderColor: "teal",
    borderWidth: 2.5,
  },
  textView: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
});
