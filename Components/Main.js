import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Calculator from "./MainBody/Calculator";
import MainCard from "./MainBody/MainCard";
import MutualFund from "./MainBody/MutualFund";

const Main = () => {
  return (
    <ScrollView>
      <View style={styles.mainPage}>
        <MainCard></MainCard>
        <Calculator></Calculator>
        <MutualFund></MutualFund>
      </View>
    </ScrollView>
  );
};

export default Main;

const styles = StyleSheet.create({
  mainPage: {
    padding: 7,
    overflow:'scroll'
  },
});
