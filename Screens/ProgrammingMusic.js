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

export default class Gaming extends React.Component {
  constructor() {
    super();
  }

  loadSound = async () => {
    await sound.loadAsync(require("../Tunes/Programming.mp3"));
  };

  unloadSound = async () => {
    await sound.unloadAsync();
  };

  componentDidMount() {
    this.loadSound();
    sound.setIsLoopingAsync(true);
    Audio.setAudioModeAsync({ staysActiveInBackground: true });
  }

  playSound = async () => {
    await sound.playAsync();
  };

  pauseSound = async () => {
    await sound.pauseAsync();
  };

  componentWillUnmount() {
    this.unloadSound();
  }

  render() {
    return (
      <SafeAreaView
        style={{
          flexGrow: 1,
          justifyContent: "center",
        }}
      >
        <ImageBackground
          source={require("../Images/Programming.jpg")}
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
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View>
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  alignSelf: "center",
                  fontSize: 30,
                }}
              >
                FOKUS
              </Text>

              <Icon name="headphones" type="font-awesome" color="white" />
              <Text
                style={{
                  color: "white",
                  marginTop: "12.5%",
                  alignSelf: "center",
                }}
              >
                Use headphones for best experience.
              </Text>
            </View>
            <View
              style={{
                marginTop: "25%",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  this.playSound();
                }}
                style={{
                  padding: "2.5%",
                  marginRight: "6.125%",
                }}
              >
                <Icon name="play" type="font-awesome" color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.pauseSound();
                }}
                style={{
                  padding: "2.5%",
                  marginLeft: "6.125%",
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
