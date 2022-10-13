import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const CardWrapper = ({ children, heading, description, btnText }) => {
  return (
    <View style={styles.CardWrapper}>
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.description}>{description}</Text>
      {children}
      {btnText !== "" ? (
        <View style={styles.btnContainer}>
          <Pressable style={styles.button}>
            <Text style={styles.btnText}>{btnText}</Text>
          </Pressable>
        </View>
      ) : (
        ""
      )}
    </View>
  );
};

export default CardWrapper;

const styles = StyleSheet.create({
  CardWrapper: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 13,
    marginBottom: 7,
    shadowColor: '#171717',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  heading: {
    fontSize: "19px",
    fontWeight: "700",
    paddingHorizontal: 13,
  },
  description: {
    fontSize: "13px",
    fontWeight: "400",
    color: "gray",
    paddingVertical: 5,
    paddingHorizontal: 13,
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#5f259f",
    paddingHorizontal: 13,
    paddingVertical: 6,
    borderRadius: 20,
  },
  btnText: {
    color: "white",
    fontSize: "9px",
    fontWeight: "700",
    display: "flex",
    justifyContent: "center",
  },
});
