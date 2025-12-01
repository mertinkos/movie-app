import { Stack } from "expo-router";
import { StackScreen } from "react-native-screens";

export default function RootLayout() {
  return <Stack>

    <Stack.Screen
      name="(tabs)"
      options={{headerShown:false}}
    ></Stack.Screen> 
    <Stack.Screen
      name="movies/[id]"
      options={{headerShown:false}}
    ></Stack.Screen>

  </Stack>;
}
