const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import LoginPage from "./screens/LoginPage";
import Type2LooselyConvertToVis from "./screens/Type2LooselyConvertToVis";
import Text1 from "./components/Text1";
import NdPage from "./screens/NdPage";
import MyLocation from "./screens/MyLocation";
import RdPage from "./screens/RdPage";
import SensorPage from "./screens/SensorPage";
import Track from "./screens/Track";
import NearbyAccident from "./screens/NearbyAccident";
import Hospitalpage from "./screens/Hospitalpage";
import HospitalPage1 from "./screens/HospitalPage1";
import Hospital from "./screens/Hospital";
import AccidentProneAreas from "./screens/AccidentProneAreas";
import Screen2Type1CloselyMat from "./screens/Screen2Type1CloselyMat";
import Community from "./screens/Community";
import DashBoard from "./screens/DashBoard";
import Blood from "./screens/Blood";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import {
  GestureHandlerRootView,
  RectButton,
} from "react-native-gesture-handler";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Epilogue-Bold": require("./assets/fonts/Epilogue-Bold.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  function MaterialIcon({ name, style }: { name: string; style: any }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }
  

  const IconProvider = (name: string) => ({
    toReactElement: (props: any) => MaterialIcon({ name, ...props }),
  });
  

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name: string) { // Explicitly specify type of 'name' as 'string'
          return IconProvider(name);
        },
      }
    );
  }
  
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer>
            {hideSplashScreen ? (
              <Stack.Navigator
                initialRouteName="LoginPage"
                screenOptions={{ headerShown: false }}
              >
                <Stack.Screen
                  name="LoginPage"
                  component={LoginPage}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Type2LooselyConvertToVis"
                  component={Type2LooselyConvertToVis}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="NdPage"
                  component={NdPage}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="MyLocation"
                  component={MyLocation}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="RdPage"
                  component={RdPage}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="SensorPage"
                  component={SensorPage}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Track"
                  component={Track}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="NearbyAccident"
                  component={NearbyAccident}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Hospitalpage"
                  component={Hospitalpage}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="HospitalPage1"
                  component={HospitalPage1}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Hospital"
                  component={Hospital}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="AccidentProneAreas"
                  component={AccidentProneAreas}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Screen2Type1CloselyMat"
                  component={Screen2Type1CloselyMat}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Community"
                  component={Community}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="DashBoard"
                  component={DashBoard}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Blood"
                  component={Blood}
                  options={{ headerShown: false }}
                />
              </Stack.Navigator>
            ) : (
              <LoginPage />
            )}
          </NavigationContainer>
        </GestureHandlerRootView>
      </ApplicationProvider>
    </>
  );
};
export default App;
