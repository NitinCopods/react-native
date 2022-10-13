import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Card = ({ data }) => {
  console.log(data.img);
  return (
    <>
      <ImageBackground
        source={data.img}
        style={styles.container}
        imageStyle={{ borderRadius: 6 }}
      >
        <View style={styles.cardBody }>
          <View style={styles.timeline}>
            <Text style={styles.timelineText}>{data.timeline}</Text>
          </View>
          <View style={styles.playIconContainer}>
            <View style={styles.playIcon}>
              <FontAwesome
                name="play"
                size={28}
                color="black"
                style={{
                  transform: [{ translateX: 4 }],
                }}
              />
            </View>
          </View>
          <Text style={styles.imageText}>{data.imgText}</Text>
        </View>
      </ImageBackground>
    </>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    width: "170px",
    marginRight: "13px",
    flexDirection: "column",
  },
  cardBody: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    flexDirection: "column",
    gap: "60px",
  },
  timeline: {
    width: "100%",
  },
  timelineText: {
    fontSize: "10px",
    fontWeight: "500",
    marginLeft: "auto",
    padding: "2px",
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: "3px",
  },
  playIconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "auto",
  },
  playIcon: {
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    paddingVertical: 10,
    paddingHorizontal: 14,
    display: "flex",
    alignItems: "center",
    borderRadius: "50%",
    cursor: "pointer",
  },
  imageText: {
    fontSize: "12px",
    fontWeight: "500",
  },
});
