import * as React from "react";
import {
  ImageBackground,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { Icon } from "react-native-elements";
import { Audio } from "expo-av";

const sound = new Audio.Sound();

export default class Relax extends React.Component {
  constructor() {
    super();
  }
  playSound = async () => {
    await sound.loadAsync(require("../Tunes/Relax.mp3"));
    await sound.replayAsync();
  };

  stopSound = async () => {
    await sound.stopAsync();
    await sound.unloadAsync();
  };

  render() {
    return (
      <SafeAreaView
        style={{
          flexGrow: 1,
          justifyContent: "center",
        }}
      >
        <ImageBackground
          source={require("../Images/Relax.jpg")}
          style={{
            flexGrow: 1,
            resizeMode: "cover",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: "50%",
              width: "75%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderRadius: 25,
              padding: 25,
            }}
          >
            <View style={{}}>
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  alignSelf: "center",
                  fontSize: 30,
                }}
              >
                FOCUS
              </Text>

              <Icon name="headphones" type="font-awesome" color="white" />
              <Text style={{ color: "white", margin: "12.5%" }}>
                Use headphones for best experience.
              </Text>
            </View>
            <View
              style={{
                marginTop: "25%",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  this.playSound();
                }}
              >
                <Icon name="play" type="font-awesome" color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.stopSound();
                }}
              >
                <Icon name="pause" type="font-awesome" color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
