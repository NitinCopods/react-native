import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar, StyleSheet, View } from "react-native";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Carousal from "./Components/MainBody/Carousal/Carousal";
import Navigator from './routes/homeStack'

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Header></Header>
        {/* <Carousal /> */}
        <Main></Main>
        {/* <Navigator /> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f2ff",
  },
  tab:{
    display:'none'
  }
});
