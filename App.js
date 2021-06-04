import React from "react";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import {
  DefaultTheme,
  DarkTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Screens/HomeScreen";
import Study from "./Screens/StudyMusic";
import Relax from "./Screens/RelaxMusic";
import Yoga from "./Screens/YogaMusic";
import Workout from "./Screens/WorkoutMusic";
import Programming from "./Screens/ProgrammingMusic";
import Sleep from "./Screens/SleepMusic";
import Gaming from "./Screens/GamingMusic";

export default function App() {
  const scheme = useColorScheme();
  return (
    <AppearanceProvider>
      <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack.Navigator>
          <Stack.Screen name="FOKUS" component={HomeScreen} />
          <Stack.Screen name="Study" component={Study} />
          <Stack.Screen name="Relax" component={Relax} />
          <Stack.Screen name="Yoga & Meditation" component={Yoga} />
          <Stack.Screen name="Workout" component={Workout} />
          <Stack.Screen name="Programming" component={Programming} />
          <Stack.Screen name="Sleep" component={Sleep} />
          <Stack.Screen name="Gaming" component={Gaming} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  );
}

const Stack = createStackNavigator();
